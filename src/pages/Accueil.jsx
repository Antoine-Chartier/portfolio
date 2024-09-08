import "./Accueil.scss";
import HeroSection from "../components/HeroSection";
import BtnDarkMode from "../components/BtnDarkMode";

function Accueil() {
  return (
    <div>
      <HeroSection />
      <BtnDarkMode />
      <a href="/uneAutrePAge">UneAutrePage</a>
    </div>
  );
}

export default Accueil;
