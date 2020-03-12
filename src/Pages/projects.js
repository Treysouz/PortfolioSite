import React, { Component } from "react";
import firebase from "firebase";
import $ from "jquery";

const config = {
  apiKey: "AIzaSyCJSDTISw_daKLmCkUwHO2z0h4nNHh4dzA",
  authDomain: "portfolio-site-ec8fd.firebaseapp.com",
  databaseURL: "https://portfolio-site-ec8fd.firebaseio.com",
  projectId: "portfolio-site-ec8fd",
  storageBucket: "portfolio-site-ec8fd.appspot.com",
  messagingSenderId: "114449509420",
  appId: "1:114449509420:web:bcc35ed83beb925c84f589"
};
firebase.initializeApp(config);

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentTag: "all",
      allTags: []
    };
  }
  componentDidMount() {
    var database = firebase.database();
    database.ref("projects").on("value", snapshot => {
      var projects = snapshot.val();
      var tags = [];
      for (var project in projects) {
        $(".projectsList").append(
          "<figure class='projectContainer'><figcaption>" +
            project +
            "</figcaption></figure>"
        );
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

  sortProjects = () => {

  };

  render() {
    return (
      <section className="projects">
        <div className="projectTagsContainer">
          <span className="projectTags">All</span>
        </div>
        <div className="projectsList">
        
        </div>
      </section>
    );
  }
}
