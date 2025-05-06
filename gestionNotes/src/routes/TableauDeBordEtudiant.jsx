import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const TableauDeBordEtudiant = () => {
    const navigate = useNavigate();

    const handleDeconnexion = () => {
        localStorage.removeItem("utilisateur");
        navigate("/connexion");
    };

    return (
        <>
            <h1>Tableau de bord étudiant</h1>

            <Button variant="outlined" color="primary" onClick={handleDeconnexion}>
                Déconnexion
            </Button>
        </>
    )
}

export default TableauDeBordEtudiant;