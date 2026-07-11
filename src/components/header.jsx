import React from "react"
import ReactDOM from "react-dom/client"
import NavIcons from "./navIcons"
import NavLinks from "./navLinks"

const HeadSection = () => {
    return (
        <header>
            <div className="brand">Debasish Pradhan</div>
            <NavLinks />
            <NavIcons />
        </header>
    )
}

export default HeadSection