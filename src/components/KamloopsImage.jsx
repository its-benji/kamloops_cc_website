import React from "react";
import Kamloops_Img from "../assets/cropped-battle-bluffs.jpg"

function KamloopsImage() {

  return (
    <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }}>  
      <img src={Kamloops_Img} alt="Kamloops Image" width={"auto"} height={"550px"} style={{objectFit: "cover"}}/>
    </div>
  )
}

export default KamloopsImage
