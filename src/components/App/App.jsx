import React, { useState } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar.jsx";
import Intro from "../Intro/Intro.jsx";
import About from "../About/About.jsx";
import ExperienceList from "../Experience/ExperienceList.jsx";
import ProjectList from "../Projects/ProjectList.jsx";

const App = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <About />
            <ExperienceList />  
            <ProjectList />
        </div>
    );
}

export default App
