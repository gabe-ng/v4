import React from 'react';

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
            <Sidebar nightMode={this.props.nightMode}/>
            <Content nightMode={this.props.nightMode}/>
        </div>
    )
}

export default Base;