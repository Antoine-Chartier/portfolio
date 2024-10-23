import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = ({menuIsOpen, setActive}) => {
  return (
    <div className={`wrapLogo ${menuIsOpen && 'menu-open'}`}>
      <div className="carreNom" >
        <div className="carreCouleur" onClick={() => setActive(!menuIsOpen)}></div>
          <div className="nom">
            <Link to={"/"} onClick={() => setActive(false)}>Antoine</Link>
        </div>
        <span className="DeveloppeurWeb">/ DEVELOPPEUR WEB</span>
      </div>
      <span className="DeveloppeurWeb">DEVELOPPEUR WEB</span>
    </div>
  );
};

export default Logo;
