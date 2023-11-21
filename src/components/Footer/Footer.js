import React from "react";
import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "10px" }} />
            <div>
              <p>Yerevan, Armenia</p>
              <p>Erebouni District</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "10px" }}
              />
              <span className="phone-num">+374(96)03-00-39</span>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "10px" }}
              />
              <span className="mail">arminealeqsanyanwebdev@gmail.com</span>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is Armine. I enjoy discussing new projects and design
            challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "5px" }}
            />
            <FaGithub size={20} style={{ color: "#fff", marginRight: "5px" }} />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
