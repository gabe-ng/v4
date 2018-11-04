import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Base from "../components/Base";

class Main extends Component {
  state = {
    nightMode: false,
  }

  render() {
    return <div>
        <Navbar nightMode={this.state.nightMode} />
        <Base nightMode={this.state.nightMode} />
      </div>;
  }
}

export default Main;
