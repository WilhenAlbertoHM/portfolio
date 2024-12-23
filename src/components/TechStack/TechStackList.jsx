import React from "react";
import TechStack from "./TechStack.jsx";
import "./TechStack.css";

const techStacks = [
    {
        title: "Backend",
        items: [
            { name: "Python", icon: "../../../public/TechStack/backend/python.svg" },
            { name: "TensorFlow", icon: "../../../public/TechStack/backend/tensorflow.svg"},
            { name: "Keras", icon: "../../../public/TechStack/backend/keras.svg"},
            { name: "PyTorch", icon: "../../../public/TechStack/backend/pytorch.svg"},
            { name: "LangChain", icon: "../../../public/TechStack/backend/langchain.svg"},
            { name: "Ollama", icon: "../../../public/TechStack/backend/ollama.svg"},
            { name: "Java", icon: "../../../public/TechStack/backend/java.svg" },
            { name: "Go", icon: "../../../public/TechStack/backend/go.svg" },
            { name: "Dask", icon: "../../../public/TechStack/backend/dask.svg" }
        ]
    },
    {
        title: "Frontend",
        items: [
            { name: "React", icon: "../../../public/TechStack/frontend/react.svg" },
            { name: "HTML", icon: "../../../public/TechStack/frontend/html.svg" },
            { name: "CSS", icon: "../../../public/TechStack/frontend/css.svg" },
            { name: "JavaScript", icon: "../../../public/TechStack/frontend/javascript.svg" },
            { name: "Canva", icon: "../../../public/TechStack/frontend/canva.svg" },
            { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png" },

        ]
    },
    {
        title: "Infrastructure",
        items: [
            { name: "MySQL", icon: "../../../public/TechStack/DatabasesNCloud/mysql.svg" },
            { name: "MongoDB", icon: "../../../public/TechStack/DatabasesNCloud/mongodb.svg" },
            { name: "Pinecone", icon: "../../../public/TechStack/DatabasesNCloud/pinecone.svg" },
            { name: "AWS EC2", icon: "../../../public/TechStack/DatabasesNCloud/ec2.svg" },
            { name: "AWS Bedrock", icon: "../../../public/TechStack/DatabasesNCloud/bedrock.svg" },
            { name: "AWS S3", icon: "../../../public/TechStack/DatabasesNCloud/s3.svg" },
        ]
    },
    {
        title: "Tools",
        items: [
            { name: "Git", icon: "../../../public/TechStack/tools/git.svg" },
            { name: "GitHub", icon: "../../../public/TechStack/tools/github.svg" },
            { name: "VS Code", icon: "../../../public/TechStack/tools/vscode.svg" },
            { name: "Docker", icon: "../../../public/TechStack/tools/docker.svg" },
            { name: "Jupyter", icon: "../../../public/TechStack/tools/jupyter.svg" },
            { name: "Ubuntu", icon: "../../../public/TechStack/tools/ubuntu.svg" },
        ]
    }
];

const TechStackList = () => {
    return (
        <div className="techStackList">
            <h1 className="techStackListTitle">
                Technologies <img className="techStackListTitleIcon" src="https://www.svgrepo.com/show/336126/terminal.svg" />
            </h1>
            <div className="techStackListContainer">
                { techStacks.map((techStack, index) => (
                    <TechStack key={index} {...techStack} />
                ))}
            </div>
        </div>
    );
};

export default TechStackList;