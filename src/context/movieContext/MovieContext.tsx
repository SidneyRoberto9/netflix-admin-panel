import MovieReducer from "./MovieReducer";
import { createContext, Dispatch, FC, useReducer } from "react";
import { Movie } from "models/movie.model";

interface StateI {
  movies: Movie[];
  isFetching: boolean;
  error: boolean;
}

interface InitialStateI {
  state: StateI;
  dispatch: Dispatch<any>;
}

const initialState: StateI = {
  movies: [] as Movie[],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext<InitialStateI>({
  state: initialState,
  dispatch: () => null,
});

export const MovieProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
