import { 
    Grid,
} from "@mui/material";

import TableauDeBordLayout from "../layouts/TableauDeBordLayout";
import TableauDeBordEtudiantContent from "../layouts/TableauDeBordEtudiantContent";

/**
 * Page principale du tableau de bord étudiant.
 * Elle utilise un layout commun avec menu, et injecte le contenu étudiant.
 */
const TableauDeBordEtudiant = () => {
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