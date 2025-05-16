import { 
    Grid,
} from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import TableauDeBordLayout from "../layouts/TableauDeBordLayout";
import TableauDeBordEtudiantContent from "../layouts/TableauDeBordEtudiantContent";

/**
 * Page principale du tableau de bord étudiant.
 * Elle utilise un layout commun avec menu, et injecte le contenu étudiant.
 */
const TableauDeBordEtudiant = () => {
    const { id } = useParams();
    const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    // Redirection si l'id dans l'URL ne correspond pas à l'utilisateur connecté.
    if (utilisateur.id != id || utilisateur.typeUtilisateur !== "etudiant") {
        return <Navigate to={`/tableau_de_bord_${utilisateur.typeUtilisateur}/${utilisateur.id}`} replace />;
    }

    return (
        <>
            <Grid container>
                <TableauDeBordLayout>
                    <TableauDeBordEtudiantContent/>
                </TableauDeBordLayout>
            </Grid>
        </>
    )
}

export default TableauDeBordEtudiant;