import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Connexion from './routes/Connexion';
import TableauDeBordEtudiant from './routes/TableauDeBordEtudiant';
import TableauDeBordEnseignant from './routes/TableauDeBordEnseignant';
import RedirectionInitiale from './routes/RedirectionInitiale';
import RouteProtegee from './routes/RouteProtegee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectionInitiale />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/tableau_de_bord_etudiant/:id",
    element: (
      <RouteProtegee>
        <TableauDeBordEtudiant />
      </RouteProtegee>
    ),
  },
  {
    path: "/tableau_de_bord_enseignant/:id",
    element: (
      <RouteProtegee>
        <TableauDeBordEnseignant />
      </RouteProtegee>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

