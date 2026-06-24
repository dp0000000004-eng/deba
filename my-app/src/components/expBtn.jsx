import React from "react"
import ReactDOM from "react-dom/client"


export function WebDev() {
    const webExpList = [
        "Designed and built a personal portfolio with a clean UI and responsive layout.",
        "Making Mini game because i am a game lover.",
        "Never tired when wrote bunch lines of .js script",
        "Focused on writing cleaner, more readable code and shipping small improvements weekly."
    ]

    let emptyStr = ""
    return webExpList.map((para, i) => (<li key={i}>{para} </li>))

}

export function PyDev() {
    const pyExpList = [
        "Autonating tasks using Python",
        "Building Database of games.",
        "Built Some CLI apps.",
        "Enjoy When code with .py's."
    ]

    return pyExpList.map((para, i) => (<li key={i}>{para}</li>))
}

