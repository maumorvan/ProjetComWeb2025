import { Navigate } from "react-router-dom";

const RouteProtegee = ({ children }) => {
  const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

  if (!utilisateur) {
    return <Navigate to="/connexion" replace />;
  }

  return children;
};

export default RouteProtegee;
