import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navbar";
import Router from "./router";
import Background from "./Components/background";
import $ from "jquery";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: window.location.href.substr(
        window.location.href.indexOf("#")
      ),
      mobileView: false,
      projectView: false,
    };
  }
  getNewPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  isMobile = () => {
    this.setState({
      mobileView:
        $(window).innerWidth() <= 600 || $(window).innerHeight() <= 600,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.isMobile);
    this.isMobile();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isMobile);
  }

  render() {
    return (
      <main>
        {/* ----------Navigation Bar---------- */}
        <NavBar
          currentPage={this.state.currentPage}
          getNewPage={this.getNewPage}
          mobileView={this.state.mobileView}
        ></NavBar>
        {/* ----------End Navigation Bar---------- */}
        {/* ----------Background Video---------- */}

        <Background></Background>

        {/* ----------End Background Video---------- */}
        {/* ----------Main Content --------- */}
        <Router
          currentPage={this.state.currentPage}
          isMobile={this.isMobile}
          mobileView={this.state.mobileView}
          getNewPage={this.getNewPage}
          setProjectView={this.setProjectView}
        ></Router>
        {/* ----------End Main Content --------- */}
        {/* ----------Footer Content --------- */}
        <footer></footer>
        {/* ----------End Footer Content --------- */}
      </main>
    );
  }
}
