import { useEffect, useState } from "react";
import "./navStyle.scss";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Nav() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="topNav">
        <div className="navWrap ">
          <div>
            <div className="carreNom">
              <div className="carreCouleur"></div>
              <div className="nom">Antoine Chartier</div>
            </div>
            <div className="titre">DÉVELOPPEUR WEB</div>
          </div>
          <div className="relative">
            <motion.div
              className="bigPopOut"
              layout
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              initial={false}
              animate={active ? "open" : "closed"}
              variants={{
                open: {
                  width: "calc(100vw - 2 * clamp(6px, 2vw, 200px))",
                  height: "94vh",
                },
                closed: {
                  width: "60px",
                  height: "60px",
                  transition: { when: "afterChildren" },
                },
              }}
            >
              <AnimatedHamburgerButton active={active} setActive={setActive} />
              <div className="bigMenuOverlay" data-isopen={active}>
                <AnimatedBigMenu active={active} />
              </div>
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

const AnimatedBigMenu = ({ active }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const antoine = {
    closed: {
      y: -60,
      opacity: 0,
    },
    open: {
      transition: { delay: 0.85 },
      y: 0,
      opacity: 1,
    },
  };
  const rejoindre = {
    closed: {
      y: 120,
      opacity: 0,
    },
    open: {
      transition: { delay: 0.85 },
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    closed: {
      transition: {
        staggerChildren: 0.015,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0 },
  };

  const item = {
    closed: { opacity: 0, transform: "scale(0.5)", filter: "blur(10px)" },
    open: { opacity: 1, transform: "scale(1)", filter: "blur(0px)" },
  };

  return (
    <div className="bigMenuOverlayWrap">
      <div
        style={{ width: "fit-content", height: "100%" }}
        className="antoineColonne"
      >
        <motion.div variants={antoine}>
          <div className="carreNom">
            <div className="carreCouleur"></div>
            <div className="nom">Antoine Chartier</div>
          </div>
          <div className="titre">DÉVELOPPEUR WEB</div>
        </motion.div>

        <motion.div className="bigMenu">
          <AnimatePresence>
            {!isDesktop && (
              <motion.div
                variants={container}
                exit="exit"
                animate={active ? "open" : "closed"}
              >
                <motion.div variants={item}>accueil.</motion.div>
                <motion.div variants={item}>portfolio.</motion.div>
                <motion.div variants={item}>parcours.</motion.div>
                <motion.div variants={item}>cv.</motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={rejoindre} className="icones">
          <CiLinkedin className="icone" />
          <FiGithub className="icone" />
        </motion.div>
      </div>

      <motion.div className="bigMenu">
        <AnimatePresence>
          {isDesktop && (
            <motion.div
              variants={container}
              exit="exit"
              animate={active ? "open" : "closed"}
            >
              <motion.div variants={item}>accueil.</motion.div>
              <motion.div variants={item}>portfolio.</motion.div>
              <motion.div variants={item}>parcours.</motion.div>
              <motion.div variants={item}>cv.</motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div variants={rejoindre} className="MeRejoindre">
          <p>ME REJOINDRE</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const AnimatedHamburgerButton = ({ setActive, active }) => {
  return (
    <motion.button
      layout
      onClick={() => setActive(!active)}
      className="buttonHamburger"
    >
      <motion.span
        variants={boutonVariants}
        style={{
          left: "33%",
          top: "30%",
          x: "-50%",
          y: "-50%",
        }}
        className="barre1"
      />
      <motion.span
        variants={{
          open: { rotate: "-45deg" },
          closed: { rotate: "0deg" },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        className="barre2"
      />
      <motion.span
        variants={boutonVariants}
        style={{
          left: "66%",
          top: "70%",
          x: "-50%",
          y: "-50%",
        }}
        className="barre3"
      />
    </motion.button>
  );
};

const boutonVariants = {
  open: { rotate: "45deg", backgroundColor: "#000000" },
  closed: { rotate: "0deg" },
};
