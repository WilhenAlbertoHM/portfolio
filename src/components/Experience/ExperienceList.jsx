import React from "react";
import "./Experience.css";
import Experience from "./Experience.jsx";

const experiences = [
    {
        id: 1,
        logo: "../../../Experience/moma.png",
        title: "ML Engineer/Computational Chemistry Intern",
        company: "MOMA Therapeutics",
        duration: "June 2024 - August 2024",
        points: [
            "Developed a model to predict cysteine ligandability and chemical transferability across protein targets for hit finding with \
            70% accuracy, matching the performance of the state-of-the-art DrugMap model. Work included creating a data \
            modeling workflow and training a GNN using PyTorch on AWS EC2, enhancing early-stage covalent drug discovery", 

            "Engineered a classification system to assess if LLMs outperform traditional neural networks in predicting half-life and \
            IC50 from SMILES strings. Achieved promising results with Claude 3 Opus via AWS Bedrock and LangChain, leading to \
            further optimization and application to additional endpoints",
            
            "Implemented a feedback UI using Retool and SQL to customize a generalized chatbot into a company-specific solution, \
            enabling scientists to upload and prioritize data for more relevant information retrieval", 
            
            "Conducted regression testing for a prototype AI chatbot, leveraging a custom dataset compiled from LLM/RAG user \
            interviews and cross-functional collaboration with medicinal chemists, structural biologists, and engineers"
        ]
    },
    {
        id: 2,
        logo: "../../../public/Experience/ids.jpg",
        title: "ML Research Fellow",
        company: "Institute of Diversity Sciences | UMass Boston",
        duration: "June 2023 - May 2024",
        points: [
            "Built RNN and CNN models using a large dataset of 6,000 videos to predict personality traits from facial expressions \
            based on the OCEAN personality test, reducing mean-squared error by 30% for realistic VR character creation",
            
            "Presented findings to 500+ attendees at the MassURC hosted by UMass Amherst, and CSM 8th Annual Student Success \
            Showcase hosted by UMass Boston, Oracle, and Sloan Foundation, earning the Best Poster Design award",
            
            "Co-authored 'An Iterative Approach to Build a Semantic Dataset for Facial Expression of Personality,' which was \
            submitted to the 17th Annual ACM SIGGRAPH Conference Motion, Interaction, and Games (MIG)"
        ]
    }
]

const ExperienceList = () => {
    return (
        <div className="experienceList">
            <h1 className="experienceListTitle">Work Experience</h1>
            <div className="experienceListContainer">
                { experiences.map((experience) => (
                    <Experience key={experience.id} {...experience} />
                ))}
            </div>
        </div>
    );            
}

export default ExperienceList;

