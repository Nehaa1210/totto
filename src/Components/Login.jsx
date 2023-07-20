import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <form className="login-form" role="search">
        <h2>Login Now!</h2>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Email"
          aria-label="Search"
        />
        <input
          className="form-control me-2"
          type="search"
          placeholder="Password"
          aria-label="Search"
        />
        <button className="btn btn-success" type="submit">
          Login
        </button>
        <p>Does not have an account <Link to="/signup">Sign up</Link></p>
        
      </form>
    </div>
  );
}

export default Login;
