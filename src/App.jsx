import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.scss";
import Layout from "./Layout";
import Accueil from "./pages/Accueil";
import UnePage from "./pages/UnePage";
import UneAutrePage from "./pages/UneAutrePage";
import CurriculumVitae from "./pages/CurriculumVitae";

function App() {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        console.log('Service Worker:', registration);
      }
    });
  }

  const routes = [
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
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
