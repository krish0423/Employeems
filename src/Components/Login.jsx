import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation (you should replace this with your own validation logic)
    if (!values.email || !values.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Making the Axios POST request
    axios
      .post("http://localhost:6000/auth/adminlogin", values)
      .then((response) => {
        // Handle success
        console.log("Login successful. Response:", response.data);
        // Clear form fields after successful login
        setValues({ email: "", password: "" });
        setError(""); // Clear any previous errors
      })
      .catch((error) => {
        // Handle error
        console.error("Login error:", error);
        setError("Login failed. Please try again."); // Set error message for failed login
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        {error && <div className="alert alert-danger">{error}</div>}
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 mb-2">
            Log in
          </button>
          <div className="mb-1">
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label htmlFor="tick">You agree with terms & conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
