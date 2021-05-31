import { React, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
const Login = (props) => {
  const history = useHistory();

  if (props.isLoggedIn) {
    history.push("/");
  }

  const [formData, getData] = useState({ email: "", password: "" });

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    getData({ ...formData, [name]: value });
  };
  const postData = async (event) => {
    event.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid email or password");
    } else {
      window.alert(" Login successful");
      window.location.reload();
      history.push("/");
    }
  };
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
                  <form method="POST" autoComplete="off">
                    <div className="form-group">
                      <label for="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={inputHandler}
                        value={formData.password}
                      />
                    </div>

                    <div className="">
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={postData}
                      >
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
