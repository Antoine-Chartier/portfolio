import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout";
import Accueil from "./pages/Accueil";
import UnePage from "./pages/UnePage";
import UneAutrePage from "./pages/UneAutrePage";
import CurriculumVitae from "./pages/CurriculumVitae";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Accueil />, index: true },
      { path: "unepage", element: <UnePage /> },
      { path: "uneAutrePage", element: <UneAutrePage /> },
      { path: "CV", element: <CurriculumVitae /> },
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