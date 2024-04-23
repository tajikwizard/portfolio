import React from "react";
import "./HomePage.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <span>hey,</span>
          <p>
            this is<span> Abdulaziz</span>,
          </p>
        </div>
        <span>a web developer.</span>
      </div>
      <div className="home-page-footer">
        <a
          href="https://github.com/tajikwizard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/abdusamadzoda-abdulaziz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/az1.zz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a href="/https://www.google.com">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
