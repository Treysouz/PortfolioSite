import React, { Component } from "react";
import ProfilePic from "../Assets/Images/ProfilePic.jpg";
export default class About extends Component {
  mobileHeader = () => {
    if (!this.props.mobileView) {
      return (
        <h2>
          From <br></br>
          <span className="textHighlightContainer">
            <span className="textHighlightOne">&nbsp;Mathematician&nbsp;</span>
          </span>
          <br></br>to <br></br>
          <span className="textHighlightContainer">
            <span className="textHighlightTwo">&nbsp;Web Developer,&nbsp;</span>
          </span>
        </h2>
      );
    } else {
      return (
        <h2>
          From&nbsp;
          <span className="textHighlightContainer">
            <span className="textHighlightOne">&nbsp;Mathematician&nbsp;</span>
          </span>
          &nbsp; to &nbsp;
          <span className="textHighlightContainer">
            <span className="textHighlightTwo">&nbsp;Web Developer,&nbsp;</span>
          </span>
        </h2>
      );
    }
  };
  render() {
    return (
      <section className="about">
        <div className="introContainer">
          {this.mobileHeader()}

          <div className="profilePicContainer">
            <img src={ProfilePic} alt="Tremayne Souza"></img>
            <div className="imageFilter"></div>
          </div>
          <div className="socialLinksContainer mobile">
            <a
              className="socialIconContainer"
              href="https://github.com/Treysouz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-alt"></i>
              <p>GitHub</p>
            </a>
            <div className="socialIconContainer">
              <i className="fab fa-linkedin"></i>
              <p>Linkedin</p>
            </div>
            <a
              className="socialIconContainer"
              href="https://www.codewars.com/users/Treysouz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
              <p>Codewars</p>
            </a>
            <a
              className="socialIconContainer"
              href="https://drive.google.com/file/d/1sDFsr1gvzJwCFAe00QvAq12XSb7_18Jn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-file-alt"></i>
              <p>Resume</p>
            </a>
          </div>
        </div>
        <div className="bioContainer">
          <p>
            I’m a Syracuse University graduate with a background in Applied
            Mathematics and Computer Science who has been coding professionally
            for 2 years and leisurely for 10. Currently, I’m a student in the
            CUNY TechWorks software development program building on my
            self-taught foundations. I am motivated by my love for solving
            algorithms and collaborating to create unique and responsive
            designs. I look forward to working with you!
          </p>
        </div>

        <div className="skillsContainer">
          <h3>
            <span className="sectionHeaderOne">Languages</span>
            <span className="colorDivider">/</span>
            <span className="sectionHeaderTwo">
              Frameworks<span className="colorDivider">:</span>
            </span>
          </h3>
          <p className="skillsList">
            HTML5<span className="colorDivider"> / </span>CSS3
            <span className="colorDivider"> / </span>Bootstrap
            <span className="colorDivider"> / </span>JavaScript
            <span className="colorDivider"> / </span>JQuery
            <span className="colorDivider"> / </span>Node.js
            <span className="colorDivider"> / </span>React
            <span className="colorDivider"> / </span>React Native
            <span className="colorDivider"> / </span>Python
            <span className="colorDivider"> / </span>C++
          </p>
        </div>
        <div className="skillsContainer">
          <h3>
            <span className="sectionHeaderOne">Software</span>
            <span className="colorDivider">&amp;</span>
            <span className="sectionHeaderTwo">
              Etc.<span className="colorDivider">:</span>
            </span>
          </h3>
          <p className="skillsList">
            Visual Studio Code
            <span className="colorDivider"> / </span>MailChimp
            <span className="colorDivider"> / </span>Google Firebase
            <span className="colorDivider"> / </span>GIMP
            <span className="colorDivider"> / </span>Google Web Designer
          </p>
        </div>
        <div className="socialLinksContainer desktop">
          <a
            className="socialIconContainer"
            href="https://github.com/Treysouz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-alt"></i>
            <p>GitHub</p>
          </a>
          <a
            className="socialIconContainer"
            href="https://www.linkedin.com/in/tremayne-souza-98862b1a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <p>Linkedin</p>
          </a>
          <a
            className="socialIconContainer"
            href="https://www.codewars.com/users/Treysouz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code"></i>
            <p>Codewars</p>
          </a>
          <a
            className="socialIconContainer"
            href="https://drive.google.com/file/d/1sDFsr1gvzJwCFAe00QvAq12XSb7_18Jn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-file-alt"></i>
            <p>Resume</p>
          </a>
        </div>
      </section>
    );
  }
}
