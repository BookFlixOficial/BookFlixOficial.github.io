import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Inicio from "../../pages/Inicio";
import Links from "../../pages/Links";
import PoliticaDePrivacidade from "../../pages/PoliticaDePrivacidade";
import TermoDeUso from "../../pages/TermoDeUso";

const App = lazy(() => import("../../App"));

export const Routes = {
  inicio: "/",
  links: "/links",
  termoDeUso: "/termo-de-uso",
  privacidade: "/privacidade",
};

// Criado em 26/01/2026  21:47:01
export const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: Routes.inicio, element: <Inicio />, index: true },
        { path: Routes.termoDeUso, element: <TermoDeUso /> },
        { path: Routes.privacidade, element: <PoliticaDePrivacidade /> },
      ],
    },
    { path: Routes.links, element: <Links /> },
  ],
  { basename: Routes.inicio },
);
