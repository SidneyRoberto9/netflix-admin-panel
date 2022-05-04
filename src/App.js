import { AuthContext } from "./context/authContext/AuthContext";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import ListList from "./pages/listList/listList";
import Topbar from "./components/topbar/Topbar";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import NewList from "./pages/newList/newList";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import List from "./pages/list/list";
import { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>

              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
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
