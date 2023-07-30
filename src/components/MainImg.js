import "./MainImg.css";
import React from "react";
import Laptop from "../assets/laptop2.jpg";
import { Link } from "react-router-dom";
import Projects from "../routes/Projects";
import Contact from "../routes/Contact";
import Work from "./Work";


const MainImg = () => {

  const handleDownloadResume = () => {
    const fileName = "shruthiB_resume.pdf";
    const aTag = document.createElement("a");
    // aTag.href = "http://localhost:3000/shruthiResume.pdf"
    aTag.href = "/shruthiResume.pdf"
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={Laptop} alt="laptop" />
      </div>
      <div className="content">
        <p>Hi, I'm Shruthi.</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/projects" className="btn" element={<Projects />}>
            Projects
          </Link>
          <button to="/contact" className="btn btn-light" onClick={handleDownloadResume}>
            Download Resume
          </button>
          {/* <Link to="/contact" className="btn btn-light" element={<Contact />}>
            Contact
          </Link> */}
        </div>
      </div>
      <div>
        <Work/>
      </div>
    </div>
  );
};

export default MainImg;
