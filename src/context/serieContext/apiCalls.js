import { api } from "../../services/api";
import {
  createSerieFailure,
  createSerieStart,
  createSerieSuccess,
  deleteSerieFailure,
  deleteSerieStart,
  deleteSerieSuccess,
  getSeriesFailure,
  getSeriesStart,
  getSeriesSuccess,
} from "./SerieActions";

export const getSeries = async (dispatch) => {
  dispatch(getSeriesStart());
  try {
    const res = await api.get("/series", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getSeriesSuccess(res.data));
  } catch (error) {
    dispatch(getSeriesFailure());
  }
};

export const getSeriesNew = async (dispatch) => {
  dispatch(getSeriesStart());
  try {
    const res = await api.get("/series?new=true", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getSeriesSuccess(res.data));
  } catch (error) {
    dispatch(getSeriesFailure());
  }
};

export const deleteSerie = async (id, dispatch) => {
  dispatch(deleteSerieStart());
  try {
    await api.delete("/series/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteSerieSuccess(id));
  } catch (error) {
    dispatch(deleteSerieFailure());
  }
};

export const createSerie = async (Serie, dispatch) => {
  dispatch(createSerieStart());
  try {
    const res = await api.post("/series", Serie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createSerieSuccess(res.data));
  } catch (error) {
    dispatch(createSerieFailure());
  }
};
