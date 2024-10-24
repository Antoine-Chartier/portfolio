import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
