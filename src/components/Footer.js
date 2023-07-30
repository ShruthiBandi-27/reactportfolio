import "./Footer.css";
import {
  FaHome,
  FaPhoneAlt,
  FaMailBulk,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Hyderabad, Telangana</p>
              {/* <p>India</p> */}
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhoneAlt
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              8247512249
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              shruthi27998@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>About me</h4>
            <p>
              I am Shruthi. Software Developer at Oracle. With a passion for
              developing end-to-end applications, I am currently seeking new
              opportunities as a full stack developer.
            </p>
            <div className="social">
            <a href="https://github.com/ShruthiBandi-27" target="_blank">
            <FaGithub
                size={20}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/shruthi-bandi-ab8828200" target="_blank">
            <FaLinkedin
                size={20}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
         
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
