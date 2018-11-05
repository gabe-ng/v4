import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { code } from 'react-icons-kit/fa/code';

const Projects = props => {
  const featured = props.data.filter(project => project.featured === true);
  const nonfeatured = props.data.filter(project => project.featured !== true);

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

  return (
    <div className="projects">
      <header style={styles.border}>
        <h1 className="title" style={styles.primary}>Projects</h1>
        <p className="subtitle" style={styles.primary}>Some things I've built</p>
      </header>
      <section>
        {featured.map(project => (
          <article key={project.title} className="featured project" style={styles.border}>
            <img src={project.image} alt="" className="project-image"/>
            <div style={styles.altColor}>
              <h2>{project.title}</h2>
              <a href={`${project.repoLink}`} target="_blank" rel="noopener noreferrer" className="gh"><Icon icon={githubSquare} size={30} style={styles.primary}/></a>
              <span className="date">{project.date}</span>
              <p>{project.desc}</p>
              <ul className="tech-list">
                {project.tech.map(tech => <li className="tech">{tech}</li>)}
              </ul>
            </div>
          </article>
        ))}

        <h1 className="other-title" style={styles.primary}>Other Projects</h1>

        <div className="other">
        {nonfeatured.map(project => (
          <article key={project.title} className="project" style={styles.border}>
            <Icon icon={code} size={30} className="code" style={styles.altColor}/>
            <a href={`${project.repoLink}`} target="_blank" rel="noopener noreferrer"><Icon icon={githubSquare} size={30} className="gh" style={styles.primary}/></a>
            <div style={styles.altColor}>
              <h2>{project.title}</h2><span className="date">{project.date}</span>
              <p>{project.desc}</p>
              <ul className="tech-list">
                {project.tech.map(tech => <li className="tech">{tech}</li>)}
              </ul>
            </div>
          </article>
        ))}
        </div>
      </section>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
  nightMode: PropTypes.bool.isRequired,
}

Projects.defaultProps = {
  data: [],
  nightMode: false
};

export default Projects;
