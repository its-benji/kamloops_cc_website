import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import BasicText from "./BasicText";

function LatestSermon() {

  return (
    <div className='segment-band' style={{ backgroundColor: "#6B5F50"}}>  
      <BasicText 
        colour={"#F4E9CD"}
        heading={"Last Week's Teaching"}
        text1={"Every Sunday we study the Bible verse by verse, chapter by chapter."}
        text2={"Join us each Sunday at 10:30 am"}
      />
      <YouTubeVideo link={"https://www.youtube.com/embed/sZcGUEjH2P8?si=emZvbKBWV75qfoCw"}/>
    </div>
  )
}

export default LatestSermon
