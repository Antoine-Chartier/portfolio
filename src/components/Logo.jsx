import "./Logo.scss";

const Logo = ({menuIsOpen, setActive, active}) => {
  console.log(menuIsOpen);
  return (
    <div className={`wrapLogo ${menuIsOpen ? 'menu-open' : ''}`}>
      <div className="carreNom" >
        <div className="carreCouleur" onClick={() => setActive(!menuIsOpen)}></div>
        <div className="nom">
          Antoine
        </div>
      </div>
    </div>
  );
};

export default Logo;
