import { Navigate } from 'react-router-dom';

const RedirectionInitiale = () => {
    const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    if (!utilisateur) return <Navigate to="/connexion" replace />;
    
    if (utilisateur.type === "etudiant") return <Navigate to={`/tableau_de_bord_etudiant/${utilisateur.id}`} replace />;
    
    if (utilisateur.type === "enseignant") return <Navigate to={`/tableau_de_bord_enseignant/${utilisateur.id}`} replace />;
    
    // En cas de problème, l'utilisateur sera renvoyé sur la page de connexion.
    return <Navigate to="/connexion" replace />;
}

export default RedirectionInitiale;