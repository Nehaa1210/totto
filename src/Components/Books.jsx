
import React from 'react'
import class6c1 from "../assets/class6c1.pdf"

function Books() {
  return (
    <div>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Class 6
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" 


// import React from 'react'
// import { Link } from 'react-router-dom'

// function Logout() {
//   return (
//     <div className="container">
//     <form className="login-form" role="search">
//       <h2>Sign up Now!</h2>
//       <input
//         className="form-control me-2"
//         type="search"
//         placeholder="Username"
//         aria-label="Search"
//       />
//       <input
//         className="form-control me-2"
//         type="search"
//         placeholder="Email"
//         aria-label="Search"
//       />
//       <input
//         className="form-control me-2"
//         type="search"
//         placeholder="Password"
//         aria-label="Search"
//       />
//       <button className="btn btn-success" type="submit">
//         Sign Up
//       </button>
//       <p>Already have an account <Link to="/login">Login</Link></p>
//     </form>
//   </div>
//   )
// }

export default Logoutdata-bs-parent="#accordionExample">
      <div class="accordion-body">
     
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Books