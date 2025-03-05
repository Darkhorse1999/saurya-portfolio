import React from "react";
import "./skill.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Ethical from "./Ethical";
import Os from "./Os";
const Skills = () => {       
    return(
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">

            <Frontend />

            <Backend />

            <Ethical />
            
            <Os />

            

        </div>

    </section>
     ) }
export default Skills;