import React, { useState } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar.jsx";
import Intro from "../Intro/Intro.jsx";
import About from "../About/About.jsx";
import Experience from "../Experience/Experience.jsx";
import ProjectList from "../Projects/ProjectList.jsx";

const App = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <About />
            <Experience />  
            <ProjectList />
        </div>
    );
}

export default App
