


import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <div className="container">
    <form className="login-form" role="search">
      <h2>Sign up Now!</h2>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Username"
        aria-label="Search"
      />
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
        Sign Up
      </button>
      <p>Already have an account <Link to="/login">Login</Link></p>
    </form>
  </div>
  )
}

export default Logout