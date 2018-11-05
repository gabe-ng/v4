import React from 'react';
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Content from "../containers/Content";

const Base = props => {
    let styles;

    if (props.nightMode) {
        styles = {
            background: { "backgroundColor": "rgb(19, 35, 61)"},
        }
    } else {
        styles = {
            background: { "backgroundColor": "whitesmoke" },
        }
    }

    return (
        <div className="base" style={{...styles.background}}>
            <Sidebar nightMode={props.nightMode}/>
            <Content nightMode={props.nightMode}/>
        </div>
    )
}

Base.propTypes = {
  nightMode: PropTypes.bool.isRequired
};

Base.defaultProps = {
  nightMode: false
};

export default Base;