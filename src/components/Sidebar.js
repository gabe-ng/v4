import React from 'react';
import { Icon } from 'react-icons-kit';
import data from "../data/contact";

const Sidebar = () => {
    
    return <div className="sidebar">
        <section className="header">
          <h1>Gabriel Ng</h1>
          <p>gabe.v.ng@gmail.com</p>
        </section>
        <section className="intro">
          <p>
            Hi, I'm Gabriel. I am a UC Berkeley Econimics gradute and
            General Assembly WDI alum. I love all things JavaScript,and my
            area of focus is full stack web development.{" "}
          </p>
        </section>
        <section className="contact">
          <ul>
            {data.map(icon => <li key={icon.label} className="link">
                    <a href={`${icon.link}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={icon.icon} />
                </a>
              </li>)}
          </ul>
        </section>
      </div>;
}

export default Sidebar;