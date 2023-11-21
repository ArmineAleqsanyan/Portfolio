import { Link } from "react-router-dom";

import "./Me.css";
import React from "react";
import IntroImg from "../../assets/1.webp";

const Me = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>Front-End Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projectts
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
