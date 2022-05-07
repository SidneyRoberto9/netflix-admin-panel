import SerieReducer from "./SerieReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  series: [],
  isFetching: false,
  error: false,
};

export const SerieContext = createContext(INITIAL_STATE);

export const SerieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SerieReducer, INITIAL_STATE);

  return (
    <SerieContext.Provider
      value={{
        series: state.series,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </SerieContext.Provider>
  );
};
