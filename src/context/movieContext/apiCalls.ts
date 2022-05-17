import { Movie } from "models/movie.model";
import { api } from "../../services/api";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch: {
  (value: any): void;
  (value: any): void;
  (arg0: { type: string; payload?: Movie }): void;
}) => {
  dispatch(getMoviesStart());
  try {
    const res = await api.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const getMoviesNew = async (dispatch: {
  (value: any): void;
  (arg0: { type: string; payload?: Movie }): void;
}) => {
  dispatch(getMoviesStart());
  try {
    const res = await api.get("/movies?new=true", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const deleteMovie = async (
  id: string,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload?: string }): void;
  }
) => {
  dispatch(deleteMovieStart());
  try {
    await api.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};

export const createMovie = async (
  movie: Movie,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload?: Movie }): void;
  }
) => {
  dispatch(createMovieStart());
  try {
    const res = await api.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};
