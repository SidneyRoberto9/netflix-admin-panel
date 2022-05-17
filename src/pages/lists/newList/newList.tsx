import { createList } from "context/listContext/apiCalls";
import { getMovies } from "context/movieContext/apiCalls";
import { Key, useContext, useEffect, useState } from "react";
import { MovieContext } from "context/movieContext";
import { ListContext } from "context/listContext";
import { useHistory } from "react-router-dom";
import "./newList.css";
import { List } from "models/list.model";

export default function NewList() {
  const [list, setList] = useState({} as List);
  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  const { state, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e: {
    target: {
      selectedOptions: Iterable<unknown> | ArrayLike<unknown>;
      name: any;
    };
  }) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option: HTMLInputElement) => option.value
    );
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
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
            <label>Genre</label>
            <input
              type="text"
              placeholder="genre"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange} defaultValue="series">
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {state.movies.map(
                (movie: {
                  type: string;
                  _id: Key | readonly string[];
                  title: {};
                }) => {
                  return list.type === "movie"
                    ? movie.type === "movie" && (
                        <option value={movie._id}>{movie.title}</option>
                      )
                    : movie.type === "serie" && (
                        <option value={movie._id}>{movie.title}</option>
                      );
                }
              )}
            </select>
          </div>

          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
