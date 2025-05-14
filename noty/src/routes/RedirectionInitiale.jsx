import { Navigate } from 'react-router-dom';

/**
 * Composant de redirection automatique depuis la racine (/).
 * 
 * Si un utilisateur est déjà connecté, il est redirigé vers son tableau de bord.
 * Sinon, il est renvoyé vers la page de connexion.
 */
const RedirectionInitiale = () => {
    const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    if (!utilisateur) return <Navigate to="/connexion" replace />;
    
    if (utilisateur.type === "etudiant") return <Navigate to={`/tableau_de_bord_etudiant/${utilisateur.id}`} replace />;
    
    if (utilisateur.type === "enseignant") return <Navigate to={`/tableau_de_bord_enseignant/${utilisateur.id}`} replace />;
    
    // En cas d'erreur ou d'incohérence, l'utilisateur sera renvoyé sur la page de connexion.
    return <Navigate to="/connexion" replace />;
}

export default RedirectionInitiale;