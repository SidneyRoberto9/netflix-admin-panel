import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "context/authContext/AuthContext";
import MovieList from "pages/movies/movieList/MovieList";
import NewMovie from "pages/movies/newMovie/NewMovie";
import UserList from "pages/users/userList/UserList";
import ListList from "pages/lists/listList/listList";
import NewList from "pages/lists/newList/newList";
import Sidebar from "components/sidebar/Sidebar";
import Topbar from "components/topbar/Topbar";
import Login from "pages/login/Login";
import Home from "pages/home/Home";
import { useContext } from "react";
import "App.css";

export default function App() {
  const { state } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        {!state.user && (
          <Route path="*">
            <Redirect to="/login" />
            <Login />
          </Route>
        )}
        <Route path="/login">
          <Redirect to="/" />
        </Route>
        {state.user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/users">
                <UserList />
              </Route>

              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>

              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/newList">
                <NewList />
              </Route>
            </div>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
