import { Link } from "react-router";
import "./Logo.scss";

const Logo = ({isNav, menuIsOpen, setActive, texte, sousTexte, link}) => {
  return (
    <div className={`wrapLogo ${(menuIsOpen && isNav) && 'menu-open'}`}>
      <div className="carreNom" >
        {isNav && <div className="carreCouleur" onClick={() => setActive(!menuIsOpen)}></div>}
        {!isNav && <div className="carreCouleur"></div>}
          <div className="nom">
            <Link to={link} onClick={() => isNav && setActive(false)}>{texte}</Link>
        </div>
        { sousTexte && <span className="DeveloppeurWeb">/ {sousTexte}</span>}
      </div>
      { sousTexte && <span className="DeveloppeurWeb">{sousTexte}</span>}
    </div>
  );
};

export default Logo;
