import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "helpers/toastConfigure";
import { login } from "context/authContext/apiCalls";
import React, { useContext, useState } from "react";
import { AuthContext } from "context/authContext";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch, error } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    login({ email, password }, dispatch);
    if ((email || password) === "") {
      toast.warn("Please fill in the fields!!", toastOptions);
      return;
    }

    if (error) {
      toast.warn(
        "Invalid Email or Password, Please try again...",
        toastOptions
      );
      return;
    }
  };

  return (
    <div className="main">
      <form id="login_form" className="form_class">
        <div className="form_div">
          <label>Login:</label>
          <input
            className="field_class"
            name="login_txt"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            id="pass"
            className="field_class"
            name="password_txt"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="submit_class"
            type="submit"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
