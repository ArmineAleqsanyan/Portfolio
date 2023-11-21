import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Me from "../components/Me/Me";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Me />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
