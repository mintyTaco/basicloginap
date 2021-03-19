import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/login"
import Register from "./components/register"
import Home from "./components/home"

function App() {
    return (
        <div className="App">
            {'Hello world'}
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>

                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        
                        <Route path="/register">
                            <Register />
                        </Route>
                        
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
