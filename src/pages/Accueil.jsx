import "./Accueil.scss";
import HeroSection from "../components/HeroSection";
import TestComp from "../components/TestComp";
// import BtnDarkMode from "../components/BtnDarkMode";

function Accueil() {
  return (
    <div>
      {/* <TestComp /> */}
      <HeroSection />
      <a href="/uneAutrePAge">UneAutrePage</a>
    </div>
  );
}

export default Accueil;
