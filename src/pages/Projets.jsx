import CarteProjet from "../components/CarteProjet";
import Logo from "../components/Logo";
import "./Projets.scss";

const Projets = () => {
  return (
    <div className="pageWrap">
      <div className="clamp">
        <div className="centered">
            <Logo texte={"Projets"} link={"/projets"} />
            <div className="sous-titre">
              <p>Projets en lumières</p>
            </div>
            <div>
              <CarteProjet/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
