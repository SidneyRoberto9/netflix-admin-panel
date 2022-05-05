import { MovieContextProvider } from "context/movieContext";
import { AuthContextProvider } from "context/authContext";
import { ListContextProvider } from "context/listContext";
import { UserContextProvider } from "context/userContext";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
