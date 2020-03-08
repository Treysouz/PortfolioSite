import React, { Component } from "react";
import $ from "jquery";

function slideHeaderOut(header) {
  header.animate({
    width: "175px",
    padding: "5px"
  });
}

function slideHeaderIn(header) {
  header.animate({
    width: "0px",
    padding: "0px"
  });
}

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      mobileNav: false
    };
  }
  componentDidMount() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
    this.updateHeader(this.props.currentPage);

    $(".navLinks").hover(function() {
      $(".navText").stop(true, true);
      slideHeaderOut($(this).children(".navText"));
    });

    $(".navLinks").mouseleave(function() {
      $(".navText").stop(true, true);
      if (!$(this).hasClass("active")) {
        slideHeaderIn($(this).children(".navText"));
      }
    });

    $(window).keydown(function(e) {
      var keycode = e.keyCode ? e.keyCode : e.which;
      var index = $(".active").index();
      switch (keycode) {
        case 38: {
          if (index > 0) {
            index -= 1;
          }
          break;
        }
        case 40: {
          if (index < 3) {
            index += 1;
          }
          break;
        }
        default: {
          break;
        }
      }
      $(".navLinks")[index].click();
    });
  }

  componentDidUpdate() {
    this.updateHeader(this.props.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isMobile);
  }

  isMobile = () => {
    this.setState({
      mobileNav: $(window).innerWidth() <= 600
    });
  };

  updateHeader = page => {
    $(".navText").stop(true);
    $(".navLinks").each(function() {
      if ($(this).attr("href") === page) {
        slideHeaderOut(
          $(this)
            .addClass("active")
            .children(".navText")
        );
        $(this)
          .children(".navIcons")
          .addClass("activeIcon");
      } else if (page === "/" || page === "") {
        slideHeaderOut(
          $($(".navLinks")[0])
            .addClass("active")
            .children(".navText")
        );
        $($(".navLinks")[0])
          .children(".navIcons")
          .addClass("activeIcon");
      } else {
        slideHeaderIn(
          $(this)
            .removeClass("active")
            .children(".navText")
        );
        $(this)
          .children(".navIcons")
          .removeClass("activeIcon");
      }
    });
  };

  render() {
    if (this.state.mobileNav) {
      return (
        <nav>
          <a
            href="#welcome"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#welcome");
              this.props.getNewPage("#welcome");
            }}
          >
            <i className="fas fa-door-open navIcons"></i>
            <p className="mobileNavText">Welcome</p>
          </a>
          <a
            href="#about"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#about");
              this.props.getNewPage("#about");
            }}
          >
            <i className="fas fa-user navIcons"></i>
            <p className="mobileNavText">About Me</p>
          </a>
          <a
            href="#projects"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#projects");
              this.props.getNewPage("#projects");
            }}
          >
            <i className="fas fa-laptop-code navIcons"></i>
            <p className="mobileNavText">Projects</p>
          </a>
          <a
            href="#contact"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#contact");
              this.props.getNewPage("#contact");
            }}
          >
            <i className="fas fa-envelope navIcons"></i>
            <p className="mobileNavText">Contact Me</p>
          </a>
        </nav>
      );
    } else {
      return (
        <nav>
          <a
            href="#welcome"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#welcome");
              this.props.getNewPage("#welcome");
            }}
          >
            <i className="fas fa-door-open navIcons"></i>
            <span className="navText">Welcome</span>
          </a>
          <a
            href="#about"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#about");
              this.props.getNewPage("#about");
            }}
          >
            <i className="fas fa-user navIcons"></i>
            <span className="navText">About Me</span>
          </a>
          <a
            href="#projects"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#projects");
              this.props.getNewPage("#projects");
            }}
          >
            <i className="fas fa-laptop-code navIcons"></i>
            <span className="navText">Projects</span>
          </a>
          <a
            href="#contact"
            className="navLinks"
            onClick={() => {
              this.updateHeader("#contact");
              this.props.getNewPage("#contact");
            }}
          >
            <i className="fas fa-envelope navIcons"></i>
            <span className="navText">Contact Me</span>
          </a>
        </nav>
      );
    }
  }
}
