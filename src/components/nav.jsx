import { useState } from "react";
import "./navStyle.scss";
import { motion } from "framer-motion";


function Nav() {

  const [active, setActive] = useState(false);


  
    return (
      <>
        <nav className="topNav">
           <div className="navWrap ">
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
             <div className="relative">
               <motion.div className="bigPopOut"
                      layout
                      transition={{ type: "spring", stiffness: 150, damping: 20}}
                      initial={false}
                      animate={active ? "open" : "closed"}
                      // style={{backgroundColor: active ? "#344cfe" : "#00000000"}}
                      style={{width: "100vw", height: "100vh", overflow: "hidden"}}
                      variants={{
                        open: {width: "96vw", height: "94vh"},
                        closed: {width: "60px", height: "60px"}
                      }}>
                  <AnimatedHamburgerButton active={active} setActive={setActive} />
               </motion.div>
             </div>
           </div>
        </nav>
        <div className="bigMenuOverlay" data-isopen={active}>
            <AnimatedBigMenu active={active} setActive={setActive} />
        </div>
      </>
    )
  }
  
  export default Nav

  const AnimatedBigMenu = ({setActive, active}) => {
    
    return (
      <motion.div 

      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      className="bigMenu">
        <div>
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
      </motion.div>
    );
  }

  const AnimatedHamburgerButton = ({setActive, active}) => {
    // const [active, setActive] = useState(false);
    return (
      <motion.button 
      layout
      onClick={() => setActive(!active)}
      animate={active ? "open" : "closed"}
      data-isopen={active}
      className="buttonHamburger">
        <motion.span
          variants={{
            open: {rotate: "45deg",backgroundColor: "#000000"},
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
            open: {rotate: "-45deg", backgroundColor: "#000000"},
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
            open: {rotate: "45deg", backgroundColor: "#000000"},
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