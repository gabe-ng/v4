import React from "react";

const Experience = (props) => (
    <div class="experience">
      <header>
        <h1 className="title">Experience</h1>
        <p>Some positions I've worked</p>
      </header>
      <section>
        {props.data.map(job => (
          <article className="job">
          <h2>{job.position}</h2>
          <a href={`${job.link}`} target="_blank" rel="noopener noreferrer">{job.company}</a>
          <p>{job.description}</p>
          </article>
        ))}
      </section>
    </div>
);

export default Experience;
