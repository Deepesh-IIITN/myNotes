import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-centece r">
            <div className="col-lg-9 col-md-10 col-11 signup-box">
              <div className="row">
                <div className="col-md-6 p-md-5  m-md-auto">
                  <img
                    className="img-fluid"
                    src="/images/login_img2.png"
                    alt="login"
                  />
                </div>
                <div className="col-md-6 p-4">
                  <h1 className="text-md-left text-center">Login</h1>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label for="login_email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="login_email"
                        name="login_email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label for="login_password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="login_password"
                        id="login_password"
                        placeholder="Password"
                      />
                    </div>

                    <div className="">
                      <button type="submit" className="btn btn-success">
                        Sign in
                      </button>
                    </div>
                  </form>
                  <div className="text-center">
                    <hr />
                    <p>
                      New User? <NavLink to="/signup">Create</NavLink> Account
                    </p>
                    <p>
                      <NavLink to="/login">Forgot Password</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
