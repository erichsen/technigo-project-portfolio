import './Skills.css'

// Skills section — four columns showing coding languages, tools, upcoming skills and other strengths
const Skills = () => {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">

                <div className="skill-column">
                    <h3>Code</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                    </ul>
                </div>

                <div className="skill-column">
                    <h3>Toolbox</h3>
                    <ul>
                        <li>VS Code</li>
                        <li>Git & GitHub</li>
                        <li>Figma</li>
                    </ul>
                </div>

                <div className="skill-column">
                    <h3>Upcoming</h3>
                    <ul>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div className="skill-column">
                    <h3>More</h3>
                    <ul>
                        <li>Problem solving</li>
                        <li>Teamwork</li>
                        <li>SEO</li>
                        <li>Marketing</li>
                        <li>Webmaster</li>
                        <li>Analytics</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Skills