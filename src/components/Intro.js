import React from 'react';
import { NavLink } from 'react-router-dom';

const Intro = () => {
    return <div className="intro">
        <header>
          <h1 className="title sliding-vertical fadeinUp">
            <span>Hello</span>
            <span>Bonjour</span>
            <span>Hola</span>
            <span>Ni Hao</span>
            <span>Shalom</span>
          </h1>
        </header>
        <section>
          <p>
            Welcome and thanks for checking out my site. Please feel free to explore, send me a <NavLink to="/contact" className="link">
              message
            </NavLink>, or view out the site's <a href="https://github.com/gabe-ng/v4" target="_blank" rel="noopener noreferrer" className="link">
              code
            </a>.
          </p>
        </section>
      </div>;
}

export default Intro;