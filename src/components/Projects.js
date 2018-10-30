import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import { githubSquare } from 'react-icons-kit/fa/githubSquare'

const Projects = (props) => {
  const featured = props.data.filter(project => project.featured === true);
  const nonfeatured = props.data.filter(project => project.featured !== true);

  return (
    <div className="projects">
      <header>
        <h1 className="title">Projects</h1>
        <p>Some things I've built</p>
      </header>
      <section>
        {featured.map(project => (
          <article key={project.title} className="project featured">
            <img src={project.image} alt="" className="project-image"/>
            <h2>{project.title}</h2><span>{project.date}</span>
            <p>{project.desc}</p>
            <ul className="tech-list">
              {project.tech.map(tech => <li className="tech">{tech}</li>)}
            </ul>
            <a href={`${project.repo}`} target="_blank" rel="noopener noreferrer"><Icon icon={githubSquare} /></a>
          </article>
        ))}
        {nonfeatured.map(project => (
          <article key={project.title} className="project">
            <h2>{project.title}</h2><span>{project.date}</span>
            <p>{project.desc}</p>
            <ul className="tech-list">
              {project.tech.map(tech => <li className="tech">{tech}</li>)}
            </ul>
            <a href={`${project.repo}`} target="_blank" rel="noopener noreferrer"><Icon icon={githubSquare} /></a>
          </article>
        ))}
      </section>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
}

Projects.defaultProps = {
  data: [],
}

export default Projects;
