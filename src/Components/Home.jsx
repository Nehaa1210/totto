import React from "react";
import girl from "../assets/girl.png"
import rectangle from "../assets/rectangle.png"
import rect from "../assets/rect.png"
import phyclass from "../assets/phyclass.png"




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


    {/* ALL in one Cloud software */}
    <div className="section3">
    <h2><span style={{color:"#2F327D"}}>All-In-One</span><span style={{color:"#00CBB8"}}>Cloud Software.</span></h2>
       <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </p>
    <div className="clouds">
       <div>
        <h3>Online Billing, Invoicing, & Contracts
       </h3>
        <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
       </div>
       <div>
        <h3>Online Billing, Invoicing, & Contracts
       </h3>
        <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
       </div>
       <div>
        <h3>Online Billing, Invoicing, & Contracts
       </h3>
        <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
       </div>
    </div>
    </div>

    {/* What is TutoTution */}
    <div className="section4">
      <h2>What is <span style={{color:"#00CBB8"}}>TutoTution?</span></h2>
      <p>TOTC is a platform that allows educators to create online classes whereby they can<br/> store the course materials online; manage assignments, quizzes and exams; monitor<br/> due dates; grade results and provide students with feedback all in one place.</p>
      <div className="tuto">
      <div className="tutoImg">
      <img src={rectangle} alt="" /> 
      <div>
        <button>abcd filhaal</button>
        </div>
      </div>
      <div className="tutoImg">
        <img src={rect} alt="" />
        <div>
        <button>abcd filhaal</button>
        </div> 
      </div>
      </div>
    </div>

    {/*Physical classroom*/}
    <div className="phyClass">
      <div>
       <h4>
       Everything you can do in a physical classroom, <span style={{color:"#00CBB8"}}>you can do with TutoTution.</span>
       </h4>
       <p>TOTC’s school management software helps traditional and online schools manage
         scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
      </div>
      <div>
        <img src={phyclass} alt="" />
      </div>
    </div>




    {/* Footer */}

    <footer className="bg-dark text-center text-white">
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      {/* <!-- Github --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">tutotution.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>

    </>
  );
};

export default Home;
