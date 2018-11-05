import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Base from "../components/Base";

class Main extends Component {
  state = {
    nightMode: false,
  }

  toggleNightMode = () => {
    this.setState({
      nightMode: !(this.state.nightMode),
    })
  }

  render() {
    return <div>
        <Navbar nightMode={this.state.nightMode} toggleNight={this.toggleNightMode}/>
        <Base nightMode={this.state.nightMode} />
      </div>;
  }
}

export default Main;
