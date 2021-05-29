import { React, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [formData, getData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handlInputs = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    getData({ ...formData, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();
    // const { name, email, password, cpassword } = formData;

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
    } else {
      window.alert("registration success");
      console.log("registration success");
      history.push("/login");
    }
  };
  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-9 col-md-10 col-11 signup-box">
              <div className="row">
                <div className="col-md-6 p-md-5 mt-lg-5 m-md-auto">
                  <img
                    className="img-fluid"
                    src="/images/signup_img1.png"
                    alt="signup"
                  />
                </div>
                <div className="col-md-6 p-4">
                  <h1 className="text-md-left text-center">Signup</h1>
                  <hr />
                  <form method="POST">
                    <div className="form-group">
                      {/* <label for="name">Full Name</label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter name"
                        onChange={handlInputs}
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="email">Email address</label> */}
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handlInputs}
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="password">Password</label> */}
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handlInputs}
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="cpassword">Confirm Password</label> */}
                      <input
                        type="password"
                        className="form-control"
                        name="cpassword"
                        id="cpassword"
                        placeholder="Confirm Password"
                        onChange={handlInputs}
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        onClick={postData}
                        className="btn btn-success"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <hr />
                  <p>
                    Already Have an Account?{" "}
                    <NavLink to="/login">Login</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
