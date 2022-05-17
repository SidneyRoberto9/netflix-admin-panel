import AuthReducer from "./AuthReducer";
import { createContext, Dispatch, useEffect, useReducer } from "react";
import { UserLogin } from "models/user.model";

interface StateI {
  user: UserLogin[];
  isFetching: boolean;
  error: boolean;
}

interface InitialStateI {
  state: StateI;
  dispatch: Dispatch<any>;
}

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<InitialStateI>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
