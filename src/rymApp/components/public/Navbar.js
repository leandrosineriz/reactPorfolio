import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../img/logo192.png"
import { SearchRymChar } from './SearchRymChar';
import "./css/Navbar.css"

export const Navbar = () => {
  return (
    <div className="topbar">
        <header className="p-3 text-bg-dark">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <Link
                to={"/"}
                >
                    <img
                    className='App-logo'
                    src={logo}
                    alt='logo'
                    >
                    </img>
                </Link>

                <ul className="nav col-12 col-lg-auto me-lg-3 mb-2 justify-content-center mb-md-0">
                <li><Link to={"/"} className='nav-link px-2 text-secondary'>Home</Link></li>
                </ul>
                <ul className="nav col-12 col-lg-auto me-lg-3 mb-2 justify-content-center mb-md-0">
                <li><Link to={"/rym"} className='nav-link px-2 text-secondary'>Pages</Link></li>
                </ul>
                <ul className="nav col-12 col-lg-auto me-lg-3 mb-2 justify-content-center mb-md-0">
                <li><Link to={"/rym/allcharacters"} className='nav-link px-2 text-secondary'>All Characters</Link></li>
                </ul>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to={"/rym/allcharactersonscroll"} className='nav-link px-2 text-secondary'>Characters OnScroll</Link></li>
                </ul>

                <SearchRymChar />

                <div className="text-end">
                <Link to={"/rym/login"}><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                <Link to={"/rym/user-form"}><button type="button" className="btn btn-warning">Sign-up</button></Link>
                </div>
            </div>
            </div>
        </header>
    </div>
  )
}
