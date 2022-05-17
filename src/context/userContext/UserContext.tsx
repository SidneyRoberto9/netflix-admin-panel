import { createContext, useReducer, Dispatch, FC } from "react";
import { User } from "models/user.model";
import UserReducer from "./UserReducer";

interface StateI {
  users: User[];
  isFetching: boolean;
  error: boolean;
}

interface InitialStateI {
  state: StateI;
  dispatch: Dispatch<any>;
}

const initialState: StateI = {
  users: [] as User[],
  isFetching: false,
  error: false,
};

export const UserContext = createContext<InitialStateI>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
