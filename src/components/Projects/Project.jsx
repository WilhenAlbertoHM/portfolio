import React from "react";
import "./Project.css";

const Project = ({ image, title, description }) => {
    return (
        <div className="projectCard">
            <div className="projectCardImage" style={{ backgroundImage: `url(${ image })` }}>
                <div className="projectCardDescription">
                    <h2 className="projectCardTitle">{ title }</h2>
                    <p>{ description }</p>
                </div>
            </div>
        </div>
    );
}

export default Project;