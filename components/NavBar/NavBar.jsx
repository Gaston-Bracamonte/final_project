import React from "react";
import "./NavBar.css"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary black">
        <div className="container-fluid">
          <a className="navbar-brand titleColor">TurismoCba</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active color" aria-current="page" href="#section1">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color" href="#section2">Que ofrecemos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color" href="#section3">Recomendaciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color" href="#section4">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
    )
}
export default Navbar