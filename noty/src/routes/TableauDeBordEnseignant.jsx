import { 
    Grid,
} from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import TableauDeBordLayout from "../layouts/TableauDeBordLayout";

/**
 * Page du tableau de bord enseignant (actuellement vide).
 */
const TableauDeBordEnseignant = () => {
    const { id } = useParams();
    const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    // Redirection si l'id dans l'URL ne correspond pas à l'utilisateur connecté.
    if (utilisateur.id != id || utilisateur.typeUtilisateur !== "enseignant") {
        return <Navigate to={`/tableau_de_bord_${utilisateur.typeUtilisateur}/${utilisateur.id}`} replace />;
    }


    return (
        <>
            <Grid container>                
                <TableauDeBordLayout>
                </TableauDeBordLayout>
            </Grid>
        </>
    )
}

export default TableauDeBordEnseignant;