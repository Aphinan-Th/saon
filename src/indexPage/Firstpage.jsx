import React from 'react'
import "./firstPage.css";

function Firstpage({ title }) {
  const onClick = () => {
    console.log("Clicked")
  }

  return (
    <div onClick={onClick} className="container">{title}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <chooser className='menuChooser'>
        <div className='circle'>
          <i className='fa fa-user icon' ></i>
        </div>
        <div className='circle'><i className='fa fa-long-arrow-down'></i></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='backbutton' onClick={onClick}><i className='fa fa-long-arrow-left' ></i></div>
      </chooser>
      <inf className="informationBox">
        <div className='userdatainfo'></div>
      </inf>
    </div>
  )
}

export default Firstpage