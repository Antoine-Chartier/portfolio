import Logo from "../components/Logo";
import "./Projets.scss";

const Projets = () => {
  return (
    <div className="clamp centered">
      <Logo texte={"Projets"} link={"/projets"}/>
    </div>
  );
};

export default Projets;
