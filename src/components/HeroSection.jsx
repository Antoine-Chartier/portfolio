import "./HeroSection.scss";
import headShot from "../assets/headShotPro.png";

const HeroSection = () => {
  return (
    <div>
      <div className="heroBox">
        <div className="photoBox">
          <div className="photo">
            <img src={headShot} alt="HeadShot pro Antoine Chartier" />
          </div>
          <div>Antoine<br/>Chartier</div>
        </div>
        <div className="ctaBox">
          <div className="btnCV">cv</div>
          <div className="btnProjets">projets</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
