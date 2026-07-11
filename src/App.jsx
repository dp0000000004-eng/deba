import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeadSection from "./components/header.jsx"
import HeroSection from "./components/hero.jsx"
import About from "./components/about.jsx"
import Experience from "./components/experience.jsx"
import Skill from "./components/skill.jsx"
import Art from "./components/Art.jsx"
import Learning from "./components/LearningSpace.jsx"
import FooterEl from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <HeadSection />
      <main className="page">
        
        <HeroSection />
        <About />
        <Experience />
        <Skill />
        <Art />
        <Learning />
        <FooterEl />
      </main>
    </div>
  )
}

export default App
