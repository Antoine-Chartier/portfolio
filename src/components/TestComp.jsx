import { useState } from "react";
import "./TestComp.scss";
import { motion, AnimatePresence } from "framer-motion";

const TestComp = () => {
  const [texte, setTexte] = useState("default");

  const handleClick = (action) => {
    console.log("action", action);
    if (action === "add") {
      setTexte((prevState) => prevState + " un texte");
    }
    if (action === "supprimer") {
      setTexte((prevState) => prevState.slice(0, -9));
    }
  };

  return (
    <>
      <button onClick={() => handleClick("add")}>Ajoute texte</button>
      <button onClick={() => handleClick("supprimer")}>Enlever le texte</button>
      <motion.div layout className="laBoiteTexte">
          <motion.div layout>{texte}ffff</motion.div>
      </motion.div>
    </>
  );
};

export default TestComp;
