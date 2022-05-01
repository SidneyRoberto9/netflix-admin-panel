import { api } from "../../services/api";
import { loginFailure, loginSuccess, loginStart } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await api.post("auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
