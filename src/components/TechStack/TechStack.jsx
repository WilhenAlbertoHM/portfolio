import React from "react";
import "./TechStack.css";

const TechStack = ({ title, items }) => {
    return (
        <div className="techStack">
            <h2 className="techStackTitle">{title}</h2>
            <div className="techStackCards">
                { items.map((item, index) => (
                    <div key={index} className="techStackCard">
                        <img src={item.icon} className="techStackIcon" />
                        <span className="techStackName">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;