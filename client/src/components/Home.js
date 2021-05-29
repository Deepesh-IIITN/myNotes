import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-5">
                <h1 className="pt-5">Welcome to myNotes.com</h1>
                <h3>Here you can create you Notes</h3>
                <NavLink className="btn btn-success" to="/login">
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
