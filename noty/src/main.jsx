import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Connexion from './routes/Connexion';
import TableauDeBordEtudiant from './routes/TableauDeBordEtudiant';
import TableauDeBordEnseignant from './routes/TableauDeBordEnseignant';
import RedirectionInitiale from './routes/RedirectionInitiale';
import RouteProtegee from './routes/RouteProtegee';

// Définition des routes de l'application.
const router = createBrowserRouter([
  {
    // Route par défaut -> redirige automatiquement selon le type d'utilisateur et l'authentification faite ou non.
    path: "/", 
    element: <RedirectionInitiale />,
  },
  {
    path: "/connexion", 
    element: <Connexion />,
  },
  {
    path: "/tableau_de_bord_etudiant/:id", // Accessible uniquement si connecté.
    element: (
      <RouteProtegee>
        <TableauDeBordEtudiant />
      </RouteProtegee>
    ),
  },
  {
    path: "/tableau_de_bord_enseignant/:id", // Accessible uniquement si connecté.
    element: (
      <RouteProtegee>
        <TableauDeBordEnseignant />
      </RouteProtegee>
    ),
  },
]);

// Point d'entrée de l'application.
// Le RouterProvider permet de rendre la navigation dynamique dans l'application.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

