import React from 'react'

function Navbar() {
  return (
    <div className='nav flexbox'>
        <div className="logo">
            <h3>logo</h3>
            </div>

        <ul className="menu flexbox">
            <li>Home</li>
            <li>Courses</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Us</li>
            
            
        </ul>

        <div className="login flexbox">
            
            <button className='button1'>Login</button>
            <button className='button2'>Sign Up</button>

        </div>
    </div>
  )
}

export default Navbar