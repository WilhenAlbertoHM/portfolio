import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <header className="navBar">
            <a href="./" className="navLogo">
                <h2>W A H M</h2>
            </a>
            <div className="navLinks">
                <Link className="navLink" to="intro" smooth={true} duration={600}>Home</Link>
                <Link className="navLink" to="about" smooth={true} duration={600}>About</Link>
                <Link className="navLink" to="experienceList" smooth={true} duration={600}>Experience</Link>
                <Link className="navLink" to="projectList" smooth={true} duration={600}>Projects</Link>
                <Link className="navLink" to="gallery" smooth={true} duration={600}>Gallery</Link>
            </div>
            <div className="aboutSocial">
                <a href="https://github.com/WilhenAlbertoHM/" className="aboutSocialIcon">
                    <i className="fab fa-github" id="github-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/wilhenalbertohm/" className="aboutSocialIcon">
                    <i className="fab fa-linkedin" id="linkedin-icon"></i>
                </a>
            </div>
        </header>
    );
};

export default NavBar;