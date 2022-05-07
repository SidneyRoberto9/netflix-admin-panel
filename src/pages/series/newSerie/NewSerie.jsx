import { createSerie } from "context/serieContext/apiCalls";
import { SerieContext } from "context/serieContext";
import { useContext, useEffect, useState } from "react";
import storage from "firebase";
import "./newSerie.css";

export default function NewSerie() {
  const [serie, setSerie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(SerieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSerie({ ...serie, [e.target.name]: value });
  };

  const handleMulteChange = (e) => {
    const value = e.target.value;
    let valueSplit = value.split(/\r?\n/);
    setSerie({ ...serie, [e.target.name]: valueSplit });
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
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setSerie((prev) => {
              return { ...prev, [item.label]: url };
            });
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createSerie(serie, dispatch);
    console.log("Series has be created");
  };

  useEffect(() => {
    setUploaded((prev) => prev + 1);
  }, [img, imgTitle, imgSm, trailer]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Serie</h1>
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
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
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
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <textarea
            name="video"
            cols="30"
            rows="10"
            onChange={handleMulteChange}
          />
        </div>

        <button className="addProductButton" onClick={handleUpload}>
          Upload
        </button>

        <button
          className="addProductButton"
          onClick={handleSubmit}
          disabled={uploaded <= 4}
          style={{ cursor: uploaded <= 4 ? "not-allowed" : "pointer" }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
