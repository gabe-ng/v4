import React from "react";
import PropTypes from "prop-types";

const Experience = props => {
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
    <div className="experience">
      <header style={styles.border}>
        <h1 className="title" style={styles.primary}>Experience</h1>
        <p className="subtitle" style={styles.primary}>Some positions I've worked</p>
      </header>
      <section>
        {props.data.map(job => (
          <article className="job" style={{...styles.altColor, ...styles.border}} key={job.company}>
          <h2>{job.position}</h2>
          <a href={`${job.link}`} target="_blank" rel="noopener noreferrer" className="linked-text" style={styles.linkBorder}>{job.company}</a><span className="duration">{job.duration}</span>
          </article>
        ))}
      </section>
    </div>
  )
};

Experience.propTypes = {
  data: PropTypes.array.isRequired,
  nightMode: PropTypes.bool.isRequired,
}

Experience.defaultProps = {
  data: [],
  nightMode: false
};

export default Experience;
