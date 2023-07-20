import React from "react";
import girl from "../assets/girl.png"

const Home = () => {
  return (
    <div  className="section1">
     
        <div className="left column">
          <h1>Studying Online is now much easier</h1>
          <p>
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>
            <button  class="btn btn-outline-success">Join for free</button>
        </div>
        <div className="imgggg">
            <img src={girl} alt="" />
        </div>

   
    </div>
  );
};

export default Home;
