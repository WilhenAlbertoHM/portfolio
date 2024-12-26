import React from "react";
import TechStack from "./TechStack.jsx";
import "./TechStack.css";

const techStacks = [
    {
        title: "Backend",
        items: [
            { name: "Python", icon: "TechStack/Backend/python.svg" },
            { name: "TensorFlow", icon: "TechStack/Backend/tensorflow.svg"},
            { name: "Keras", icon: "TechStack/Backend/keras.svg"},
            { name: "PyTorch", icon: "TechStack/Backend/pytorch.svg"},
            { name: "LangChain", icon: "TechStack/Backend/langchain.svg"},
            { name: "Ollama", icon: "TechStack/Backend/ollama.svg"},
            { name: "Java", icon: "TechStack/Backend/java.svg" },
            { name: "Go", icon: "TechStack/Backend/go.svg" },
            { name: "Dask", icon: "TechStack/Backend/dask.svg" }
        ]
    },
    {
        title: "Frontend",
        items: [
            { name: "JavaScript", icon: "TechStack/Frontend/javascript.svg" },
            { name: "HTML", icon: "TechStack/Frontend/html.svg" },
            { name: "CSS", icon: "TechStack/Frontend/css.svg" },
            { name: "React", icon: "TechStack/Frontend/react.svg" },
            { name: "Canva", icon: "TechStack/Frontend/canva.svg" },
            { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png" }

        ]
    },
    {
        title: "Infrastructure",
        items: [
            { name: "MySQL", icon: "TechStack/DatabasesNCloud/mysql.svg" },
            { name: "SQLite", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" },
            { name: "MongoDB", icon: "TechStack/DatabasesNCloud/mongodb.svg" },
            { name: "Pinecone", icon: "TechStack/DatabasesNCloud/pinecone.svg" },
            { name: "AWS EC2", icon: "TechStack/DatabasesNCloud/ec2.svg" },
            { name: "AWS Bedrock", icon: "TechStack/DatabasesNCloud/bedrock.svg" },
            { name: "AWS S3", icon: "TechStack/DatabasesNCloud/s3.svg" }
        ]
    },
    {
        title: "Tools",
        items: [
            { name: "Git", icon: "TechStack/Tools/git.svg" },
            { name: "GitHub", icon: "TechStack/Tools/github.svg" },
            { name: "VS Code", icon: "TechStack/Tools/vscode.svg" },
            { name: "Docker", icon: "TechStack/Tools/docker.svg" },
            { name: "Jupyter", icon: "TechStack/Tools/jupyter.svg" },
            { name: "Ubuntu", icon: "TechStack/Tools/ubuntu.svg" }
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