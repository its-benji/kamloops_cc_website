import React from "react";
import BasicText from "./BasicText";
import Img from "../assets/mcch.png"

function OurMissions() {

  return (
    <div className='segment-band' style={{ backgroundColor: "#3F3A32"}}>  
      <BasicText 
        colour={"#F4E9CD"}
        heading={"Our Missions"}
        text1={"Our Church is a partner with the Paul Initiative, a ministry devoted to training pastors and leaders areound the world."}
        text2={"Our Church also supports Mercy and Caring Children's Homes (pictured right) - an initiative to provide housing and schooling for children in Kenya."}
      />
      <img src={Img} alt="MCCH Image" width="500px" style={{ margin: "35px 30px" }}/>
    </div>
  )
}

export default OurMissions
