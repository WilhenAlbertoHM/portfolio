import React from "react";
import Project from "./Project.jsx";
import "./Project.css";

const projects = [
    {
        id: 1,
        image: "../../../public/Projects/faithful.png",
        title: "Faithful AI",
        description: "A Christian chatbot designed to help users learn more about the Bible and grow in their faith. \
        It responds in English, Spanish, French, and German in a passionate and energetic tone",
        keywords: ["Christian", "chatbot", "help", "users", "learn", "Bible", "faith", "passionate", "energetic", "tone"],
        techStack: ["Python", "Llama 3.1", "LangChain", "Streamlit"],
        github: "https://github.com/WilhenAlbertoHM/FaithfulAI"
    },
    {
        id: 2,
        image: "https://github.com/user-attachments/assets/f589397a-1c46-415a-bc17-459e111623a0",
        title: "VideoAskRAG",
        description: "A RAG application that can answer questions about a YouTube video. \
        The system receives a link, creates a transcription, and uses it as context before answering the user",
        keywords: ["RAG", "application", "answer", "questions", "YouTube", "video."],
        techStack: ["Python", "Llama 3.2", "LangChain", "Streamlit"],
        github: "https://github.com/WilhenAlbertoHM/VideoAskRAG"
    },
    {
        id: 3,
        image: "../../../public/Projects/graphbox.png",
        title: "GraphBox",
        description: "A Roblox game that consists of 2 custom games: GObby! and BoxDash. \
        Beware of where you jump in GObby!, or else you will fall and plummet to your demise. \
        Beware of where you land in BoxDash, the lava will set you on fire and meet your demise.",
        keywords: ["Roblox", "game", "GObby!", "BoxDash."],
        techStack: ["Roblox Studio", "Lua"],
        github: "https://github.com/CS460GraphBox/GraphBox"
    },
    {
        id: 4,
        image: "../../../public/Projects/graphbox.png",
        title: "GraphBox",
        description: "A Roblox game that consists of 2 custom games: GObby! and BoxDash. \
        Beware of where you jump in GObby!, or else you will fall and plummet to your demise. \
        Beware of where you land in BoxDash, the lava will set you on fire and meet your demise.",
        keywords: ["Roblox", "game", "GObby!", "BoxDash."],
        techStack: ["Roblox Studio", "Lua"],
        github: "https://github.com/CS460GraphBox/GraphBox"
    },
    {
        id: 5,
        image: "../../../public/Projects/graphbox.png",
        title: "GraphBox",
        description: "A Roblox game that consists of 2 custom games: GObby! and BoxDash. \
        Beware of where you jump in GObby!, or else you will fall and plummet to your demise. \
        Beware of where you land in BoxDash, the lava will set you on fire and meet your demise.",
        keywords: ["Roblox", "game", "GObby!", "BoxDash."],
        techStack: ["Roblox Studio", "Lua"],
        github: "https://github.com/CS460GraphBox/GraphBox"
    },
    {
        id: 6,
        image: "../../../public/Projects/graphbox.png",
        title: "GraphBox",
        description: "A Roblox game that consists of 2 custom games: GObby! and BoxDash. \
        Beware of where you jump in GObby!, or else you will fall and plummet to your demise. \
        Beware of where you land in BoxDash, the lava will set you on fire and meet your demise.",
        keywords: ["Roblox", "game", "GObby!", "BoxDash."],
        techStack: ["Roblox Studio", "Lua"],
        github: "https://github.com/CS460GraphBox/GraphBox"
    },
    
]

const ProjectList = () => {
    return (
        <div className="projectList">
            <h1 className="projectListTitle">Projects</h1>
            <div className="projectListContainer">
                { projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;