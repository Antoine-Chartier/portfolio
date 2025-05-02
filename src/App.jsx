import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router";
import "./App.scss";
import Layout from "./Layout";
import Accueil from "./pages/Accueil";
import UnePage from "./pages/UnePage";
import CurriculumVitae from "./pages/CurriculumVitae";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Succes from "./components/Succes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Accueil />, index: true },
      { path: "unepage", element: <UnePage /> },
      { path: "Projets", element: <Projets /> },
      { path: "CV", element: <CurriculumVitae /> },
      { path: "Contact", element: <Contact/>,  children: [{path: "succes", element: <Succes />}] },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);


function App() {
  return <RouterProvider router={routes} />;
}

export default App;
