import React, { useContext } from "react";
import { Booksvalue } from "../context/Bookval";
import "./Mycourse.scss";
import { Link, useNavigate } from "react-router-dom";
function Mycourse() {
  const { books, setbooks, watch, setWatch } = useContext(Booksvalue);
  const navigate = useNavigate()
  const showvideo = (item) => {
    setWatch(item);
    navigate('/watch')

  };
  return (
    <>
        {books.length == 0 && <h1 style={{width: "100%" , textAlign: "center" , marginTop: "20px"}}>please buy courses first <Link to={"/books"}>Buy Now!</Link> </h1> }
        
    <div className="mycourse">
      {books.map((item, i) => (
        <div className="data-item" key={i}>
          <img src={item.img} alt="" />
          <div className="frame"></div>

          <h3>{item.name}</h3>
          <h4>Instructor: {item.instructor}</h4>
          <h3>&#8377; {item.price}</h3>
          <button onClick={() => showvideo(item)} className="btn btn-dark">
            Watch
          </button>
        </div>
      ))}
    </div>
    </>

  );
}

export default Mycourse;
