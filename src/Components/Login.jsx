import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Booksvalue } from "../context/Bookval";
// let initialData={
//   email:"",
//   password:""
// }
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {userlogin,setuserlogin} = useContext(Booksvalue)

  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };

  const handleform = (e) => {
    e.preventDefault();
    console.log(email, password);
    let userdata = JSON.parse(localStorage.getItem("logoutdata"));
    // let checkval;
    if (userdata) {
      let checkval = userdata.find((ele) => ele.mail == email && ele.pass == password);
      if (checkval) {
        console.log(checkval);
        setuserlogin(checkval)
      }
      else{
      alert('user does not exist please sign up')
      }
    }
    else{
      alert('user does not exist please sign up')
    }
  };

  return (
    <div className="container">
      <form
        className="login-form"
        role="search"
        onSubmit={(e) => handleform(e)}
      >
        <h2>Login Now!</h2>
        {/* <h1>{password}</h1> */}
        {/* {userlogin.mail} */}
        <input
          className="form-control me-2"
          type="search"
          placeholder="Email"
          aria-label="Search"
          onChange={(e) => handleemail(e)}
        />
        <input
          className="form-control me-2"
          type="search"
          placeholder="Password"
          aria-label="Search"
          onChange={(e) => handlepassword(e)}
        />
        <button className="btn btn-success" type="submit">
          Login
        </button>
        <p>
          Does not have an account <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
