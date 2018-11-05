import React from "react";
import PropTypes from "prop-types";

import { Icon } from "react-icons-kit";
import { caretRight } from 'react-icons-kit/fa/caretRight';

const About = props => {
  let styles;

  if (props.nightMode) {
    styles = {
      primary: { "color": "rgb(81, 214, 179)" },
      altColor: { "color": "rgb(168, 178, 209)" },
      border: { "borderColor": "rgb(81, 214, 179)" },
    }
  } else {
    styles = {
      primary: { "color": "black" },
      altColor: { "color": "black" },
      border: { "borderColor": "lightgrey" },
    }
  }

  return (<div className="about">
      <header style={styles.border}>
        <h1 className="title" style={styles.primary}>About</h1>
        <p className="subtitle" style={styles.primary}>Behind the code</p>
      </header>
      <section style={styles.altColor}>
        <article className="introduction">
          <h3>Introduction</h3>
          <p>{props.data.intro}</p>
        </article>
        <article className="skills">
          <h3>Some skills I know</h3>
          <div className="skills-wrap">
            <ul>
              <h4>Front End</h4>
              {props.data.skills.frontend.map(skill => (
                <li key={skill} className="skill">
                  <Icon icon={caretRight} size={12} className="icon" /> {skill}
                </li>
              ))}
            </ul>
            <ul>
              <h4>Back End</h4>
              {props.data.skills.backend.map(skill => (
                <li key={skill} className="skill">
                  <Icon icon={caretRight} size={12} className="icon" /> {skill}
                </li>
              ))}
            </ul>
            <ul>
              <h4>Development</h4>
              {props.data.skills.development.map(skill => (
                <li key={skill} className="skill">
                  <Icon icon={caretRight} size={12} className="icon" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article className="hobbies">
          <h3>When I'm not coding, I'm probably</h3>
          <ul>
            {props.data.hobbies.map(hobby => (
              <li key={hobby} className="hobby">
                <Icon icon={caretRight} size={12} className="icon" /> {hobby}
              </li>
            ))}
          </ul>
        </article>
        <article className="facts">
          <h3>Some facts about me</h3>
          <ul>
            {props.data.facts.map(fact => (
              <li key={fact} className="fact">
                <Icon icon={caretRight} size={12} className="icon" /> {fact}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
};

About.propTypes = {
  data: PropTypes.object.isRequired,
  nightMode: PropTypes.bool.isRequired,
};

About.defaultProps = {
  data: {},
  nightMode: false,
};

export default About;
