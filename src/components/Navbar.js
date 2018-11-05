import React from 'react';
import { NavLink } from 'react-router-dom';
import Toggle from "./ToggleButton";

const Navbar = props => {
    let styles;

    if (props.nightMode) {
        styles = {
            primary: { "color": "white" },
            alt: { "color": "red" },
            background: { "backgroundColor": "black" },
            border: { "borderColor": "red" },
        }
    } else {
        styles = {
            primary: { "color": "black" },
            alt: { "color": "rgb(165, 165, 165)" },
            background: { "backgroundColor": "white" },
            border: { "borderColor": "lightgrey" },
        }
    }
    console.log("rendered", "night is", props.nightMode)
    return (
        <nav className="main-nav" style={{ ...styles.background, ...styles.border}}>
            <h1 style={{...styles.primary, ...styles.border}}>
                <NavLink to="/" exact>Gabriel Ng</NavLink>
            </h1>
            <ul className="links">
                <li><NavLink className="link" to="/about" style={{...styles.alt, ...styles.border}}>About</NavLink></li>
                <li><NavLink className="link" to="/projects" style={{...styles.alt, ...styles.border}}>Projects</NavLink></li>
                <li><NavLink className="link" to="/experience" style={{...styles.alt, ...styles.border}}>Experience</NavLink></li>
                <li><NavLink className="link last" to="/contact" style={{...styles.alt, ...styles.border}}>Contact</NavLink></li>
            </ul>
            <Toggle toggle={props.toggleNight} className="toggle"/>
        </nav>
    )
}

export default Navbar;