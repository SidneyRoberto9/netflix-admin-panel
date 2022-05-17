import { UserLogin } from "models/user.model";

export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user: UserLogin) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const logout = () => ({
  type: "LOGOUT",
});
