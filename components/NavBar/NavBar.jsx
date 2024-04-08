import React from "react";
import "./NavBar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav_items">
                <a href="#"> Home</a>
                <a href="#"> Quienes somos</a>
                <a href="#"> Recomendaciones</a>
                <a href="#"> Contacto</a>
            </div>
            <div className="nav_toggle" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        
    )
}
export default Navbar