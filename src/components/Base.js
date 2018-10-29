import React from 'react';

import Sidebar from "./Sidebar";
import Content from "../containers/Content";

const Base = () => {
    return (
        <div className="base">
            <Sidebar />
            <Content />
        </div>
    )
}

export default Base;