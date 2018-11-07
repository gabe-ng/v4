import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import Toggle from "./ToggleButton";
import SideMenu from "./HamburgerMenu";

const Navbar = props => {
    let styles;

    if (props.nightMode) {
        styles = {
            primary: { "color": "rgb(81, 214, 179)" },
            alt: { "color": "rgb(168, 178, 209)" },
            background: { "backgroundColor": "rgb(30, 54, 95)" },
            border: { "borderColor": "rgb(81, 214, 179)" },
        }
    } else {
        styles = {
            primary: { "color": "black" },
            alt: { "color": "rgb(165, 165, 165)" },
            background: { "backgroundColor": "white" },
            border: { "borderColor": "lightgrey" },
        }
    }

    return (
        <nav className="main-nav" style={{ ...styles.background, ...styles.border}}>
            <div className="nav-wrap">
                <h1 style={{...styles.primary, ...styles.border}}>
                    <NavLink to="/" exact>Gabriel Ng</NavLink>
                </h1>
                <ul className="links">
                    <li><NavLink className="link" to="/about" style={{...styles.alt, ...styles.border}}>About</NavLink></li>
                    <li><NavLink className="link" to="/projects" style={{...styles.alt, ...styles.border}}>Projects</NavLink></li>
                    <li><NavLink className="link" to="/experience" style={{...styles.alt, ...styles.border}}>Experience</NavLink></li>
                    <li><NavLink className="link last" to="/contact" style={{...styles.alt, ...styles.border}}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="toggle-wrap">
            <div className="toggle">
                <Toggle toggle={props.toggleNight} />
            </div>
                <div className="hamburger">
                    <SideMenu nightMode={props.nightMode}/>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    nightMode: PropTypes.bool.isRequired,
}

Navbar.defaultProps = {
    nightMode: false,
}

export default Navbar;