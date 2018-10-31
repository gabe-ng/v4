import React from 'react';
import { Icon } from 'react-icons-kit';
import data from "../data";

const Sidebar = () => {
    
    return <div className="sidebar">
        <section className="header">
          <h1>Gabriel Ng</h1>
          <p>gabe.v.ng@gmail.com</p>
        </section>
        <section className="sidebar-intro">
          <p>
            Hi, I'm Gabriel. I am a <a href="https://www.econ.berkeley.edu/" target="_blank" rel="noopener noreferrer" class="text">UC Berkeley Economics</a> gradute and 
            <a href="https://generalassemb.ly/education/web-development-immersive" target="_blank" rel="noopener noreferrer" class="text"> General Assembly WDI</a> alum. I love all things JavaScript,and my
            area of focus is full stack web development.{" "}
          </p>
        </section>
        <section className="sidebar-contact">
          <ul>
            {data.contact.map(icon => <li key={icon.label} className="link">
                    <a href={`${icon.link}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={icon.icon} size={18}/>
                </a>
              </li>)}
          </ul>
          <p>&copy;Gabriel Ng 2018</p>
        </section>
      </div>;
}

export default Sidebar;