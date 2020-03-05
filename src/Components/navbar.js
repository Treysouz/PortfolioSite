import React, { Component } from "react";


export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <a href="#welcome" className="navLinks">
          <i className="fas fa-door-open navIcons"></i>
          <span className="navText">Welcome</span>
        </a>
        <a href="#about" className="navLinks">
          <i className="fas fa-user navIcons"></i>
          <span className="navText">About Me</span>
        </a>
        <a href="#projects" className="navLinks">
          <i className="fas fa-laptop-code navIcons"></i>
          <span className="navText">Projects</span>
        </a>
        <a href="#contact" className="navLinks">
          <i className="fas fa-envelope navIcons"></i>
          <span className="navText">Contact Me</span>
        </a>
      </nav>
    );
  }
}
