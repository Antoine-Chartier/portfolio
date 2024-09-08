import "./App.css";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Accueil from "./pages/Accueil";
import UnePage from "./pages/UnePage";
import Layout from "./Layout";
import UneAutrePage from "./pages/UneAutrePage";

function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <Accueil />, index: true },
        { path: "/unepage", element: <UnePage /> },
        { path: "/uneAutrePage", element: <UneAutrePage /> },
      ],
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
