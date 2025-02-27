import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import BasicText from "./BasicText";

function LatestSermon() {

  return (
    <div className='latestsermon'>  
      <BasicText colour={"#F4E9CD"}/>
      <YouTubeVideo link={"https://www.youtube.com/embed/sZcGUEjH2P8?si=emZvbKBWV75qfoCw"}/>
    </div>
  )
}

export default LatestSermon
