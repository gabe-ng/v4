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

    if(props.nightMode) {
        styles = {
            primary: { "color": "#59FFD2" },
            background: { "backgroundColor": "rgb(30, 54, 95)" },
            border: { "borderColor": "#59FFD2" },
        }
    } else {
        styles = {
            primary: { "color": "black" },
            background: { "backgroundColor": "white" },
            border: { "borderColor": "lightgrey" },
    }
}
    return (
        <div className="content" style={{...styles.primary, ...styles.background, ...styles.border}}>
            <Switch>
                <Route path="/" exact component={Intro} style={{...styles.border}}/> 
                <Route path="/about" exact render={props => <About {...props} data={data.about} style={styles}/>} />
                <Route path="/projects" exact render={props => <Projects {...props } data={data.projects} />}/>
                <Route path="/experience" exact render={props => <Experience {...props} data={data.experience} />} />
                <Route path="/contact" exact render={props => <Contact {...props} data={data.contact} />} /> 
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