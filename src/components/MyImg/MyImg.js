import React, { Component } from "react";
import "./MyImg.css";
class MyImg extends Component {
  render() {
    return (
      <div className="my-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default MyImg;
