import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

const Intro = props => {
    let styles;

    if (props.nightMode) {
        styles = {
            primary: { "color": "rgb(81, 214, 179)" },
            altColor: { "color": "rgb(168, 178, 209)" },
            border: { "borderColor": "rgb(81, 214, 179)" },
            linkBorder: { "borderColor": "rgb(81, 214, 179)" }
        }
    } else {
        styles = {
            primary: { "color": "black" },
            altColor: { "color": "black"},
            border: { "borderColor": "lightgrey" },
            linkBorder: { "borderColor": "grey" }
        }
    }

    return <div className="intro">
        <header style={styles.border}>
          <h1 className="title sliding-vertical fadeinUp">
            <span style={styles.primary}>Hello</span>
            <span style={styles.primary}>Bonjour</span>
            <span style={styles.primary}>Hola</span>
            <span style={styles.primary}>Ni Hao</span>
            <span style={styles.primary}>Shalom</span>
          </h1>
        </header>
        <section>
          <p style={styles.altColor}>
            Welcome and thanks for checking out my site. Please feel free to explore, send me a <NavLink to="/contact" className="link" style={styles.linkBorder}>
              message
            </NavLink>, or view the site's <a href="https://github.com/gabe-ng/v4" target="_blank" rel="noopener noreferrer" className="link" style={styles.linkBorder}>
              code
            </a>.
          </p>
        </section>
      </div>;
}

Intro.propTypes = {
    nightMode: PropTypes.bool.isRequired
};

Intro.defaultProps = {
    nightMode: false
};

export default Intro;