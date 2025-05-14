import { 
    TableContainer,
    TableHead,
    Typography,
    Table,
    TableRow,
    TableCell,
    TableBody, 
} from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

/**
 * Contenu affiché dans le tableau de bord étudiant.
 * Affiche un tableau des notes avec nom du module, type d’évaluation, etc (données brutes).
 */
const TableauDeBordEtudiantContent = () => {
    // Style alterné pour les lignes du tableau (gris, blanc).
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    // Fonction utilitaire pour créer une ligne de données
    const createData = (id, nomModule, type, libelle, date, enseignant, note) => {
        return { id, nomModule, type, libelle, date, enseignant, note };
    }

    // Données factices à afficher (qui seraient remplacées par des données récupérée par 
    // appel à l'API si de nouvelles fonctionnalités étaient développées).
    const rows = [
        createData("1", "Communiction web", "Projet", "Projet gestion notes", "21-05-2025", "Frédéric PLACIN", "20"),
        createData("2", "Gestion des connaissances et représentation", "Projet", "Projet MASK", "14-05-2025", "Benoit LEBLANC", "17"),
        createData("3", "Communiction web", "Contrôle continu", "TP5", "20-04-2025", "Frédéric PLACIN", "18"),
        createData("4", "Probabilités et statistique", "Partiel", "Examen statistique", "02-02-2025", "Jérome SARACCO", "14"),
    ];

    return (
        <>
            {/* Titre */}
            <Typography variant="subtitle1">
                Mes notes
            </Typography>

            {/* Conteneur du tableau */}
            <TableContainer component={Paper}>
                <Table>
                    {/* En-tête */}
                    <TableHead>
                        <TableRow style={{backgroundColor: "#CCCCCC"}}>
                            <TableCell style={{fontWeight: "bold"}}>Nom du module</TableCell>
                            <TableCell style={{fontWeight: "bold"}}>Type</TableCell>
                            <TableCell style={{fontWeight: "bold"}}>Libellé</TableCell>
                            <TableCell style={{fontWeight: "bold"}}>Date</TableCell>
                            <TableCell style={{fontWeight: "bold"}}>Enseignant</TableCell>
                            <TableCell style={{fontWeight: "bold"}}>Note</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Lignes de notes */}
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.nomModule}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.libelle}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.enseignant}</TableCell>
                                <TableCell>{row.note}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableauDeBordEtudiantContent;