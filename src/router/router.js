import React from "react";
import { Home } from "../components/pages/Home";
import { Dashboard } from "../components/pages/Dashboard";
import Create from "../components/pages/Create";
import Edit from "../components/pages/Edit";
import { Help } from "../components/pages/Help";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { NotFound } from "../components/pages/404";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />{" "}
          </Route>
          <Route path="/dashboard">
            <Dashboard />{" "}
          </Route>
          <Route path="/create">
            <Create />{" "}
          </Route>
          <Route path="/help">
            <Help />{" "}
          </Route>
          <Route path="/login">
            <Login />{" "}
          </Route>
          <Route path="/register">
            <Register />{" "}
          </Route>
          <Route path="/edit/:id" component={Edit} />

          <Route>
            <NotFound />{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
