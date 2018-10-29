import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Index from "../components/Index";
import Content from "../containers/Content";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Index />
        <Content />
      </div>
    );
  }
}

export default Main;
