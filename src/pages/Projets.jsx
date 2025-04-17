import CarteProjet from "../components/CarteProjet";
import Logo from "../components/Logo";
import "./Projets.scss";
import groovyBeats from "../assets/Logo_groovy.svg?optimized";
import miniEntrepotsCouleur from "../assets/Logo_miniEntrepot.png?optimized";
import miniEntrepotsReversed from "../assets/Logo_miniEntrepotReversed.png?optimized";
import portfolio from "../assets/Logo_vieuxPortfolio.png?optimized";

import { useTheme } from "../components/ThemeContext";

const Projets = () => {
  const theme  = useTheme().theme;

  const radialRed = {
    background: theme === "light" ? 
    "radial-gradient( circle, rgba(148, 27, 12, 1) 0%, rgba(254, 238, 201, 1) 49%,rgba(148, 27, 12, 1) 89%)" 
    : 
    "radial-gradient(circle, rgba(148,27,12,1) 25%, rgba(0,0,0,1) 100%)"
  };
  const linearBlue = {
    background: theme === "light" ?
    "radial-gradient(circle, rgba(119,136,148,1) 17%, rgba(175,191,204,1) 70%)" 
    :
    "radial-gradient(circle, rgba(116,157,190,1) 17%, rgba(119,136,148,1) 95%)" 
  };
  const linearWhite = {
    background: theme === "light" ?
    "radial-gradient(circle, rgba(116,157,190,1) 17%, rgba(119,136,148,1) 95%)" 
    :
    "radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(47, 84, 94, 1) 100%)" 
  };


  return (
    <div className="pageWrap">
      <div className="clamp">
        <div className="centered">
            <Logo texte={"Projets"} link={"/projets"} />
            <div className="sous-titre">
              <p>Projets en lumières</p>
            </div>
            <div>
              <CarteProjet titre="Mini-entrepôts" coverPhoto={theme === "light" ? miniEntrepotsCouleur : miniEntrepotsReversed} bgColor={linearBlue} lien="https://test-ssg-testing.netlify.app/" technologies="GSAP, Flat file CMS, Figma, Tailwind css" description="Durant mon stage chez Rouge Marketing, j'ai développé des compétences en développement web, notamment à travers l'utilisation de Statamic/Laravel (CMS), GSAP (animations) et Tailwind CSS (styling)" />
              <CarteProjet titre="Groovy Beats" coverPhoto={groovyBeats} bgColor={radialRed} lien="https://groovebeats.netlify.app/" technologies="Framer Motion, React Vite, Firestore" description="À travers ce projet final scolaire j'ai acquis plusieurs nouvelles compétences : base de données NoSQL Firestore, Google Auth, gestion de projet, travail d'équipe" />
              <CarteProjet titre="Portfolio" coverPhoto={portfolio} bgColor={linearWhite} lien="https://antoinechartier.com/" technologies="Template, hosting" description="Mon premier portfolio web, créé à partir d'un gabarit et personnalisé pour présenter mes compétences en multimédia/web, hébergé sur antoinechartier.com via GitHub Pages." />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
