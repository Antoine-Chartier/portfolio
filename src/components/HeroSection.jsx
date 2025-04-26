import "./HeroSection.scss";
// Import requesting specific widths (e.g., 200px, 400px, and the original 480px)
import headShotData from "../assets/headShotPro.webp?optimized&w=200;400;480";
import ImageOp from "../utils/imageOp";

import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router";

const HeroSection = () => {

      // --- Calculate the 'sizes' attribute ---
    // This tells the browser how wide the image will be at different viewport widths.
    // You MUST adjust these values based on your actual CSS/layout.
    // Example: (max-width: 899px) 53vw, 300px
    // Means: Below 900px viewport, image is 53% of viewport width.
    //        At 900px and above, image is 300px wide.
    const imageSizes = "(max-width: 899px) 53vw, 300px"; // <-- VERIFY & ADJUST THIS!

  return (
    <div className="heroSection">
      <div className="boxHero1">
        <div className="boxPhoto">
          <div className="photo">
          <ImageOp
                            srcData={headShotData}
                            alt="HeadShot pro Antoine Chartier"
                            sizes={imageSizes} // Pass the calculated sizes
                            loading="eager"     // Important for LCP
                            fetchpriority="high" // Important for LCP
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
