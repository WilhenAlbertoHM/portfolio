import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="navBar">
            <a href="" className="navLogo">
                <h2>W A H M</h2>
            </a>
            <div className="navLinks">
                <Link className="navLink">Home</Link>
                <Link className="navLink">About</Link>
                <Link className="navLink">Experience</Link>
                <Link className="navLink">Projects</Link>
                <Link className="navLink">Contact</Link>
            </div>
            <div className="navSocial">
                <a href="https://github.com/WilhenAlbertoHM/" className="navSocialIcon">
                    <i className="fab fa-github" id="github-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/wilhen-alberto-hui-mei/" className="navSocialIcon">
                    <i className="fab fa-linkedin" id="linkedin-icon"></i>
                </a>
                <a href="https://www.instagram.com/albertohuimei/" className="navSocialIcon">
                    <i className="fab fa-instagram" id="instagram-icon"></i>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;