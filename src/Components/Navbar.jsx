import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Toto from "../assets/Toto.png";
import { Booksvalue } from "../context/Bookval";

function Navbar() {
  const { userlogin, setuserlogin } = useContext(Booksvalue);
  const logout = ()=>{
    setuserlogin({
      user: null,
      mail: null,
      pass: null
  })
  }
  return (
    <div className="nav flexbox">
      <div className="logo">
        {/* <h3>logo</h3> */}
        <img src={Toto} alt="" />
      </div>

      <ul className="menu flexbox">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">My Courses</Link>
        </li>
        <li>Careers</li>
        <li>
          <Link to="/books">Buy Courses</Link>
        </li>
        <li>About Us</li>
      </ul>
      {userlogin.mail ? (
        <div className="flexbox">
          <button className="btn">{userlogin.user}</button>
          <button onClick={logout} className="btn btn-dark">logout</button>
        </div>
      ) : (
        <div className="login flexbox">
          <button className="button1">
            <Link className="log" to="/login">
              Login
            </Link>
          </button>
          <button className="button2">
            <Link className="log" to="/signup">
              Sign up
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
