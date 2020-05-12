import React, { Component } from "react";
import Particles from 'react-particles-js';
 
export default class Background extends Component{
  
    render(){
        return (
            <Particles className="background" params={{ "particles": {
                "number": {
                  "value": 10,
                  "density": {
                    "enable": true,
                    "value_area": 1200
                  }
                },
                "color": {
                  "value": ["#343e4a","#462f4b","#4d3a3c","#AA0055"]
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000"
                  },
                  "polygon": {
                    "nb_sides": 6
                  },
                  "image": {
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 160,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 140,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 200,
                  "color": "#ffffff",
                  "opacity": 1,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "left",
                  "random": true,
                  "straight": true,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 1
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": false}} />
        );
    };
 
}