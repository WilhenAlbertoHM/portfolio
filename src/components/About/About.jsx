import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="aboutCard">
                <div className="aboutPicContainer">
                    <img src="../../../public/about/me.png" alt="Me" className="aboutPic" />
                </div>
                <div className="aboutContent">
                    <h1 className="aboutTitle">
                        About Me <img className="aboutTitleIcon" src="../../../public/about/waving-hand.svg"/>
                    </h1>
                    <p className="aboutText">
                        Hola! I’m Wilhen Alberto Hui Mei, and I have 1 year 
                        of experience in building software and AI/ML applications. 
                        I use spoken and programming languages to create a positive impact around us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;