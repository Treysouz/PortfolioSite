import React, { Component } from "react";

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
  }
  render() {
    return (
      <section className="welcome">
        <div className="welcomeMessage">
          <h1 className="salutations">{this.state.salutations}</h1>
          <h2>
            My name is
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
          <h2 className="signOff">
            Let's Talk Code <i className="far fa-smile-beam"></i>
          </h2>
        </div>
      </section>
    );
  }
}
