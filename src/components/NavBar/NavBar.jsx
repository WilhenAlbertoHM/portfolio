import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <header className="navBar">
            <a href="" className="navLogo">
                <h2>W A H M</h2>
            </a>
            <div className="navLinks">
                <Link className="navLink" to="intro" smooth={true} duration={600}>Home</Link>
                <Link className="navLink" to="about" smooth={true} duration={600}>About</Link>
                <Link className="navLink" to="experienceList" smooth={true} duration={600}>Experience</Link>
                <Link className="navLink" to="projectList" smooth={true} duration={600}>Projects</Link>
            </div>
        </header>
    );
}

export default NavBar;