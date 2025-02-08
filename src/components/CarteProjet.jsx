import "./CarteProjet.scss";
import headShot from "../assets/headShotPro.webp?optimized";
import groovyBeats from "../assets/Logo_groovy.svg?optimized";
import ImageOp from "../utils/imageOp";


const CarteProjet = ({ titre, technologies, description, coverPhoto }) => {
  return (
    <div className="carteProjet">
      <div className="coteTxt">
        <div className="margeIn">
            <div className="accentRectangle"></div>
            <h2>Groovy Beats</h2>
            <h3>Framer Motion, vite, firestore</h3>
            <p>À travers ce projet j'ai acquis plusieurs nouvelles compétences : base de données NoSQL Firestore, Google Auth, gestion de projet, travail d'équipe.</p>
        </div>
        </div>
      <div className="coteImg">
        <ImageOp
          width={480}
          height={719}
          src={groovyBeats}
          alt="HeadShot pro Antoine Chartier"
        />
      </div>
    </div>
  );
};

export default CarteProjet;
