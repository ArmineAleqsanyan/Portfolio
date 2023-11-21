import React from "react";
import MyWorks from "../MyWorks/MyWorks";
import MyWorkData from "./MyWorkData";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {MyWorkData.map((val, ind) => {
          return (
            <MyWorks
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
