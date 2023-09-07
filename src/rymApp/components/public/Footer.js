import React, { useState } from 'react'
import logo from "../../img/logo192.png"

export const Footer = () => {

    const [clicks, setClicks] = useState(0);

    const year = new Date().getFullYear();
    const companyName = "Leandro Siñeriz";

    const handleClick = () => {
        console.log("Holis");
        setClicks(clicks+1);
    }
    
    return (
        <div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">© { year } {companyName} Clicks={clicks}</p>
                <span
                    to={"/"}
                    onClick={handleClick}
                >
                    <img
                    className='App-logo'
                    src={logo}
                    alt='logo'
                    >
                    </img>
                </span>
                <ul className="nav col-md-4 justify-content-end">
                 {/*
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                    */}
                </ul>
                </footer>
            </div>
        </div>
    )
 
}
