import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <span className="navbar-brand" >
            React Portfolio
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="http://leandrosineriz.pythonanywhere.com/">
                  Back to DjangoApp
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apps
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/rym"}>
                      Rick y Morty
                    </Link>
                  </li>
                </ul>
                
              </li>
             
            </ul>
            <div className="navbar-brand">
                Leandro Siñeriz
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
