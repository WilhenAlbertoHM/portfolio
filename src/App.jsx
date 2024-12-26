import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import About from "./components/About/About.jsx";
import ExperienceList from "./components/Experience/ExperienceList.jsx";
import ProjectList from "./components/Projects/ProjectList.jsx";
import PictureList from "./components/Gallery/PictureList.jsx";
import TechStackList from "./components/TechStack/TechStackList.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";


const App = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".experienceList, .projectList, .techStackList, .pictureList").forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    markers: false
                }
            });
        });
    }, []);

    return (
        <div>
            <NavBar />
            <Intro />
            <About />
            <ExperienceList />  
            <ProjectList />
            <TechStackList />
            <PictureList />
        </div>
    );
}

export default App
