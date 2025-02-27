import React from "react";
import '../components.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function YouTubeVideo({link}) {

  return (
    <div>
      <iframe 
        class="video-size"
        src={link} 
        title="YouTube video" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default YouTubeVideo