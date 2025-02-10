import "./CarteProjet.scss";
import ImageOp from "../utils/imageOp";


const CarteProjet = ({ titre, coverPhoto, lien, technologies, description}) => {
  return (
    <div className="carteProjet">
      <div className="coteTxt">
        <div className="margeIn">
            <div className="accentRectangle"></div>
            <h2> {titre} </h2>
            <h3> {technologies} </h3>
            <p> {description} </p>
        </div>
        </div>
      <div className="coteImg">
        <a href={lien} target="_blank" rel="noopener noreferrer">
          <ImageOp
            width={480}
            height={719}
            src={coverPhoto}
            alt="HeadShot pro Antoine Chartier"
          />
        </a>
      </div>
    </div>
  );
};

export default CarteProjet;
