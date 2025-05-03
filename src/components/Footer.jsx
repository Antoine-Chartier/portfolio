import "./Footer.scss";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="coordonnees">
        <div>
          <h3>Email</h3>
          <p className="contact"><Link to={"/contact"}>M'écrire</Link></p>
        </div>
        <div>
          <h3>Réseaux</h3>
          <div className="icones">
            <a
              href="https://linkedin.com/in/antoinechartier/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="icone" />
            </a>
            <a
              href="https://github.com/Antoine-Chartier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="icone" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {currentYear} Antoine Chartier</p>
      </div>
    </footer>
  );
};

export default Footer;
