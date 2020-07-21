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
      <div className="header">
        <div className="navarea">
          <div className="navicon">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="navtitle"> Expense Keeper</p>
          <ul>
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
        </div>
        <hr />
        <Switch>
          <Route path="/">
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
        <div className="footer">
          <p className="text-center">with Love From Psalm Sam</p>
        </div>
      </div>
    </Router>
  );
}
