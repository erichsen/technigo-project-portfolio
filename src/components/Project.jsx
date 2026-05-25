import './Project.css'

// Project card — receives a single project object as a prop from App.jsx
const Project = ({ project }) => {
    return (
        <article className="project">
            {/* Falls back to a placeholder if no image is provided in data.json */}
            <img
                src={project.image || "https://placehold.co/400x180"}
                alt={project.name}
            />
            <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                {/* Maps over the tags array to render each technology as a pill */}
                <div className="tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                {/* Links open in a new tab — rel="noreferrer" prevents the new page from accessing window.opener */}
                <div className="links">
                    <a href={project.netlify} target="_blank" rel="noreferrer" className="link-demo">Live demo</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="link-code">View code</a>
                </div>
            </div>
        </article>
    )
}

export default Project