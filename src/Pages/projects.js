import React, { Component } from "react";
import firebase from "firebase";
import config from "../Components/firebase.js";
import $ from "jquery";

firebase.initializeApp(config);
const DATABASE = firebase.database().ref("projects");

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentTag: "All",
      projectView: false
    };
    this.projectsData = null;
    this.projects = [];
    this.allTags = [];
  }
  componentDidMount() {
    DATABASE.on("value", snapshot => {
      this.projectsData = snapshot.val();
      this.sortProjects(this.state.currentTag);
    });
  }

  componentWillUpdate() {}

  componentWillUnmount() {}

  sortProjects = currentTag => {
    $(".projectTags").removeClass("active");
    $(".projectTags").each(function() {
      if ($(this).text() === currentTag && !$(this).hasClass("active")) {
        $(this).addClass("active");
      }
    });
    var projectsData = this.projectsData;
    var newProjectList = [];
    for (var project in projectsData) {
      var tags = projectsData[project].tags;
      tags.forEach(tag => {
        if (!this.allTags.includes(tag)) {
          this.allTags = this.allTags.concat(tag);
        }
      });

      if (
        projectsData[project].tags.includes(currentTag) ||
        currentTag === "All"
      ) {
        newProjectList.push(project);
        this.projects = newProjectList;
      }
    }
    this.setState({
      currentTag: currentTag
    });
  };

  toggleProjectView = () => {
    this.setState({
      projectView: !this.state.projectView
    });
  };
  render() {
    if (this.state.projectView) {
      return (
        <section className="projects">
          <div
            className="overlay"
            onClick={() => this.toggleProjectView()}
          ></div>
        </section>
      );
    } else {
      return (
        <section className="projects">
          <div className="projectsOverlay"></div>
          <div className="projectTagsContainer">
            <span
              className="projectTags"
              onClick={() => this.sortProjects("All")}
            >
              All
            </span>
            {this.allTags.map(tag => (
              <span
                className="projectTags"
                onClick={() => this.sortProjects(tag)}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="projectsList">
            {this.projects.map(project => (
              <figure
                className="projectContainer"
                key={project}
                onClick={() => this.toggleProjectView()}
              >
                <img
                  src={this.projectsData[project].image}
                  alt={this.projectsData[project].alt}
                ></img>
                <figcaption>{project}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      );
    }
  }
}
