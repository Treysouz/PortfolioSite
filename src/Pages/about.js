import React, { Component } from "react";
import ProfilePic from "../Assets/Images/ProfilePic.jpg";
export default class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="profilePicContainer">
          <div className="imageFilter"></div>
          <img src={ProfilePic} alt="Tremayne Souza"></img>
        </div>
        <div className="bioContainer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A
            pellentesque sit amet porttitor eget dolor morbi. Varius duis at
            consectetur lorem donec. Tellus in hac habitasse platea. Tellus in
            metus vulputate eu. Scelerisque eleifend donec pretium vulputate
            sapien.
          </p>
        </div>
        <div className="otherInfoContainer">
          <h2>
            <span className="sectionHeaderOne">Software </span>
            <span className="colorDivider"> &amp; </span>
            <span className="sectionHeaderTwo"> Etc.:</span>
          </h2>
          <p className="skillsList">
            Visual Studio Code
            <span className="colorDivider"> / </span>MailChimp
            <span className="colorDivider"> / </span>Google Firebase
            <span className="colorDivider"> / </span>GIMP
            <span className="colorDivider"> / </span>SalesforceIQ
          </p>
        </div>
        <div className="skillsContainer">
          <h2>
            <span className="sectionHeaderOne">Frameworks</span>
            <span className="colorDivider"> / </span>
            <span className="sectionHeaderTwo">Languages:</span>
          </h2>
          <p className="skillsList">
            HTML5<span className="colorDivider"> / </span>CSS3
            <span className="colorDivider"> / </span>Bootstrap
            <span className="colorDivider"> / </span>JavaScript
            <span className="colorDivider"> / </span>JQuery
            <span className="colorDivider"> / </span>Node.js
            <span className="colorDivider"> / </span>React
            <span className="colorDivider"> / </span>React Native
          </p>
        </div>
        <div className="socialLinksContainer">
          <div className="socialIconContainer">
            <i className="fab fa-github-alt"></i>
            <p>GitHub</p>
          </div>
          <div className="socialIconContainer">
            <i className="fab fa-linkedin"></i>
            <p>Linkedin</p>
          </div>
          <div className="socialIconContainer">
            <i className="fas fa-code"></i>
            <p>Codewars</p>
          </div>
        </div>
      </section>
    );
  }
}
