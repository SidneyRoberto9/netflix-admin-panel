import ListReducer from "./ListReducer";
import { createContext, Dispatch, FC, useReducer } from "react";
import { List } from "models/list.model";

interface StateI {
  lists: List[];
  isFetching: boolean;
  error: boolean;
}

interface InitialStateI {
  state: StateI;
  dispatch: Dispatch<any>;
}

const initialState: StateI = {
  lists: [] as List[],
  isFetching: false,
  error: false,
};

export const ListContext = createContext<InitialStateI>({
  state: initialState,
  dispatch: () => null,
});

export const ListProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, initialState);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};
