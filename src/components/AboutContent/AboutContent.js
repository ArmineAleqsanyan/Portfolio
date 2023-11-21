import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import Img1 from "../../assets/img1.avif";
import Img2 from "../../assets/img2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          Ia a react front-end developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Img1} alt="img1" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={Img2} alt="img1" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
