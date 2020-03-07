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
        <NavBar currentPage={this.state.currentPage}></NavBar>
        {/* ----------Background Video---------- */}
        <section className="backgroundVideo">
          <div className="backgroundFilter"></div>
          <video autoPlay muted loop className="backgroundVideo">
            <source src={BackgroundVideo} type="video/mp4"></source>
          </video>
        </section>
        {/* ----------End Background Video---------- */}
      </main>
    );
  }
}
