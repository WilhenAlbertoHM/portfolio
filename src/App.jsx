import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import About from "./components/About/About.jsx";
import ExperienceList from "./components/Experience/ExperienceList.jsx";
import ProjectList from "./components/Projects/ProjectList.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import TechStackList from "./components/TechStack/TechStackList.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";


const App = () => {
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.utils.toArray(".about, .experienceList, .projectList, .techStackList, .gallery").forEach((section) => {
    //         gsap.from(section, {
    //             opacity: 0,
    //             y: 50,
    //             duration: 0.5,
    //             scrollTrigger: {
    //                 trigger: section,
    //                 start: "top 60%",
    //                 end: "bottom 20%",
    //                 toggleActions: "play none none reverse",
    //                 markers: false
    //             }
    //         })
    //     });
    // }, []);

    return (
        <div>
            <NavBar />
            <Intro />
            <About />
            <ExperienceList />  
            <ProjectList />
            <TechStackList />
            <Gallery />
        </div>
    );
}

export default App
