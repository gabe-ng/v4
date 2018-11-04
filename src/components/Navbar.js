import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    let primaryStyles;
    let altText;

    if (props.nightMode) {

    } else {
        primaryStyles = {
            "backgroundColor": "white",
            "borderColor": "lightgrey"
        }
        altText = { 
            "color": "rgb(165, 165, 165)"
        }
    }
    return (
        <nav className="main-nav" style={primaryStyles}>
            <h1 style={primaryStyles}>
                <NavLink to="/" exact>Gabriel Ng</NavLink>
            </h1>
            <ul className="links" style={altText}>
                <li><NavLink className="link" to="/about" style={primaryStyles}>About</NavLink></li>
                <li><NavLink className="link" to="/projects" style={primaryStyles}>Projects</NavLink></li>
                <li><NavLink className="link" to="/experience" style={primaryStyles}>Experience</NavLink></li>
                <li><NavLink className="link last" to="/contact" style={primaryStyles}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;