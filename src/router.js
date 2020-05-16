import React, { Component } from "react";
import Welcome from "./Pages/welcome";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";

export default class Router extends Component {
  render() {
    switch (this.props.currentPage) {
      case "#welcome": {
        return <Welcome></Welcome>;
      }
      case "#about": {
        return (
          <About
            isMobile={this.props.isMobile}
            mobileView={this.props.mobileView}
          ></About>
        );
      }
      case "#projects": {
        return <Projects getNewPage={this.props.getNewPage} setProjectView={this.props.setProjectView}></Projects>;
      }
      case "#contact": {
        return <Contact></Contact>;
      }
      default: {
        return <Welcome></Welcome>;
      }
    }
  }
}
