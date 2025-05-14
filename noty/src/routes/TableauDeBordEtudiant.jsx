import { 
    Grid,
} from "@mui/material";

import TableauDeBordLayout from "../layouts/TableauDeBordLayout";
import TableauDeBordEtudiantContent from "../layouts/TableauDeBordEtudiantContent";

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