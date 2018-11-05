import React from 'react';
import PropTypes from "prop-types";
import { Switch, Route } from 'react-router-dom';

import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

import data from "../data";

const Content = props =>  {
    let styles;

    if (props.nightMode) {
        styles = {
            background: { "backgroundColor": "rgb(30, 54, 95)" },
            border: { "borderColor": "rgb(81, 214, 179)" },
        }
    } else {
        styles = {
            background: { "backgroundColor": "white" },
            border: { "borderColor": "lightgrey" },
        }
    }

    return (
        <div className="content" style={{...styles.background, ...styles.border}}>
            <Switch>
                <Route path="/" exact render={passedProps => <Intro {...passedProps} nightMode={props.nightMode} />} /> 
                <Route path="/about" exact render={passedPprops => <About {...passedPprops} data={data.about} nightMode={props.nightMode} />} />
                <Route path="/projects" exact render={passedPprops => <Projects {...passedPprops} data={data.projects} nightMode={props.nightMode}/>}/>
                <Route path="/experience" exact render={passedPprops => <Experience {...passedPprops} data={data.experience} nightMode={props.nightMode}/>} />
                <Route path="/contact" exact render={passedPprops => <Contact {...passedPprops} data={data.contact} nightMode={props.nightMode}/>} /> 
            </Switch>
        </div>
    )
}

Content.propTypes = {
    nightMode: PropTypes.bool.isRequired
};

Content.defaultProps = {
    nightMode: false
};


export default Content;