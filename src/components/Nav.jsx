import { useEffect, useState } from "react";
import "./Nav.scss";
// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "motion/react"

import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import Logo from "./Logo";
import { Link } from "react-router";
import ThemeSwitch from "./ThemeSwitch";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    setFirstMount(false);
  }, []);

  return (
    <header>
      <div className={`background ${active && "menu-ouvert"}`}>
        <nav className="topNav">
          <div className="navWrap ">
            <Logo
              isNav={true}
              texte={"Antoine"}
              sousTexte={"DEVELOPPEUR WEB"}
              menuIsOpen={active}
              setActive={setActive}
              link={"/"}
            />
            <div className="bar">
              <ThemeSwitch />
              <motion.div
                className="bigPopOut"
                // layout
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                initial={false}
                animate={active ? "open" : "closed"}
                variants={{
                  open: {
                    width: "100%",
                    height: "calc(92dvh - var(--clampRacine))",
                  },
                  closed: {
                    width: "70px",
                    height: "70px",
                    transition: { when: "afterChildren" },
                  },
                }}
              >
                <AnimatedHamburgerButton
                  active={active}
                  setActive={setActive}
                />
                <div className="bigMenuOverlay" data-isopen={active}>
                  <AnimatedBigMenu
                    active={active}
                    setActive={setActive}
                    firstMount={firstMount}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </nav>
      </div>
      <div className="menuFiller"></div>
    </header>
  );
};

export default Nav;

const AnimatedBigMenu = ({ active, setActive, firstMount }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    exit: { opacity: 0 },
  };
  const rejoindreText = {
    closed: {
      y: 120,
      opacity: 0,
    },
    open: {
      transition: { delay: 0.85 },
      y: 0,
      opacity: 1,
    },
    exit: { opacity: 0 },
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
      <div className="antoineColonne">
        <motion.div className="bigMenu">
          <AnimatePresence>
            {!isDesktop && (
              <motion.div
                variants={container}
                exit="exit"
                animate={active ? "open" : "closed"}
                initial={false}
              >
                <Link to={"/"} onClick={() => setActive(false)}>
                  <motion.div variants={item}>accueil.</motion.div>
                </Link>
                <Link to={"/projets"} onClick={() => setActive(false)}>
                  <motion.div variants={item}>portfolio.</motion.div>
                </Link>
                <Link to={"/cv"} onClick={() => setActive(false)}>
                  <motion.div variants={item}>cv.</motion.div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={rejoindreText} className="icones">
          <a
            href="https://linkedin.com/in/antoinechartier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="icone" />
          </a>
          <a
            href="https://github.com/Antoine-Chartier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="icone" />
          </a>
        </motion.div>
      </div>

      <motion.div className="bigMenu">
        <AnimatePresence>
          {isDesktop && (
            <>
              <div style={{ height: "70px" }}></div>
              <motion.div
                variants={container}
                exit="exit"
                animate={active ? "open" : "closed"}
                initial={false}
              >
                <Link to={"/"} onClick={() => setActive(false)}>
                  <motion.div variants={item}>accueil.</motion.div>
                </Link>
                <Link to={"/projets"} onClick={() => setActive(false)}>
                  <motion.div variants={item}>portfolio.</motion.div>
                </Link>
                <Link to={"/cv"} onClick={() => setActive(false)}>
                  <motion.div variants={item}>cv.</motion.div>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <motion.div variants={rejoindre} className="MeRejoindre">
          <a href="mailto:antoinechartier.ca@gmail.com?subject=Opportunité&body=Bonjour%20Antoine,">
            <motion.p>
              <GoArrowRight className="fleche" />
            </motion.p>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

const AnimatedHamburgerButton = ({ setActive, active }) => {
  return (
    <motion.button
      // layout
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
