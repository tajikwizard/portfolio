import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>E-commerce</p>
          <p>E-commerce Shop</p>
          <p>
            <span>2024</span>
            <a href="https://andoz-commarce.netlify.app/">Tap to view</a>
          </p>
        </div>
        <div className="project">
          <p>Restaurants</p>
          <p>Foods & Restaurants</p>
          <p>
            <span>2024</span>
            <a href="https://andoz-eat.netlify.app/">Tap to view</a>
          </p>
        </div>
        <div className="project">
          <p>Portfolio</p>
          <p>Personal Web page</p>
          <p>
            <span>2024</span>
            <a href="https://tajikwizard-portfolio.netlify.app/">Tap to view</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
