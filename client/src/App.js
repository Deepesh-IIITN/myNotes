import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notes from "./components/Notes";
import ErrorPage from "./components/ErrorPage";

import "./App.css";
const App = () => {
  const [userid, setuserID] = useState("");
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  const callForUserData = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });
      const userData = await res.json();
      setuserID(userData._id);
      console.log(userData);
      if (res.status === 200) {
        setisUserLoggedIn(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callForUserData();
  }, []);
  return (
    <>
      <Navbar isLoggedIn={isUserLoggedIn} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/notes">
          <Notes userID={userid} />
        </Route>
        <Route path="/login">
          <Login isLoggedIn={isUserLoggedIn} />
        </Route>
        <Route path="/signup">
          <Signup isLoggedIn={isUserLoggedIn} />
        </Route>
        <Route path="/logout"></Route>
        <Route components>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
