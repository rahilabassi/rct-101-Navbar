
import React from 'react'
import "./Navbar.css"

function Navbar() {
    const links = ["Services", "Projects", "About"];
  return (
    <div className='nav'>
        <div className='logo'>
        <h1>LOGOBEKARY</h1>
        </div>
        <div className='links'>{links.map((e) => (<a>{e}</a>))}</div>
        <button className='btn'>Contact</button>

        
    </div>
  )
}

export default Navbar