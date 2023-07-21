import React from "react";
import girl from "../assets/girl.png"

const Home = () => {
  return (
    <>
    <div  className="section1">
     
        <div className="left column">
          <h1><span style={{color:"#F48C06"}}>Studying</span><span style={{color:"white"}}> Online is now much easier</span></h1>
          <p>
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>
            <button>Join for free</button>
        </div>
        <div className="imgggg">
            <img src={girl} alt="" />
        </div>
    </div>

    {/* Success */}
    <div className="section2">
    <h2>Our Success</h2>
       <p>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec<br/> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
    <div className="success">
       <div>
        <h1>15K+</h1>
        <p>Students</p>
       </div>
       <div>
        <h1>75%</h1>
        <p>Total Success</p>
       </div>
       <div>
        <h1>35</h1>
        <p>Main Questions</p>
       </div>
       <div>
        <h1>26</h1>
        <p>Chief Experts</p>
       </div>
       <div>
        <h1>16</h1>
        <p>Years of Experience</p>
       </div>
    </div>
    </div>
    </>
  );
};

export default Home;
