import React, { Component } from "react";
import $ from "jquery";

export default class NavBar extends Component {
  componentDidMount() {
    this.updateHeader(this.props.currentPage);
    $(".navLinks").hover(function() {
      $(".navText").stop(true, true);
      $(this)
        .children(".navText")
        .animate({
          width: "175px",
          padding: "5px"
        });
    });

    $(".navLinks").mouseleave(function() {
      $(".navText").stop(true, true);
      if (!$(this).hasClass("active")) {
        $(this)
          .children(".navText")
          .animate({
            width: "0px",
            padding: "0px"
          });
      }
    });
  }

  componentDidUpdate() {
    console.log(this.props.currentPage);
  }

  updateHeader = page => {
    console.log("yep");
    $(".navText").stop(true, true);
    switch (page) {
      case "#welcome": {
        $(".navLinks").each(function() {
          if ($(this).attr("href") === "#welcome") {
            $(this)
              .addClass("active")
              .children(".navText")
              .animate({
                width: "175px",
                padding: "5px"
              });
          } else {
            $(this)
              .removeClass("active")
              .children(".navText")
              .animate({
                width: "0px",
                padding: "0px"
              });
          }
        });
        break;
      }
      case "#about": {
        $(".navLinks").each(function() {
          if ($(this).attr("href") === "#about") {
            $(this)
              .addClass("active")
              .children(".navText")
              .animate({
                width: "175px",
                padding: "5px"
              });
          } else {
            $(this)
              .removeClass("active")
              .children(".navText")
              .animate({
                width: "0px",
                padding: "0px"
              });
          }
        });
        break;
      }
      case "#projects": {
        $(".navLinks").each(function() {
          if ($(this).attr("href") === "#projects") {
            $(this)
              .addClass("active")
              .children(".navText")
              .animate({
                width: "175px",
                padding: "5px"
              });
          } else {
            $(this)
              .removeClass("active")
              .children(".navText")
              .animate({
                width: "0px",
                padding: "0px"
              });
          }
        });
        break;
      }
      case "#contact": {
        $(".navLinks").each(function() {
          if ($(this).attr("href") === "#contact") {
            $(this)
              .addClass("active")
              .children(".navText")
              .animate({
                width: "175px",
                padding: "5px"
              });
          } else {
            $(this)
              .removeClass("active")
              .children(".navText")
              .animate({
                width: "0px",
                padding: "0px"
              });
          }
        });
        break;
      }
      default: {
        $(".navLinks").each(function() {
          if ($(this).attr("href") === "#welcome") {
            $(this)
              .addClass("active")
              .children(".navText")
              .animate({
                width: "175px",
                padding: "5px"
              });
          } else {
            $(this)
              .removeClass("active")
              .children(".navText")
              .animate({
                width: "0px",
                padding: "0px"
              });
          }
        });
        break;
      }
    }
  };

  render() {
    return (
      <nav>
        <a
          href="#welcome"
          className="navLinks"
          onClick={() => this.updateHeader("#welcome")}
        >
          <i className="fas fa-door-open navIcons"></i>
          <span className="navText">Welcome</span>
        </a>
        <a
          href="#about"
          className="navLinks"
          onClick={() => this.updateHeader("#about")}
        >
          <i className="fas fa-user navIcons"></i>
          <span className="navText">About Me</span>
        </a>
        <a
          href="#projects"
          className="navLinks"
          onClick={() => this.updateHeader("#projects")}
        >
          <i className="fas fa-laptop-code navIcons"></i>
          <span className="navText">Projects</span>
        </a>
        <a
          href="#contact"
          className="navLinks"
          onClick={() => this.updateHeader("#contact")}
        >
          <i className="fas fa-envelope navIcons"></i>
          <span className="navText">Contact Me</span>
        </a>
      </nav>
    );
  }
}
