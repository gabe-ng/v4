import React from 'react';
import PropTypes from "prop-types";
import { Icon } from 'react-icons-kit';
import data from "../data";

const Sidebar = props => {
    let styles;

    if (props.nightMode) {
      styles = {
        primary: { "color": "rgb(81, 214, 179)"},
        altColor: { "color": "rgb(168, 178, 209)"},
        contactColor: { "color": "rgb(81, 214, 179)" },
        border: { "borderColor": "rgb(81, 214, 179)" },
        linkBorder: { "borderColor": "rgb(81, 214, 179)" },
      }
  } else {
      styles = {
        primary: { "color": "black" },
        contactColor: { "color": "grey" },
        border: { "borderColor": "rgb(201, 201, 201)"},
        linkBorder: { "borderColor": "grey" },
      }
  }

    
    return <div className="sidebar">
        <section className="header" style={styles.border}>
          <h1 style={styles.primary}>Gabriel Ng</h1>
        <p><a href="mailto:hello@gabrielng.tech" className="linked-text" style={{...styles.linkBorder, ...styles.altColor}}>hello@gabrielng.tech</a></p>
        </section>
        <section className="sidebar-intro" style={styles.border}>
          <p style={styles.altColor}>
            Hi, I'm Gabriel. I am a <a href="https://www.econ.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="linked-text" style={styles.linkBorder}>UC Berkeley Economics</a> gradute and 
            <a href="https://generalassemb.ly/education/web-development-immersive" target="_blank" rel="noopener noreferrer" className="linked-text" style={styles.linkBorder}> General Assembly WDI</a> alum. I love all things JavaScript,and my
            area of focus is full stack web development.{" "}
          </p>
        </section>
        <section className="sidebar-contact">
          <ul>
          {data.contact.map(icon => <li key={icon.label} className="link" style={styles.contactColor}>
                    <a href={`${icon.link}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={icon.icon} size={18}/>
                </a>
              </li>)}
          </ul>
          <p className="copyright" style={styles.contactColor}>&copy;Gabriel Ng 2018</p>
        </section>
      </div>;
}

Sidebar.propTypes = {
  nightMode: PropTypes.bool.isRequired
};

Sidebar.defaultProps = {
  nightMode: false
};

export default Sidebar;