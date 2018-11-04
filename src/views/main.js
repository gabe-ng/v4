import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Base from "../components/Base";

class Main extends Component {
  state = {
    nightMode: false,
  }

  toggleNightMode = () => {
    console.log("changing state");
    
    this.setState({
      nightMode: !(this.state.nightMode),
    })
  }

  render() {
    console.log(this.state.nightMode)
    return <div>
        <Navbar nightMode={this.state.nightMode} toggleNight={this.toggleNightMode}/>
        <Base nightMode={this.state.nightMode} />
      </div>;
  }
}

export default Main;
