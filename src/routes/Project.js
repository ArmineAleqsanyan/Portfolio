import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MyImg from "../components/MyImg/MyImg";
import Work from "../components/Work/Work";
const Project = () => {
  return (
    <div>
      <Navbar />
      <MyImg heading="PROJECTS" text="Some of my recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
