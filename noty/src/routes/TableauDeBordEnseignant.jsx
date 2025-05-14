import { 
    Grid,
} from "@mui/material";
import TableauDeBordLayout from "../layouts/TableauDeBordLayout";

/**
 * Page du tableau de bord enseignant (actuellement vide).
 */
const TableauDeBordEnseignant = () => {
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