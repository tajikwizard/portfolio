import React, { useState } from "react";
import { Link } from "react-scroll";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-container shadow-md">
      <div className="navbar-left">
        <Link to="/home" spy={true} smooth={true} duration={500}>
          @tajikwizard
        </Link>
      </div>
      <div className="navbar-right-menubar">
        {isMenuOpen ? (
          <div className="navbar-menu-options">
            <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              about
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              skills
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              projects
            </Link>
          </div>
        ) : (
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
      <div className="navbar-right-options">
        <Link to="home" spy={true} smooth={true} duration={500}>
          home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          about
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          skills
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
