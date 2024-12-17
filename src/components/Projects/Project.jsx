import React from "react";
import "./Project.css";

const Project = ({ image, title, description }) => {
    return (
        <div className="projectCard">
            <img src={image} alt={title} className="projectPic"/>
            <h2 className="projectTitle">{title}</h2>
            <p className="projectText">{description}</p>
        </div>
    );
}

export default Project;