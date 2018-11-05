import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";

const Contact = props => {
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
      altColor: { "color": "black" },
      border: { "borderColor": "lightgrey" },
      linkBorder: { "borderColor": "grey" }
    }
  }

  return (
    <div className="contact">
      <header style={styles.border}>
        <h1 className="title" style={styles.primary}>Contact</h1>
        <p className="subtitle" style={styles.primary}>Let's get in touch</p>
      </header>
      <section>
      <p className="contact-message" style={styles.altColor}>My inbox is always open. Whether you have a project in mind or would just like to chat, please feel free to <a href="mailto:gabe.v.ng@gmail.com" style={styles.linkBorder}>reach out</a> and I'll get back to you!</p>
      <ul>
        {props.data.map(icon => <li key={icon.label} className="link" style={styles.primary}>
          <a href={`${icon.link}`} target="_blank" rel="noopener noreferrer">
            <Icon icon={icon.icon} size={18} />
          </a>
        </li>)}
      </ul>
      </section>
    </div>
  )
};

Contact.propTypes = {
  nightMode: PropTypes.bool.isRequired
};

Contact.defaultProps = {
  nightMode: false
};

export default Contact;
