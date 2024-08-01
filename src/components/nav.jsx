import "./navStyle.scss";

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