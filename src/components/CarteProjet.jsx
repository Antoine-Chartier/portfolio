import "./CarteProjet.scss";
import ImageOp from "../utils/imageOp";
import { motion } from "motion/react"
import { useRef } from "react";


const CarteProjet = ({
  titre,
  coverPhoto,
  lien,
  technologies,
  description,
  bgColor = { background: "#8eaec7" },
}) => {

  const scrollRef = useRef(null)

  return (
    <motion.div ref={scrollRef} initial={{ x:-50 }} whileInView={{ x:0 }} viewport={{ margin: "-20px" }} className="carteProjet">
      <div className="coteTxt">
        <div className="margeIn">
          <div className="accentRectangle"></div>
          <h2> {titre} </h2>
          <h3> {technologies} </h3>
          <motion.p> {description} </motion.p>
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
