import "./MyWorks.css";

import React from "react";
import { NavLink } from "react-router-dom";

const MyWorks = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="details">
        <p>{props.text}</p>
        <div className="proj-btn">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="#" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
