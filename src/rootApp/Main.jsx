import React from 'react'
import logo from "./img/rymEnter.png"
import { Link } from 'react-router-dom'
import "./css/Main.css"
import { Navbar } from "./Navbar"

export const Main = () => {
  return (
    <div>
        <div className='container1'>
            <Link to={"/rym"} className='link1'><img src={logo} className='img1' alt='img1'/></Link>
        </div>
    </div>
  )
}
