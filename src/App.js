import React, {Component} from "react";
import BackgroundVideo from "./Assets/Videos/pinkandblue.mp4";
import "./App.css";
import NavBar from "./Components/navbar"

export default class App extends Component {
  constructor() {
    super();
    this.state={
      currentPage: (window.location.href).substr((window.location.href).indexOf("#"))
    }
  };


  componentDidMount(){
    
  }


  render() {
    return (
      <main>
        {/* ----------Navigation Bar---------- */}
        <NavBar currentPage={this.state.currentPage}></NavBar>
        {/* ----------End Navigation Bar---------- */}
        {/* ----------Background Video---------- */}
        <section className="backgroundVideo">
          <div className="backgroundFilter"></div>
          <video autoPlay muted loop>
            <source src={BackgroundVideo} type="video/mp4"></source>
          </video>
        </section>
        {/* ----------End Background Video---------- */}
      </main>
    );
  }
}
