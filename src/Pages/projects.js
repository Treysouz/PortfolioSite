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
      projectView: false,
      currentProject: null
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

  openProjectView = project => {
    this.setState({
      projectView: true,
      currentProject: project
    });
  };

  exitProjectView = () => {
    if (this.state.projectView) {
      this.setState({
        projectView: false
      });
    }
  };
  projectOverlay = () => {
    var projectTitle = this.state.currentProject;

    if (this.state.projectView) {
      var projectData = this.projectsData[projectTitle];
      return (
        <div className="overlay">
          <i
            onClick={() => this.exitProjectView()}
            className="far fa-times-circle exitView"
          ></i>
          <h1>{projectTitle}</h1>
          <ul>
            {projectData.description.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="projectTagsList">
            {projectData.tags.map(tag => (
              <span key={tag}>#{tag}&nbsp;</span>
            ))}
          </div>
          <div className="projectLinksContainer">
            {this.populateContactLink(projectData.contact)}
            {this.populateWebsiteLink(projectData.website)}
            {this.populateGithub(projectData.github)}
          </div>

          {/* <div className="projectLinksContainer">
            <a className="projectLink" href="test">
              <i className="fab fa-github-alt"></i>
              <p>GitHub</p>
            </a>
            <a className="projectLink" href="#">
              <i className="far fa-window-maximize"></i>
              <p>WebSite</p>
            </a>
          </div> */}
        </div>
      );
    }
  };
  populateContactLink = contact => {
    if (typeof contact !== "undefined") {
      return (
        <a
          className="projectLink"
          href={contact} onClick={()=>this.props.getNewPage("#contact")}
        >
          <i className="fas fa-envelope"></i>
          <p>Contact for Code</p>
        </a>
      );
    }
  };
  populateWebsiteLink = website => {
    if (typeof website !== "undefined") {
      return (
        <a
          className="projectLink"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-window-maximize"></i>
          <p>Website</p>
        </a>
      );
    }
  };
  populateGithub = github => {
    if (typeof github !== "undefined") {
      return (
        <a
          className="projectLink"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-alt"></i>
          <p>GitHub</p>
        </a>
      );
    }
  };

  render() {
    return (
      <section className="projects">
        {this.projectOverlay()}
        <div
          className="projectTagsContainer"
          onClick={() => this.exitProjectView()}
        >
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
        <div className="projectsList" onClick={() => this.exitProjectView()}>
          {this.projects.map(project => (
            <figure
              className="projectContainer"
              key={project}
              onClick={() => this.openProjectView(project)}
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
