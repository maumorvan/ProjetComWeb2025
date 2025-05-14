import { 
    Grid,
    Box,
    Typography
} from "@mui/material";
import Menu from "../layouts/Menu";

/**
 * Layout commun pour les pages de tableau de bord.
 * Affiche le menu à gauche et un contenu principal à droite.
 * Le contenu est inséré via {children}, ce qui permet de le réutiliser facilement.
 */
const TableauDeBordLayout = ({ children }) => {
    return (
        <>
            {/* Menu de gauche */}
            <Menu/>

            {/* Partie principale du tableau de bord */}
            <Grid 
                size={10}
                display="flex"
                flexDirection="column"
                height="100vh"
                bgcolor="#eeeeee"
            >
                {/* Bandeau supérieur */}
                <Box 
                    height="10vh" 
                    padding="2rem 2rem" 
                    display="flex" 
                    justifyContent="center" 
                    flexDirection="column"
                    bgcolor="#ffffff"
                >
                    <Typography variant="h6">
                        Tableau de bord
                    </Typography>
                </Box>

                {/* Contenu injecté (notes, actions, etc.) */}
                <Box 
                    height="90vh" 
                    margin="2rem" 
                    bgcolor="#ffffff" 
                    padding="3rem" 
                    display="flex" 
                    flexDirection="column"
                    rowGap="1rem"
                >
                    { children }
                </Box>
            </Grid>
        </>
    );
};

export default TableauDeBordLayout;