import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <form action="https://formspree.io/treysouz@gmail.com" method="POST">
          <div className="inputContainer">
            <label>Name</label>
            <input className="textInput" type="text" name="name"></input>
          </div>
          <div className="inputContainer">
            <label>Email</label>
            <input className="textInput" type="email" name="_replyto"></input>
          </div>
          <div className="inputContainer">
            <label>Message</label>
            <br></br>
            <textarea className="messageInput" name="message"></textarea>
          </div>
          <input className="formButton" type="submit" value="Send"></input>
        </form>
        {/* <div className="copyright">
          <p>Tremayne Souza &copy; 2020</p>
        </div> */}
      </section>
    );
  }
}
