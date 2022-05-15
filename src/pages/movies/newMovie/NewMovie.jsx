import { createMovie } from "context/movieContext/apiCalls";
import { MovieContext } from "context/movieContext";
import { useContext, useEffect, useState } from "react";
import storage from "../../../firebase";
import "./newMovie.css";

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [uploadedComplete, setUploadedComplete] = useState(null);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done.");
          if (progress === 100) {
            setUploadedComplete(true);
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (img) {
      upload([{ file: img, label: "img" }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    console.log("Movie has be Created");
  };

  useEffect(() => {
    setUploaded((prev) => prev + 1);
  }, [img]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>

        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="text"
            placeholder="trailer"
            name="trailer"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange} defaultValue="type">
            <option disabled={true} value="type">
              Select type
            </option>
            <option value="movie">Movie</option>
            <option value="serie">Serie</option>
          </select>
        </div>
        <div className="addProductItem">
          <div className="addButtonItem">
            <button className="addProductButton" onClick={handleUpload}>
              Upload
            </button>

            <button
              className="addProductButton"
              onClick={handleSubmit}
              disabled={uploaded <= 1 && uploadedComplete === true}
              style={{ cursor: uploaded <= 1 ? "not-allowed" : "pointer" }}
            >
              Create
            </button>

            <span className="up">
              {uploadedComplete === true ? "Upload Complete" : ""}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
