import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { code } from 'react-icons-kit/fa/code';

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
          <article key={project.title} className="featured project">
            <img src={project.image} alt="" className="project-image"/>
            <div>
              <h2>{project.title}</h2>
              <a href={`${project.repoLink}`} target="_blank" rel="noopener noreferrer" className="gh"><Icon icon={githubSquare} size={30}/></a>
              <span className="date">{project.date}</span>
              <p>{project.desc}</p>
              <ul className="tech-list">
                {project.tech.map(tech => <li className="tech">{tech}</li>)}
              </ul>
            </div>
          </article>
        ))}

        <h1 className="other-title">Other Projects</h1>

        <div className="other">
        {nonfeatured.map(project => (
          <article key={project.title} className="project">
            <Icon icon={code} size={30} className="code"/>
            <a href={`${project.repoLink}`} target="_blank" rel="noopener noreferrer"><Icon icon={githubSquare} size={30} className="gh"/></a>
            <div>
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
}

Projects.defaultProps = {
  data: [],
}

export default Projects;
