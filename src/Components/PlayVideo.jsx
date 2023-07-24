import React, { useContext } from "react";
import { Booksvalue } from "../context/Bookval";

function PlayVideo() {
  const { watch } = useContext(Booksvalue);

  return (
    <div className="playvideo">
        
      <div className="data-item">
        
        <div className="frame">
                    <iframe
          src={`https://www.youtube.com/embed/${watch.video_id}`}
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="500px"
        ></iframe>
        </div>

        <h3>{watch.name}</h3>
        <h4>Instructor: {watch.instructor}</h4>
        <h3>&#8377; {watch.price}</h3>
      
      </div>
    </div>
  );
}

export default PlayVideo;
