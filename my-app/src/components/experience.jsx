import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import {WebDev, PyDev} from "./expBtn"

const Experience = () => {

    const[active, setActive] = useState("web")

    return (
    <section className="experience panel" id="experience">
        <div className="experience-head">
            <h2 className="section-headline"><span>/</span> experience</h2>
        </div>
        <div className="experience-layout">
            <aside className="experience-tabs" id="button-Sft">
                <button className={`exp-tab ${active === "web" ? "active" : ""}`} onClick={() => setActive("web")} type="button" id="web-dev">Web Development</button>
                <button className={`exp-tab ${active === "py" ? "active" : ""}`} onClick={() => setActive("py")} type="button" id="py-dev">Python Practice</button>
            </aside>
        <div className="experience-content">
            <h3 className="experience-role">Student Developer @ Self-driven Projects</h3>
            <p className="experience-date">2025 - Present</p>
            <ul className="experience-points" id="experience-points">
                {active === "web" ? <WebDev /> : <PyDev />}
            </ul>
        </div>
        </div>
    </section>
    )

    
}

export default Experience