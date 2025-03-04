import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import BasicText from "./BasicText";

function WeeklyTeaching() {

  return (
    <div className='segment-band' style={{ backgroundColor: "#C2A580"}}>  
        <YouTubeVideo link={"https://www.youtube.com/embed/HwB4pKnCDEY?si=HnZa7m8yxxgHlrsz"}/>
        <BasicText 
            colour={"#F4E9CD"}
            heading={"Last Week's Teaching"}
            text1={"Every Sunday we study the Bible verse by verse, chapter by chapter."}
            text2={"Join us each Sunday at 10:30 am"}
        />
    </div>
  )
}

export default WeeklyTeaching
