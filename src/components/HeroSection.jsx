import "./HeroSection.scss";
import headShot from "../assets/headShotPro.webp";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="boxHero1">
        <div className="boxPhoto">
          <div className="photo">
            <img src={headShot} alt="HeadShot pro Antoine Chartier" />
          </div>
          <div className="nom">
            Antoine
            <br />
            Chartier
          </div>
        </div>
        <div className="ligne"></div>
        <div className="ligneDeveloppeurWeb">DÉVELOPPEUR WEB</div>
        <div className="boxCTA">
          <div className="btnCV">
            <button>cv</button>
          </div>
          <div className="btnProjets">
            <button>projets</button>
          </div>
        </div>
        <div className="boxIcones">
          <div className="icones">
            <div className="icone">
              <CiLinkedin className="icone" />
            </div>
            <div className="icone">
              <FiGithub className="icone" />
            </div>
          </div>
        </div>
      </div>
      <div className="boxHero2">
        <div>
          <h1>Hello</h1>
          <h2>Qui je suis et ce que je fais</h2>
          <div className="boxCTA2">
            <div className="btnCV">
              <button>cv</button>
            </div>
            <div className="btnProjets">
              <button>projets</button>
            </div>
          </div>
          <p>
            Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur
            « Modifier Texte » ou double-cliquez ici pour ajouter votre contenu
            et personnaliser les polices.
          </p>
          <p>
            Relatez ici votre parcours et présentez votre activité à vos
            visiteurs.
          </p>
        </div>
      </div>
      <div className="backSplashCouleur"></div>
    </div>
  );
};

export default HeroSection;
