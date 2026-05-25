import { useRef, useState } from 'react'
import './Journey.css'

// Article data — update with real blog post titles, dates and links when available
const articles = [
    {
        date: "May 2026",
        title: "My First Steps in React",
        excerpt: "Starting out with React felt overwhelming, but once I understood components and props, everything clicked.",
        image: "/images/React-article.jpg",
        link: "#"
    },
    {
        date: "April 2026",
        title: "What I Learned Building a Weather App",
        excerpt: "Working with APIs for the first time taught me a lot about async JavaScript and handling data.",
        image: "/images/Weather-app-article.jpg",
        link: "#"
    },
    {
        date: "March 2026",
        title: "To JS or to TS?",
        excerpt: "JavaScript is great for getting started quickly, but TypeScript's type safety has been a game-changer for my confidence and code quality.",
        image: "/images/Javascript-article.jpg",
        link: "#"
    },
    {
        date: "February 2026",
        title: "Why I Love CSS",
        excerpt: "There's something deeply satisfying about making a design come to life.",
        image: "/images/CSS-article.jpg",
        link: "#"
    },
    {
        date: "January 2026",
        title: "HTML is the Foundation",
        excerpt: "I have known the basics for a long time, but now I understand how to use semantic tags to improve accessibility and SEO.",
        image: "/images/HTML-article.jpg",
        link: "#"
    }
]

// Journey section — horizontally scrollable article cards with click-and-drag support
const Journey = () => {
    // Refs and state for click-and-drag horizontal scrolling
    const scrollRef = useRef(null)
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    // Records the starting position when the mouse button is pressed
    const handleMouseDown = (e) => {
        setIsDown(true)
        scrollRef.current.style.cursor = 'grabbing'
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    // Resets drag state when the cursor leaves the grid
    const handleMouseLeave = () => {
        setIsDown(false)
        scrollRef.current.style.cursor = 'grab'
    }

    // Resets drag state when the mouse button is released
    const handleMouseUp = () => {
        setIsDown(false)
        scrollRef.current.style.cursor = 'grab'
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
        <section className="journey-section">
            <h2>My Journey</h2>
            <div
                className="journey-grid"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {/* Maps over the articles array to render each blog post card */}
                {articles.map((article, index) => (
                    <article key={index} className="journey-card">
                        <img src={article.image} alt={article.title} />
                        <div className="journey-info">
                            <span className="journey-date">{article.date}</span>
                            <h3>{article.title}</h3>
                            <p>{article.excerpt}</p>
                            <a href={article.link} className="journey-link">Read Article</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Journey