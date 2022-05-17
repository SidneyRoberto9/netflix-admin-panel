import { UserLogin } from "models/user.model";
import { api } from "../../services/api";
import { loginFailure, loginSuccess, loginStart } from "./AuthActions";

export const login = async (
  user: UserLogin,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload?: UserLogin }): void;
  }
) => {
  dispatch(loginStart());
  try {
    const res = await api.post("auth/login", user);
    res.data.isAdmin
      ? dispatch(loginSuccess(res.data))
      : dispatch(loginFailure());
  } catch (error) {
    dispatch(loginFailure());
  }
};
