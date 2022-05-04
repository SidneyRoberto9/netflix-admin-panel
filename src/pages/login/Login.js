import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="main">
      <form id="login_form" class="form_class">
        <div class="form_div">
          <label>Login:</label>
          <input
            class="field_class"
            name="login_txt"
            type="text"
            placeholder="Email"
            autofocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            id="pass"
            class="field_class"
            name="password_txt"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            class="submit_class"
            type="submit"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
