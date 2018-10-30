import React from "react";
import PropTypes from "prop-types";


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
            <h2>{project.title}</h2><span>{project.date}</span>
            <img src={`${project.image}`} alt=""/>
            <p>{project.desc}</p>
            <ul>
              {project.tech.map(tech => <li className="tech">{tech}</li>)}
            </ul>
            <p>{project.repo}</p>
          </article>
        ))}
        {nonfeatured.map(project => (
          <article key={project.title} className="project">nonfeatured</article>
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
