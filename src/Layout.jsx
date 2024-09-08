import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function Layout() {

  return (
    <div>
      <div className="background" style={{ position: "fixed", width: "100%" }}>
        <Nav />
      </div>
      <div className="menuTampon">
        <div>{/* menu zone */}</div>
      </div>
        <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
