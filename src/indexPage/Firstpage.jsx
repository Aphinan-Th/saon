import React from 'react'
import "./firstPage.css";

function Firstpage({ title }) {
  const onClick = () => {
    console.log("Clicked")
  }

  return (
    <div onClick={onClick} className="container">{title}
      <form className='form'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </form>
    </div>
  )
}

export default Firstpage