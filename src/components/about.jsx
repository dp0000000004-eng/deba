import React from "react"
import ReactDOM from "react-dom/client"
import me from "../assets/deba.jpeg"

const About = () => {

    const one = <p>
        Diploma Computer Engineering student focused on web development,
        Python, and problem solving. I enjoy turning ideas into practical projects
        and understanding how software works under the hood.
    </p>

    const two = <p>
        Right now, I am investing most of my time in stronger fundamentals:
        writing cleaner code,  and building projects
        that feel simple to use.
    </p>

    const techStack = [
        "Python",
        "JavaScript",
        "Django",
        "React.js",
    ]

    return(
        <section className="about-section" id="about">
            <div className="about-copy">
                <h1 className="s-label"><span>/</span> about me</h1>
                <h2 className="s-title">Learning by building...</h2>
                {one}
                {two}
                <div className="about-tech-wrap">
                    {"Technologies I currently work with: "}
                    <ul className="about-tech-list">
                        {techStack.map((skills, i) => (<li key={i} >{skills}</li>))}
                    </ul>
                </div>
            </div>
            <div className="about-photo-wrap">
                <img className="about-photo" alt="Debasish Pradhan" src={me} />
            </div>
        </section>
    )
}

export default About