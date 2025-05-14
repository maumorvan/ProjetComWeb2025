import { Navigate } from "react-router-dom";

/** 
 * Composant de protection des routes nécessitant une authentification (tableaux de bord).
 * 
 * Si aucun utilisateur n'est trouvé dans le localStorage, l'accès est refusé et l'utilisateur est redirigé vers /connexion.
*/
const RouteProtegee = ({ children }) => {
  const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

  if (!utilisateur) {
    return <Navigate to="/connexion" replace />;
  }

  return children;
};

export default RouteProtegee;
