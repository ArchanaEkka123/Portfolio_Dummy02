import React from "react";
import "./projects.scss";
import About from "./about";
import Navbar from "./navbar";


const Projects = () => {
  return (
    <div className="projects-main">
        <div className="heading-box ">
          <h1 className="projects-heading font-bold "> Projects</h1>
        <div className="underline"></div></div>
            <div className="sec_holder">
        <div className=" left-box ">
                      <p className="heading-sub">Project Name</p>
            <p className="projects-content">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>
            <div className="button-holder  ">
              <button className="button-view">View Project</button>
            </div>
          
        </div>
        <div className="right-box">
          <img
            className="right-box-image rounded-r-2xl "
            src="/images/projects-1.jpg"
            alt="Description of the image"
          />  
        </div>
      </div>



      <div className="sec_holder">

      <div className="right-box">
          <img
            className="right-box-image rounded-l-2xl "
            src="/images/projects-2.jpg"
            alt="Description of the image"
          />
        </div>
        <div className=" left-box ">
          
            <p className="heading-sub">Project Name</p>
            <p className="projects-content">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>

            <div className="button-holder  ">
              <button className="button-view">View Project</button>
            </div>
          
        </div>
       
      </div>

      <div className="sec_holder">
        <div className=" left-box ">
          
            <p className="heading-sub">Project Name</p>
            <p className="projects-content">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>

            <div className="button-holder ">
              <button className="button-view">View Project</button>
            </div>
                  </div>
        <div className="right-box">
          <img
            className="right-box-image rounded-r-2xl "
            src="/images/projects-3.jpg"
            alt="Description of the image"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
