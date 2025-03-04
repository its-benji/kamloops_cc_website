import React from "react";
import '../components.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function YouTubeVideo({link}) {

  return (
    <div className="video-container">
      <iframe 
        className="video-size"
        src={link} 
        title="YouTube video" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default YouTubeVideo