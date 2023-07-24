


import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Logout() {

 const [user,setUser] =useState("")
 const [mail,setMail] =useState("")
 const [pass,setPass] =useState("")



  const handleUser =(e)=>{
   //console.log(e.target.value)
   setUser(e.target.value)
  }


  const handleMail=(e)=>{
   // console.log(e.target.value)
   setMail(e.target.value)
  }

  const handlePass=(e)=>{
   // console.log(e.target.value)
   setPass(e.target.value)
  }

  const handleSignUp=(e)=>{
    e.preventDefault();
    //console.log(user,mail,pass)
    let obj={
      user:user,
      mail:mail,
      pass:pass
    }
    //console.log(obj)
    let userdata=JSON.parse(localStorage.getItem("logoutdata"));
    if(userdata){
      userdata.push(obj)
      localStorage.setItem("logoutdata",JSON.stringify(userdata));
    }
    else{
    localStorage.setItem("logoutdata",JSON.stringify([obj]));
    }
  }
  return (
    <div className="container">
    <form className="login-form" role="search" onSubmit={(e)=>handleSignUp(e)}>
      <h2>Sign up Now!</h2>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Username"
        aria-label="Search"
        onChange={(e)=>handleUser(e)}
      />
      <input
        className="form-control me-2"
        type="search"
        placeholder="Email"
        aria-label="Search"
        onChange={(e)=>handleMail(e)}
      />
      <input
        className="form-control me-2"
        type="search"
        placeholder="Password"
        aria-label="Search"
        onChange={(e)=>handlePass(e)}
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