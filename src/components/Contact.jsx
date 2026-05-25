// Icons from react-icons/fa — only the platforms actually used are imported
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

// Contact section — portrait, name, contact details and social links
const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-image">
                <img src="/images/mikael-erichsen-removebg.png" alt="Mikael Erichsén" />
            </div>
            <div className="contact-info">
                <h2>Let's talk</h2>
                <div className="contact-details">
                    <p>Mikael Erichsén</p>
                    {/* tel: and mailto: links allow mobile devices to dial/open mail directly */}
                    <p><a href="tel:+46">+46 wouldntyouliketoknow</a></p>
                    <p><a href="mailto:mikael.erichsen@gmail.com">mikael.erichsen@gmail.com</a></p>
                </div>
                <div className="contact-social">
                    <a href="https://www.linkedin.com/in/mikael-erichsen/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/erichsen" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact