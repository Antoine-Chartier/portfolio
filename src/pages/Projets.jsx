import CarteProjet from "../components/CarteProjet";
import Logo from "../components/Logo";
import "./Projets.scss";
import groovyBeats from "../assets/Logo_groovy.svg?optimized";


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
              <CarteProjet titre="Groovy Beats" coverPhoto={groovyBeats} lien="https://groovebeats.netlify.app/" technologies="Framer Motion, vite, firestore" description="À travers ce projet final scolaire j'ai acquis plusieurs nouvelles compétences : base de données NoSQL Firestore, Google Auth, gestion de projet, travail d'équipe" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
