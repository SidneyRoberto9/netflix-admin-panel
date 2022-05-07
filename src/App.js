import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "context/authContext/AuthContext";

import MovieList from "pages/movies/movieList/MovieList";
import NewMovie from "pages/movies/newMovie/NewMovie";
import Movie from "pages/movies/movie/Movie";

import SerieList from "pages/series/serieList/SerieList";

import Serie from "pages/series/serie/Serie";

import ListList from "pages/lists/listList/listList";
import NewList from "pages/lists/newList/newList";
import List from "pages/lists/list/list";

import UserList from "pages/users/userList/UserList";
import NewUser from "pages/users/newUser/NewUser";
import User from "pages/users/user/User";

import Sidebar from "components/sidebar/Sidebar";
import Topbar from "components/topbar/Topbar";
import Login from "pages/login/Login";
import Home from "pages/home/Home";
import { useContext } from "react";
import "App.css";
import NewSerie from "pages/series/newSerie/NewSerie";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        {!user && (
          <Route path="*">
            <Redirect to="/login" />
            <Login />
          </Route>
        )}
        <Route path="/login">
          <Redirect to="/" />
        </Route>
        {user && (
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
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>

              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movies/:productId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>

              <Route path="/series">
                <SerieList />
              </Route>
              <Route path="/series/:productId">
                <Serie />
              </Route>
              <Route path="/newSerie">
                <NewSerie />
              </Route>

              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
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
    </Router>
  );
}

export default App;
