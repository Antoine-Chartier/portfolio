import "./Logo.scss";

const Logo = () => {
  return (
    <div>
      <div className="carreNom">
        <div className="carreCouleur"></div>
        <div>
          <span className="nom">Antoine Chartier</span>
          {/* <span className="titre"> / DÉVELOPPEUR WEB</span> */}
        </div>
      </div>
    </div>
  );
};

export default Logo;
