import { 
    Grid,
    Box,
    Typography
} from "@mui/material";
import Menu from "../layouts/Menu";

const TableauDeBordLayout = ({ children }) => {
    return (
        <>
            <Menu/>

            <Grid 
                size={10}
                display="flex"
                flexDirection="column"
                height="100vh"
                bgcolor="#eeeeee"
            >
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