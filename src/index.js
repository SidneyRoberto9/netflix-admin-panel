import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
