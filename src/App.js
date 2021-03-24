import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register";
import Home from "./components/home";
import PrivateRoute from "./components/routes/private_route";
import PublicRoute from "./components/routes/public_route";
import "./App.css";

export const isLogin = () => {
  const isUserLoggedIn = localStorage.getItem("user") !== null;
  console.log(`loggedInStatus : ${isUserLoggedIn}`);
  return isUserLoggedIn;
};

function App() {
  return (
    <div className="App">
      {"Hello world"}

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Switch>
            <PublicRoute component={Login} path="/login" exact />
            <PublicRoute component={Register} path="/register" exact />
            <PrivateRoute component={Home} path="/" exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
