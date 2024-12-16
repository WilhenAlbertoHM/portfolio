import React from "react";
import "./Experience.css";

const keywordsToHighlight = [
    "model", "70%", "accuracy,", "GNN", "PyTorch", "AWS", "EC2,", "Bedrock",
    "classification", "system", "Claude", "3", "Opus", "LangChain,",
    "feedback", "UI", "Retool", "SQL", "chatbot",
    "regression", "testing", "LLM/RAG",

    "RNN", "CNN", "6,000", "videos", "OCEAN", "reducing", "mean-squared", "error", "30%",
    "500+", "attendees","Best", "Poster", "Design", "award", "Co-authored" 
];

const Experience = ({ logo, title, company, duration, points }) => {
    return (
        <div className="experience">
            <div className="experienceContent">
                <div className="experienceHeader">
                    <h2 className="experienceTitle">{title}</h2>
                    <img className="experienceLogo" src={logo} />
                </div>
                <h3 className="experienceCompany">{company}</h3>
                <p className="experienceDuration">{duration}</p>
                <ul className="experiencePoints">
                    { points.map((point, index) => (
                        <li key={index}>
                            { point.split(" ").map((word, idx) => (
                                <span 
                                    key={idx} 
                                    className={keywordsToHighlight.includes(word) ? "highlight" : ""}>
                                    {word}{" "} 
                                </span>
                            )) }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experience;