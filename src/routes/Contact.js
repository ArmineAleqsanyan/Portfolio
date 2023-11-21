import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MyImg from "../components/MyImg/MyImg";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MyImg heading="CONTACT" text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
