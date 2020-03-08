import React, { Component } from "react";
import $ from "jquery";

// var colors = [
//   "magenta",
//   "lightseagreen",
//   "skyblue",
//   "blue",
//   "red",
//   "purple",
//   "orange",
//   "pink"
// ];

// var bubbles = $(".bubblesContainer").children();

// function moveBubbles() {
//   bubbles = $(".bubblesContainer").children();
//   $(bubbles).each(function() {
//     var oldPositionLeft = $(this).position().left;
//     var newPositionLeft =
//       ($(".welcome").width() * Math.floor(Math.random() * 100)) / 100 - 125;
//     var newPositionTop =
//       ($(".welcome").height() * Math.floor(Math.random() * 100)) / 100 - 125;
//     $(this)
//       .animate(
//         {
//           left: oldPositionLeft * 0.5,
//           opacity: 0
//         },
//         13000,
//         function() {
//           $(this).css(
//             "background-color",
//             colors[Math.floor(Math.random() * colors.length)]
//           );
//         }
//       )
//       .animate(
//         {
//           left: newPositionLeft,
//           top: newPositionTop
//         },
//         500
//       )
//       .animate(
//         {
//           opacity: 0.1
//         },
//         1000
//       );
//   });
// }

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      salutations: ""
    };
  }
  componentDidMount() {
    var date = new Date();
    if (date.getHours() > 5 && date.getHours() < 12) {
      this.setState({
        salutations: "Good Morning!"
      });
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      this.setState({
        salutations: "Good Afternoon!"
      });
    } else if (date.getHours() >= 18 && date.getHours() <= 24) {
      this.setState({
        salutations: "Good Evening!"
      });
    } else {
      this.setState({
        salutations: "Can't Sleep? Neither Can I..."
      });
    }
    //     $(".bubblesContainer")
    //       .children()
    //       .each(function() {
    //         $(this).css({
    //           top: Math.floor(
    //             Math.random() * Math.floor($(".welcome").height() - 125)
    //           ),
    //           left: Math.floor(
    //             Math.random() * Math.floor($(".welcome").width() - 125)
    //           )
    //         });
    //         $(this).css(
    //           "background-color",
    //           colors[Math.floor(Math.random() * colors.length)]
    //         );
    //       });
    //     var bubblesLoop = setInterval(function() {
    //       moveBubbles();
    //     }, 14500);
    //     moveBubbles();
    //     $(window).resize(function(){
    //         $(bubbles).stop();
    //         moveBubbles();
    //     })
    //     $(window).blur(function() {
    //       clearInterval(bubblesLoop);
    //     });
    //     $(window).focus(function() {
    //       bubblesLoop = setInterval(function() {
    //         moveBubbles();
    //       }, 14500);
    //     });
  }
  render() {
    return (
      <section className="welcome">
        {/* <div className="bubblesContainer">
          <div className="tinyBubbles">
            <i className="fab fa-html5"></i>
          </div>
          <div className="tinyBubbles">
            <i className="fab fa-python"></i>
          </div>
          <div className="tinyBubbles">
            <i className="fab fa-react"></i>
          </div>
          <div className="tinyBubbles">
            <i className="fab fa-css3-alt"></i>
          </div>
          <div className="tinyBubbles">
            <i className="fab fa-js"></i>
          </div>
        </div> */}
        <div className="welcomeMessage">
          <h1 className="salutations">{this.state.salutations}</h1>
          <h2>
            My name is{" "}
            <span className="myName">
              <span>&nbsp;Tremayne Souza&nbsp;</span>
            </span>
            <br></br> <br></br>I'm a&nbsp;
            <span className="myPos">
              <span>&nbsp;Full-Stack Web Developer&nbsp;</span>
            </span>
          </h2>
          <br></br>
          <br></br>
          <h2 className="signOff">Let's Talk Code <i className="far fa-smile-beam"></i></h2>
        </div>
      </section>
    );
  }
}
