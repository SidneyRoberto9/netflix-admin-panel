import { MovieProvider } from "context/movieContext";
import { AuthProvider } from "context/authContext";
import { ListProvider } from "context/listContext";
import { UserProvider } from "context/userContext";
import ReactDOM from "react-dom";
import * as React from "react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MovieProvider>
        <ListProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ListProvider>
      </MovieProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
