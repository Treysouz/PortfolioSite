import React, { Component } from "react";
import ProfilePic from "../Assets/Images/ProfilePic.jpg";
export default class About extends Component {
  render() {
    if (this.props.mobileView) {
      return (
        <section className="about">
          <div className="bioContainer">
            <div className="introContainer">
              <div className="profilePicContainer">
                <div className="imageFilter"></div>
                <img src={ProfilePic} alt="Tremayne Souza"></img>
              </div>
              <div className="socialLinksContainer">
                <a
                  className="socialIconContainer"
                  href="https://github.com/Treysouz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt"></i>
                  <p>GitHub</p>
                </a>
                {/* <div className="socialIconContainer">
              <i className="fab fa-linkedin"></i>
              <p>Linkedin</p>
            </div> */}
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
              <h3 className="tagLine">
                From &nbsp;
                <span className="textHighlightContainer">
                  <span className="textHighlightOne">
                    &nbsp;Mathematician&nbsp;
                  </span>
                </span>
                &nbsp; to&nbsp;
                <span className="textHighlightContainer">
                  <span className="textHighlightTwo">
                    &nbsp;Web Developer,&nbsp;
                  </span>
                </span>
              </h3>
            </div>
            <p>
              I’m a Syracuse University graduate with a background in applied
              mathematics and computer science who has been coding
              professionally for 4 years and leisurely for 10. Currently, I’m a
              student in the CUNY TechWorks software development program
              building on my self-taught foundations. I am motivated by my love
              for solving algorithms and collaborating to create unique and
              responsive designs. I look forward to working with you!
            </p>
          </div>

          <div className="skillsContainer">
            <h2>
              <span className="sectionHeaderOne">Languages</span>
              <span className="colorDivider"> / </span>
              <span className="sectionHeaderTwo">
                Frameworks<span className="colorDivider">:</span>
              </span>
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

          <div className="miscInfoContainer">
            <h2>
              <span className="sectionHeaderOne">Software</span>
              <span className="colorDivider"> &amp; </span>
              <span className="sectionHeaderTwo">
                Etc.<span className="colorDivider">:</span>
              </span>
            </h2>
            <p className="skillsList">
              Visual Studio Code
              <span className="colorDivider"> / </span>MailChimp
              <span className="colorDivider"> / </span>Google Firebase
              <span className="colorDivider"> / </span>GIMP
              <span className="colorDivider"> / </span>SalesforceIQ
            </p>
          </div>
        </section>
      );
    } else {
      return (
        <section className="about">
          <div className="bioContainer">
            <div className="introContainer">
              <h3 className="tagLine">
                From <br></br>
                <span className="textHighlightContainer">
                  <span className="textHighlightOne">
                    &nbsp;Mathematician&nbsp;
                  </span>
                </span>
                <br></br>to <br></br>
                <span className="textHighlightContainer">
                  <span className="textHighlightTwo">
                    &nbsp;Web Developer,&nbsp;
                  </span>
                </span>
              </h3>
              <div className="profilePicContainer">
                <div className="imageFilter"></div>
                <img src={ProfilePic} alt="Tremayne Souza"></img>
              </div>
            </div>

            <p>
              I’m a Syracuse University graduate with a background in applied
              mathematics and computer science who has been coding
              professionally for 2 years and leisurely for 10. Currently, I’m a
              student in the CUNY TechWorks software development program
              building on my self-taught foundations. I am motivated by my love
              for solving algorithms and collaborating to create unique and
              responsive designs. I look forward to working with you!
            </p>
          </div>
          <div className="skillsContainer">
            <h2>
              <span className="sectionHeaderOne">Languages</span>
              <span className="colorDivider"> / </span>
              <span className="sectionHeaderTwo">
                Frameworks<span className="colorDivider">:</span>
              </span>
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
          <div className="miscInfoContainer">
            <h2>
              <span className="sectionHeaderOne">Software</span>
              <span className="colorDivider"> &amp; </span>
              <span className="sectionHeaderTwo">
                Etc.<span className="colorDivider">:</span>
              </span>
            </h2>
            <p className="skillsList">
              Visual Studio Code
              <span className="colorDivider"> / </span>MailChimp
              <span className="colorDivider"> / </span>Google Firebase
              <span className="colorDivider"> / </span>GIMP
              <span className="colorDivider"> / </span>SalesforceIQ
            </p>
          </div>

          <div className="socialLinksContainer">
            <a
              className="socialIconContainer"
              href="https://github.com/Treysouz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-alt"></i>
              <p>GitHub</p>
            </a>
            {/* <div className="socialIconContainer">
              <i className="fab fa-linkedin"></i>
              <p>Linkedin</p>
            </div> */}
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
}
