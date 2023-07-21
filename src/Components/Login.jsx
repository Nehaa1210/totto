import React from "react";
import { Link } from "react-router-dom";

function Login() {

const handleform = (e) => {
  e.preventDefault()

}
const handleemail = (e) => {
  console.log(e.target.value)
}
const handlepassword = (e) => {
  console.log(e.target.value)
   
}


  return (
    <div className="container">
      <form className="login-form" role="search" onChange={(e)=>handleform(e)}>
        <h2>Login Now!</h2>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Email"
          aria-label="Search"
          onChange={(e)=>handleemail(e)}
        />
        <input
          className="form-control me-2"
          type="search"
          placeholder="Password"
          aria-label="Search"
          onChange={(e)=>handlepassword(e)}

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
