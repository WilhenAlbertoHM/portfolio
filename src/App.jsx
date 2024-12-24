import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import About from "./components/About/About.jsx";
import ExperienceList from "./components/Experience/ExperienceList.jsx";
import ProjectList from "./components/Projects/ProjectList.jsx";
import PictureList from "./components/Gallery/PictureList.jsx";
import TechStackList from "./components/TechStack/TechStackList.jsx";

const App = () => {
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
