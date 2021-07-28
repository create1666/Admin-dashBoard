import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./Pages/Userpage/UserList";
import User from "./Pages/SingleUserPage/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import { Product } from "./Pages/product/Product";
import { NewProduct } from "./Pages/NewProduct/NewProduct";
function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="app__container">
          <SideBar />
          <Switch>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/Products">
              <ProductList />
            </Route>
            <Route path="/Product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
