import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Signup />
    </>
  );
};

export default App;
