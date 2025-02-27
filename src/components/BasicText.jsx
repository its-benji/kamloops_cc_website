import React from "react";

function BasicText({colour}) {

  return (
    <div className='text-format'>  
      <h1 style={{ color: colour }}>Last Week's Teaching</h1>
      <p style={{ color: colour }}>Every Sunday we study the Bible verse by verse, chapter by chapter.</p>
      <p style={{ color: colour }}>Join us each Sunday at 10:30 am</p>
    </div>
  )
}

export default BasicText