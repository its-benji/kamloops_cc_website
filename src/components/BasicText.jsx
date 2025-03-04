import React from "react";

function BasicText({colour, heading, text1, text2}) {

  return (
    <div className='text-format'>  
      <h1 style={{ color: colour }}>{heading}</h1>
      <p style={{ color: colour, maxWidth: "50ch" }}>{text1}</p>
      <p style={{ color: colour, maxWidth: "50ch" }}>{text2}</p>
    </div>
  )
}

export default BasicText