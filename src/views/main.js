import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Base from "../components/Base";
import Content from "../containers/Content";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Base />
        <Content />
      </div>
    );
  }
}

export default Main;
