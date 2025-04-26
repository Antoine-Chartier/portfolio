import "./HeroSection.scss";
import headShot from "../assets/headShotPro.webp?optimized";
import ImageOp from "../utils/imageOp";

import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="boxHero1">
        <div className="boxPhoto">
          <div className="photo">
            <ImageOp
              // width={140}
              // height={719}
              src={headShot}
              alt="HeadShot pro Antoine Chartier"
              priority={true}
            />
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
            <Link to={"/cv"}>
              <button>cv</button>
            </Link>
          </div>
          <div className="btnProjets">
            <Link to={"/projets"}>
              <button>projets</button>
            </Link>
          </div>
        </div>
        <div className="boxIcones">
          <div className="icones">
            <div className="icone">
              <a
                href="https://linkedin.com/in/antoinechartier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin className="icone" />
              </a>
            </div>
            <div className="icone">
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
      </div>
      <div className="backSplashCouleur"></div>

      <div className="boxHero2">
        <div>
          <h1>Hello</h1>
          <h2>Qui je suis et ce que je fais</h2>
          <div className="boxCTA2">
            <div className="btnCV">
              <Link to={"/cv"}>
                <button>cv</button>
              </Link>
            </div>
            <div className="btnProjets">
              <Link to={"/projets"}>
                <button>projets</button>
              </Link>
            </div>
          </div>
          <p className="pTestAfter">
            Je suis développeur web spécialisé en front-end.
          </p>
          <p>
            Diplômé d'un programme de trois ans en intégration multimédia au
            cégep. Je maîtrise divers logiciels et environnements de
            développement tels que React, WordPress et Adobe.
          </p>

          <p>
            Mon objectif est de contribuer à faire passer votre projet web de
            rêve à la réalité, simplement et efficacement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
