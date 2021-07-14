import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./Pages/Userpage/UserList";
function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="app__container">
          <SideBar />
          <Switch>
            <Route path="/Users">
              <UserList />
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
