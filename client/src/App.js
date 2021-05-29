import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notes from "./components/Notes";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route components>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
