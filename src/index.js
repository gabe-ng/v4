import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/reset.css";
import "./styles/main.css";

import Main from "./views/main";

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("root")
);
