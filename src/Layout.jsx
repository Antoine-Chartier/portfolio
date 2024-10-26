import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";


const Layout = () => {
  return (
    <>
      <Nav />
      <main style={{ flex:"1 1 auto"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
