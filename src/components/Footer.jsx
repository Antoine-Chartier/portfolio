import "./Footer.scss";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="coordonnees">
        <div>
          <h3>E-mail</h3>
          <p><a href="mailto:antoinechartier.ca@gmail.com?subject=Offre%20d'emploi&body=Bonjour%20Antoine,">antoinechartier.ca@gmail.com</a></p>
        </div>
        <div>
          <h3>Réseaux</h3>
          <div className="icones">
            <CiLinkedin className="icone" />
            <FiGithub className="icone" />
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
