export const getSeriesStart = () => ({
  type: "GET_SERIES_START",
});

export const getSeriesSuccess = (series) => ({
  type: "GET_SERIES_SUCCESS",
  payload: series,
});

export const getSeriesFailure = () => ({
  type: "GET_SERIES_FAILURE",
});

export const createSerieStart = () => ({
  type: "CREATE_SERIE_START",
});

export const createSerieSuccess = (serie) => ({
  type: "CREATE_SERIE_SUCCESS",
  payload: serie,
});

export const createSerieFailure = () => ({
  type: "CREATE_SERIE_FAILURE",
});

export const updateSerieStart = () => ({
  type: "UPDATE_SERIE_START",
});

export const updateSerieSuccess = (serie) => ({
  type: "UPDATE_SERIE_SUCCESS",
  payload: serie,
});

export const updateSerieFailure = () => ({
  type: "UPDATE_SERIE_FAILURE",
});

export const deleteSerieStart = () => ({
  type: "DELETE_SERIE_START",
});

export const deleteSerieSuccess = (id) => ({
  type: "DELETE_SERIE_SUCCESS",
  payload: id,
});

export const deleteSerieFailure = () => ({
  type: "DELETE_SERIE_FAILURE",
});
