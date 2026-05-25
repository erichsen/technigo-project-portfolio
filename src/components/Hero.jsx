// Icons from react-icons/fa — only the platforms actually used are imported
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Hero.css'

// Hero section — introduction with name, title, tagline, social links and portrait
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <h2>I am Mikael Erichsén</h2>
                <h1>Frontend<br />Developer</h1>
                <p>Passionate frontend developer with a keen eye for detail and a love for creating intuitive user experiences. I'm always looking for new challenges to grow as a developer.</p>

                {/* Social links — open in a new tab with rel="noreferrer" for security */}
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/mikael-erichsen/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/erichsen" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
            </div>

            {/* Portrait with decorative ring — ring is created via ::before in Hero.css */}
            <div className="hero-image">
                <img src="/images/mikael-erichsen-removebg.png" alt="Mikael Erichsén" />
            </div>
        </section>
    )
}

export default Hero