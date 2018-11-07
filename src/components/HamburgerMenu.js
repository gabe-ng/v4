import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";

class SideMenu extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        let menuStyles;
        let styles;

        if (this.props.nightMode) {
            menuStyles = {
                bmBurgerBars: {
                    background: "rgb(81, 214, 179)",
                },
                bmMenu: {
                    background: "rgb(19, 35, 61)",
                    borderColor: "rgb(81, 214, 179)",
                },
                bmCross: {
                    background: "rgb(168, 178, 209)",
                }
            }

            styles = {
                primary: { "color": "rgb(168, 178, 209)" },
            }
        } else {
            menuStyles ={
                bmBurgerBars: {
                    background: "black",
                },
                bmMenu: {
                    background: "whitesmoke",
                    borderColor: "lightgrey",
                },
                bmCross: {
                    background: "black",
                }
            }
            styles = {
                primary: { "color": "black" },
            }
        }
        
        return (
            <Menu styles={menuStyles} right width={300} noOverlay >
                <NavLink className="link ham-link" to="/about" style={{ ...styles.primary, ...styles.border }}>About</NavLink>
                <NavLink className="link ham-link" to="/projects" style={{ ...styles.primary, ...styles.border }}>Projects</NavLink>
                <NavLink className="link ham-link" to="/experience" style={{ ...styles.primary, ...styles.border }}>Experience</NavLink>
                <NavLink className="link ham-link last" to="/contact" style={{ ...styles.primary, ...styles.border }}>Contact</NavLink>
            </Menu>
        );
    }
}

export default  SideMenu;