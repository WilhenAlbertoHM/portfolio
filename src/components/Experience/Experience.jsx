import React from "react";
import "./Experience.css";

const Experience = ({ logo, title, company, duration, points }) => {
    return (
        <div className="experience">
            <img className="experienceLogo" src={logo}/>
            <div className="experienceContent">
                <h2 className="experienceTitle">{title}</h2>
                <h3 className="experienceCompany">{company}</h3>
                <p className="experienceDuration">{duration}</p>
                <ul className="experiencePoints">
                    { points.map((point, index) => (<li key={index}>{point}</li>)) }
                </ul>
            </div>
        </div>
    );
}

export default Experience;