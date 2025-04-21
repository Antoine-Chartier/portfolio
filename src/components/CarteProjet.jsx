import "./CarteProjet.scss";
import ImageOp from "../utils/imageOp";
import { motion } from "motion/react"


const CarteProjet = ({
  titre,
  coverPhoto,
  lien,
  technologies,
  description,
  bgColor = { background: "#8eaec7" },
}) => {
  return (
    <motion.div initial={{ scale: 0.9, x:-50 }} whileInView={{ scale: 1, x:0 }} className="carteProjet">
      <div className="coteTxt">
        <div className="margeIn">
          <div className="accentRectangle"></div>
          <h2> {titre} </h2>
          <h3> {technologies} </h3>
          <p> {description} </p>
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.1 }} className="coteImg" style={bgColor}>
        <a href={lien} target="_blank" rel="noopener noreferrer">
          <ImageOp
            width={480}
            height={719}
            src={coverPhoto}
            alt="Logo Groovy Beats"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default CarteProjet;
