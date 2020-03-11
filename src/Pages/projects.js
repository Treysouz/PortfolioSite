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
    };
  }
  componentDidMount() {
    
    var database = firebase.database();
    database.ref("projects").on("value", snapshot => {
      var projects = snapshot.val();
      for (var project in projects) {
        var description = projects[project].description;
        
        projects[project].tags.forEach(
          tag => $(".projectTagsContainer").append("<span class='projectTags'>"+tag+"</span>")
        )
      }
    });
  }
  componentDidUpdate(){
   
  }
  render() {
    return (
      <section className="projects">
        <div className="projectTagsContainer">
          <span className="projectTags">All</span>
        </div>
        <div className="projectsList">
          <figure className="projectContainer">
            <img></img>
            <figcaption>afsafsafasfasf</figcaption>
          </figure>
        </div>
      </section>
    );
  }
}
