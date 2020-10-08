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
      currentProject: null,
      gallery: false,
    };
    this.projectsData = null;
    this.projects = [];
    this.allTags = [];
  }
  componentDidMount() {
    //If component mounts, get a snapshot of the firebase database
    DATABASE.on("value", (snapshot) => {
      this.projectsData = snapshot.val();
      this.sortProjects(this.state.currentTag);

    });
  }
  //Populate tags and project images in 'projects' section.  Set this.state.currentTag to user selected tag.
  sortProjects = (currentTag) => {
    $(".projectTags").removeClass("active");
    $(".projectTags").each(function () {
      if ($(this).text() === currentTag && !$(this).hasClass("active")) {
        $(this).addClass("active");
      }
    });
    var projectsData = this.projectsData;
    var newProjectList = [];
    for (var project in projectsData) {
      var tags = projectsData[project].tags;
      tags.forEach((tag) => {
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
      currentTag: currentTag,
    });
  };
  //Open module to see project details
  openProjectView = (project) => {
    this.setState({
      projectView: true,
      currentProject: project,
    });
  };
  //Exit module with project details.
  exitProjectView = () => {
    if (this.state.projectView) {
      this.setState({
        projectView: false,
        gallery: false,
      });
    }
  };
  //Populates project details module with information depending on project clicked and whether or not user is viewing the image gallery.
  projectOverlay = () => {
    var projectTitle = this.state.currentProject;
    if (this.projectsData) {
      var projectData = this.projectsData[projectTitle];
    }

    if (this.state.projectView && !this.state.gallery) {
      return (
        <div className="overlay">
          <i
            onClick={() => this.exitProjectView()}
            className="far fa-times-circle exitView"
          ></i>
          <h1>{projectTitle}</h1>
          <ul>
            {projectData.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="projectTagsList">
            {projectData.tags.map((tag) => (
              <span key={tag}>#{tag}&nbsp;</span>
            ))}
          </div>
          <div className="projectLinksContainer">
            {this.populateContactLink(projectData.contact)}
            {this.populateWebsiteLink(projectData.website)}
            {this.populateGithub(projectData.github)}
            <div
              onClick={() =>
                this.state.gallery
                  ? this.setState({ gallery: false })
                  : this.setState({ gallery: true })
              }
            >
              <i className="far fa-images"></i>
              <p>Images</p>
            </div>
          </div>
        </div>
      );
    } else if (this.state.projectView && this.state.gallery) {
      return (
        <div className="overlay">
          <i
            className="fas fa-arrow-left backButton"
            onClick={() => this.setState({ gallery: false })}
          ></i>
          <h1>{projectTitle}</h1>
          <div className="imageGallery">
            {projectData.gallery.map((image) => (
              <a
                href={image}
                key={image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image} alt={this.state.currentProject}></img>
              </a>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  //Detects if project needs a 'Contact for Code' button and returns it.
  populateContactLink = (contact) => {
    if (typeof contact !== "undefined") {
      return (
        <a
          className="projectLink"
          href={contact}
          onClick={() => this.props.getNewPage("#contact")}
        >
          <i className="fas fa-envelope"></i>
          <p>
            Contact for <br></br>Code
          </p>
        </a>
      );
    }
  };
  //Detects if project needs a 'Website' button and returns it.
  populateWebsiteLink = (website) => {
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
  //Detects if project needs a 'Github' button and returns it.
  populateGithub = (github) => {
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
          {this.allTags.map((tag) => (
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
          {this.projects.map((project) => (
            <figure
              className="projectContainer"
              key={project}
              onClick={() => this.openProjectView(project)}
            >
              {this.projectsData[project].image ? (
                <img
                  src={this.projectsData[project].image}
                  alt={this.projectsData[project].alt}
                ></img>
              ) : (
                <span className="loadingText">Loading Image....</span>
              )}

              <figcaption>{project}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }
}
