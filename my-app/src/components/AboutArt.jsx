import React from "react"

function AboutArt() {

    const hobbyList = [
        "Build stronger real-world projects that solve practical student-level problems.",
        "Grow from beginner projects to internship-ready development work."
    ]

    return (
        <ul className="experience-points" id="experience-points-hobby">
        {hobbyList.map((para, i) => (<li key={i}>{para}</li>))}
        </ul>
    )

}

export default AboutArt