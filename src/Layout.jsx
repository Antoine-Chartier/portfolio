import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);


  // Define the paths where the Footer should not be rendered
  const noFooterPaths = ["/cv"];

  // Check if the current path is in the noFooterPaths array
  const shouldNOTrenderFooter = noFooterPaths.includes(currentPath) && isDesktop;
  console.log(shouldNOTrenderFooter);

  return (
    <>
      <Nav />
      <main style={{ flex: "1 1 auto", height:"100%" }}>
        <Outlet />
      </main>
      {!shouldNOTrenderFooter && <Footer/>}
    </>
  );
};

export default Layout;
