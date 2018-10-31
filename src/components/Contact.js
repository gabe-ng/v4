import React from "react";
import { Icon } from "react-icons-kit";

const Contact = (props) => (
    <div className="contact">
      <header>
        <h1 className="title">Contact</h1>
        <p className="subtitle">Let's get in touch</p>
      </header>
      <section>
      <ul>
        {props.data.map(icon => <li key={icon.label} className="link">
          <a href={`${icon.link}`} target="_blank" rel="noopener noreferrer">
            <Icon icon={icon.icon} size={18} />
          </a>
        </li>)}
      </ul>
      </section>
    </div>
);

export default Contact;
