import React from "react";
import PropTypes from "prop-types";

import { Icon } from "react-icons-kit";
import { triangleRight } from 'react-icons-kit/oct/triangleRight'

const About = props => (
  <div className="about">
    <header>
      <h1 className="title">About</h1>
      <p>Behind the code</p>
    </header>
    <section>
      <article className="introduction">
          <h3>Introduction</h3>
          <p>{props.data.intro}</p>
      </article>
      <article className="skills">
        <h3>Some skills I know</h3>
        <div className="skills-wrap">
          <ul>
            <h4>Front End</h4>
            {props.data.skills.frontend.map(skill => 
              <li key={skill} className="skill" ><Icon icon={triangleRight} size={12} /> {skill}</li>)}
          </ul>
          <ul>
            <h4>Back End</h4>
            {props.data.skills.backend.map(skill =>
              <li key={skill} className="skill"><Icon icon={triangleRight} size={12}/> {skill}</li>)}
          </ul>
          <ul>
            <h4>Development</h4>
            {props.data.skills.development.map(skill =>
              <li key={skill} className="skill"><Icon icon={triangleRight} size={12}/> {skill}</li>)}
          </ul>
        </div>
      </article>
      <article className="hobbies">
          <h3>When I'm not coding, I'm probably</h3>
          <ul>
            {props.data.hobbies.map(hobby => (
            <li key={hobby} className="hobby"><Icon icon={triangleRight} size={12} />{hobby}</li>
            ))}
          </ul>
      </article>
      <artcile className="facts">
          {props.data.facts}
      </artcile>
    </section>
  </div>
  );

About.propTypes = {
  data: PropTypes.object.isRequired
};

About.defaultProps = {
  data: {},
};

export default About;
