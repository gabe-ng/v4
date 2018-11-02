import React from "react";
import { Icon } from "react-icons-kit";

const Contact = (props) => (
    <div className="contact">
      <header>
        <h1 className="title">Contact</h1>
        <p className="subtitle">Let's get in touch</p>
      </header>
      <section>
      <p className="contact-message">My inbox is always open. Whether you have a project in mind or would just like to chat, please feel free to <a href="mailto:gabe.v.ng@gmail.com">reach out</a> and I'll get back to you!</p>
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
