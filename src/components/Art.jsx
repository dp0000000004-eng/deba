import React from "react"
import AboutArt from "./AboutArt"
import ReactDOM from "react-dom/client"


const Art = () => {
    return (
        <section className="experience panel" is="hobby">
            <div className="experience-head">
                <h2 className="section-headline"><span>/</span>hobby </h2>
            </div>
            <div className="experience-content">
                <h3 className="experience-role"></h3>
                    <AboutArt />
            </div>
        </section>
    )
}

export default Art