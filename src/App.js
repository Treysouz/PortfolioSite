import React, {Component} from "react";
import BackgroundVideo from "./Assets/Videos/pinkandblue.mp4";
import "./App.css";
import NavBar from "./Components/navbar"
import Router from "./router";

export default class App extends Component {
  constructor() {
    super();
    this.state={
      currentPage: (window.location.href).substr((window.location.href).indexOf("#"))
    }
  };
  getNewPage = (page) =>{
    this.setState({
      currentPage:page
    })
  }

  render() {
    return (
      <main>
        {/* ----------Navigation Bar---------- */}
        <NavBar currentPage={this.state.currentPage} getNewPage={this.getNewPage}></NavBar>
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
         <Router currentPage={this.state.currentPage}></Router>
          {/* ----------End Main Content --------- */}
      </main>
    );
  }
}
