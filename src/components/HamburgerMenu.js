import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";

class SideMenu extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu right width={300} noOverlay>
                <NavLink className="link ham-link" to="/about" >About</NavLink>
                <NavLink className="link ham-link" to="/projects">Projects</NavLink>
                <NavLink className="link ham-link" to="/experience">Experience</NavLink>
                <NavLink className="link ham-link last" to="/contact">Contact</NavLink>
            </Menu>
        );
    }
}

export default  SideMenu;
// style = {{ ...styles.alt, ...styles.border }}