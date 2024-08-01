import "./navStyle.scss";

function Nav() {

const toggleHamburger = () => {
  // const mobileMenu = document.querySelector('.mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  // mobileMenu.classList.toggle('hidden');
  hamburger.classList.toggle('active');
  
}


  
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
             <div className="button" onClick={toggleHamburger}>
               <div className="hamburger md:hidden">
               </div>
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