const SerieReducer = (state, action) => {
  switch (action.type) {
    case "GET_SERIES_START":
      return {
        series: [],
        isFetching: true,
        error: false,
      };
    case "GET_SERIES_SUCCESS":
      return {
        series: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_SERIES_FAILURE":
      return {
        series: [],
        isFetching: false,
        error: true,
      };

    case "CREATE_SERIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_SERIE_SUCCESS":
      return {
        series: [...state.series, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_SERIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_SERIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_SERIE_SUCCESS":
      return {
        series: state.series.map(
          (serie) => serie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_SERIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_SERIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_SERIE_SUCCESS":
      return {
        series: state.series.filter((serie) => serie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_SERIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default SerieReducer;
