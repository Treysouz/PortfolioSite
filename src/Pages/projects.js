import React, { Component } from "react";
import firebase from "firebase";
import $ from "jquery";
import config from "../Components/firebase.js";

firebase.initializeApp(config);

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentTag: "all",
      allTags: [],
      projects: []
    };
    this.projects=[];
  }
  componentDidMount() {
    var database = firebase.database();
    database.ref("projects").on("value", snapshot => {
      var projects = snapshot.val();
      var tags = [];
      for (var project in projects) {
       this.constructProjectContainers(project);
        // $(".projectsList").append(
        //   "<figure class='projectContainer'><figcaption>" +
        //     project +
        //     "</figcaption></figure>"
        // );
        projects[project].tags.forEach(tag => {
          if (tags.indexOf(tag) === -1) {
            tags.push(tag);
          }
        });
      }

      tags.forEach(function(tag) {
        $(".projectTagsContainer").append(
          "<span class='projectTags'>" + tag + "</span>"
        );
      });
    });
  }

  componentDidUpdate() {}

  constructProjectContainers=(project)=>{
    console.log(this.state.projects)
    this.setState({
      projects: this.state.projects.concat(project)
    })
  }

  render() {
    return (
      <section className="projects">
        <div className="projectTagsContainer">
          <span className="projectTags">All</span>
        </div>
        <div className="projectsList">
          {this.state.projects.map(project=>(
            <p>{project}</p>
          ))}
        </div>
      </section>
    );
  }
}
