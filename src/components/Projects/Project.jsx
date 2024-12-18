import React from "react";
import "./Project.css";

const Project = ({ image, title, description }) => {
    return (
        <div className="projectCard">
            <img src={image} className="projectCardPic"/>
            <h2 className="projectCardTitle">{title}</h2>
            <p className="projectCardText">{description}</p>
        </div>
    );
}

export default Project;