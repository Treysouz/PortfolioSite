import React, { Component } from "react";
import Welcome from "./Pages/welcome";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";


export default class Router extends Component {
    render(){
        switch(this.props.currentPage){
            case "#welcome":{
                return(
                    <Welcome></Welcome>
                )
            }
            case "#about":{
                return(
                    <About></About>
                )
            }
            case "#projects":{
                return(
                    <Projects></Projects>
                )
            }
            case "#contact":{
                return(
                   <Contact></Contact>
                )
            }
            default:{
                return(
                    <Welcome></Welcome>
                )
            }
        }
        
    }
}