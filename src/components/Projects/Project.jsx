import React from "react";
import "./Project.css";

const highlightKeywords = (text, keywords) => {
    if (!keywords || keywords.length === 0) return text;

    // Split text into words and wrap matching keywords
    const words = text.split(" ");
    return words.map((word, index) => {
        const isKeyword = keywords.some(
            (keyword) => word === keyword
        );
        return isKeyword ? (
            <span key={index} className="highlight">
                {word + " "}
            </span>
        ) : (
            <span key={index}> {word} </span>
        );
    });
};

const Project = ({ image, title, description, keywords, techStack, github }) => {
    return (
        <div className="projectCard">
            <div className="projectCardImage" style={{ backgroundImage: `url(${ image })` }}></div>
            <div className="projectCardDescriptionContainer" onClick={() => window.open(github, "_blank")}>
                <h2 className="projectCardTitle">{ title }</h2>
                <p className="projectCardDescription">{ highlightKeywords(description, keywords) }</p>
                <div className="projectCardTechStack">
                    { techStack.map((tech, index) => (
                        <span key={index} className="projectCardTech">{ tech }</span>
                    ))}
                </div>
                <a href={ github } className="projectCardGithub">
                    <i className="fab fa-github" id="github-icon" style={{transform: "scale(2)"}}></i>
                </a>
            </div>
        </div>
    );
}

export default Project;