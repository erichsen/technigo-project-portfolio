import { useRef, useState } from "react"
import data from "./data.json"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Tech from "./components/Tech"
import Journey from "./components/Journey"
import Contact from "./components/Contact"

export const App = () => {
  // Refs and state for click-and-drag horizontal scrolling on the projects grid
  const scrollRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Records the starting position when the mouse button is pressed
  const handleMouseDown = (e) => {
    setIsDown(true)
    scrollRef.current.style.cursor = "grabbing"
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  // Resets drag state when the cursor leaves the grid
  const handleMouseLeave = () => {
    setIsDown(false)
    scrollRef.current.style.cursor = "grab"
  }

  // Resets drag state when the mouse button is released
  const handleMouseUp = () => {
    setIsDown(false)
    scrollRef.current.style.cursor = "grab"
  }

  // Scrolls the grid based on how far the mouse has moved since pressing down
  const handleMouseMove = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="app">
      <Hero />
      <Skills />

      {/* Projects section — maps over data.json and renders a Project card for each entry */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div
          className="projects-grid"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {data.projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </section>

      <Tech />
      <Journey />
      <Contact />
    </div>
  )
}