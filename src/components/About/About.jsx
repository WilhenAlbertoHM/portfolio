import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="aboutCard">
                <div className="aboutPicContainer">
                    <img src="../../../public/me.png" alt="Me" className="aboutPic" />
                </div>
                <div className="aboutContent">
                    <h1 className="aboutTitle">
                        About Me 
                        <img className="aboutTitleIcon" src="../../../public/waving-hand.svg"/>
                    </h1>
                    <p className="aboutText">
                        Hola! I’m Wilhen Alberto Hui Mei, and I have <span style={{ color: "var(--orange)", fontWeight: "bold" }}>1 year </span> 
                        of experience in <span style={{ color: "var(--orange)", fontWeight: "bold" }}>building AI and ML applications</span>. 
                        I’m focused in using spoken and programming languages to create a positive impact around us.
                    </p>
                </div>
                <div className="aboutSocial">
                    <a href="https://github.com/WilhenAlbertoHM/" className="aboutSocialIcon">
                        <i className="fab fa-github" id="github-icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/wilhenalbertohm/" className="aboutSocialIcon">
                        <i className="fab fa-linkedin" id="linkedin-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;