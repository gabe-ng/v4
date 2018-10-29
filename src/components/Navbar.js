import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <h1>
                <NavLink to="/" exact>Gabriel Ng</NavLink>
            </h1>
            <ul className="links">
                <li><NavLink className="link" to="/about">About</NavLink></li>
                <li><NavLink className="link" to="/projects">Projects</NavLink></li>
                <li><NavLink className="link" to="/experience">Experience</NavLink></li>
                <li><NavLink className="link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;