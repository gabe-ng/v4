import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Content from "../containers/Content";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default Main;
