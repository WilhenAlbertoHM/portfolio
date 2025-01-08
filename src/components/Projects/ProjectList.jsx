import React from "react";
import Project from "./Project.jsx";
import "./Project.css";

const projects = [
    {
        id: 1,
        image: "Projects/faithful.png",
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
        techStack: ["Python", "Llama 3.2", "LangChain", "Streamlit", "Pinecone"],
        github: "https://github.com/WilhenAlbertoHM/VideoAskRAG"
    },
    {
        id: 3,
        image: "Projects/sloanresearch.png",
        title: "Sentiment Analysis With Gaze",
        description: "RNN and CNN models using a large dataset of 6,000 videos to predict personality traits, \
        from facial expressions based on the OCEAN personality test.",
        keywords: ["RNN", "CNN", "6,000", "videos", "predict", "personality", "traits,", "facial", "expressions", "OCEAN", "personality", "test."],
        techStack: ["Python", "TensorFlow", "Keras", "scikit-learn"],
        github: "https://github.com/WilhenAlbertoHM/Sentiment-Analysis-With-Gaze/"
    },
    {
        id: 4,
        image: "Projects/deep-learning-projects.png",
        title: "Deep Learning Projects",
        description: "A collection of deep learning projects made with TensorFlow. \
        Projects include a CNN model predicting pneumonia, COVID-19, or no illness from X-ray images, \
        a classification model predicting heart failure patient survival based on medical records, \
        a regression model predicting life expectancy by country based on various socio-economic factors,\
        and many more.",
        keywords: ["collection", "deep", "learning", "projects", "TensorFlow", "CNN", 
            "classification", "regression"],
        techStack: ["Python", "TensorFlow", "Keras", "scikit-learn"],
        github: "https://github.com/CS460GraphBox/GraphBox"
    },
    {
        id: 5,
        image: "Projects/labormigration.png",
        title: "Latino Labor Migration",
        description: "A data visualization of the Latino labor migration in Massachusetts from 1990 to 2022, \
        with the purpose of learning more about the role Latinos have played in shaping the state's diverse identity.",
        keywords: ["data", "visualization", "Latino", "labor", "migration", "Massachusetts", "1990", "2022,"],
        techStack: ["JavaScript", "Vega-Lite", "GSAP", "Plotly"],
        github: "https://github.com/WilhenAlbertoHM/Labor-Migration-Vis/"
    },
    {
        id: 6,
        image: "Projects/cs460.png",
        title: "Graphics Projects",
        description: "A collection of graphics projects made in CS460. \
        Projects include creating 3D scenes using cubes and torus knots, loading 3D-printed models to render in WebGL, \
        and many more.",
        keywords: ["collection", "graphics", "projects", "CS460", "3D", "scenes", "cubes", "torus", "knots,", "3D-printed", "models", "WebGL,"],
        techStack: ["JavaScript", "WebGL", "D3.js", "Three.js", "XTK.js", "Blender"],
        github: "https://github.com/WilhenAlbertoHM/cs460student/"
    }
]

const ProjectList = () => {
    return (
        <div className="projectList">
            <h1 className="projectListTitle">
                Projects <img className="projectListTitleIcon" src="https://www.svgrepo.com/show/262132/light-bulb.svg" />
            </h1>
            <div className="projectListContainer">
                { projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
            <p className="moreProjects">
                More projects can be found <a href="https://github.com/WilhenAlbertoHM?tab=repositories" 
                                              style={{color: "var(--orange)", fontWeight: "bold", textUnderlineOffset: "5px"}}>here
                                           </a>
            </p>
        </div>
    );
};

export default ProjectList;