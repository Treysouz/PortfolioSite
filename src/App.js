import React, { Component } from "react";
import BackgroundVideo from "./Assets/Videos/pinkandblue.mp4";
import "./App.css";
import NavBar from "./Components/navbar";
import Router from "./router";
import $ from "jquery";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: window.location.href.substr(
        window.location.href.indexOf("#")
      ),
      mobileView: false,
    };
  }
  getNewPage = page => {
    this.setState({
      currentPage: page
    });
  };
  isMobile = () => {
    this.setState({
      mobileView: ($(window).innerWidth() <= 600 || $(window).innerHeight()<=600)
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
        <div className="backgroundVideo">
          <div className="backgroundFilter"></div>
          <video autoPlay muted loop>
            <source src={BackgroundVideo} type="video/mp4"></source>
          </video>
        </div>
        {/* ----------End Background Video---------- */}
        {/* ----------Main Content --------- */}
        <Router
          currentPage={this.state.currentPage}
          isMobile={this.isMobile}
          mobileView={this.state.mobileView}
          getNewPage={this.getNewPage}
        ></Router>
        {/* ----------End Main Content --------- */}
        {/* ----------Footer Content --------- */}
        <footer>
      
        </footer>
        {/* ----------End Footer Content --------- */}
      </main>
     
    );
  }
}
