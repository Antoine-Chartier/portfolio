import { useState } from "react";
import "./navStyle.scss";
import { motion } from "framer-motion";


function Nav() {



  
    return (
      <>
        <nav className="topNav">
           <div className="navWrap">
             <div>
               <div className="carreNom">
                   <div className="carreCouleur">
                    </div>
                    <div className="nom">
                        Antoine Chartier
                    </div>
               </div>
                <div className="titre">
                    DÉVELOPPEUR WEB
                </div>
             </div>
             <div className="button">
                <AnimatedHamburgerButton />
             </div>
             <div className="mobileMenu hidden">
                <div>
                  item 1
                </div>
                <div>
                  item 2
                </div>
                <div>
                  item 3
                </div>
              </div>
           </div>
        </nav>
      </>
    )
  }
  
  export default Nav


  const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);
    return (
      <motion.button 
      onClick={() => setActive(!active)}
      animate={active ? "open" : "closed"}
      className="buttonHamburger">
        <motion.span
          variants={{
            open: {rotate: "45deg"},
            closed: {rotate: "0deg"}
          }}
          style={{
              left: "33%",
              top: "30%",
              x: "-50%",
              y: "-50%",
            }} className="barre1"/>
        <motion.span
          variants={{
            open: {rotate: "-45deg"},
            closed: {rotate: "0deg"}
          }}
          transition={{duration: 0.2, ease: "easeInOut"}}
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }} className="barre2"/>
        <motion.span 
          variants={{
            open: {rotate: "45deg"},
            closed: {rotate: "0deg"}
          }}
          style={{
            left: "66%",
            top: "70%",
            x: "-50%",
            y: "-50%",
          }} className="barre3"/>
      </motion.button>
    );
  }