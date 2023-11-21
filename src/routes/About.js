import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MyImg from "../components/MyImg/MyImg";
import AboutContent from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <MyImg heading="ABOUT" text="Im a friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
