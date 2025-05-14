import { useNavigate } from "react-router-dom";
import { 
    Button, 
    Grid,
    Typography,
    Box,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";

const Menu = () => {
    const [infosSupplementaires, setInfosSupplementaires] = useState(null);
    const navigate = useNavigate();

    const handleDeconnexion = () => {
        localStorage.removeItem("utilisateur");
        navigate("/connexion");
    };

    const theme = createTheme({
        palette: {
            white: {
                main: '#FFFFFF',
                light: '#EBEBEB',
                dark: '#D6D6D6',
                contrastText: '#000000',
            }
        },
    });

    const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    useEffect(() => {
        const recupInfosSupplementaires = async () => {
            let infos = null;
                
            const data = {
                idGroupe: utilisateur.id_groupe
            };

            try {
                const response = await fetch("https://maumorvan.zzz.bordeaux-inp.fr/noty/api/infosMenuEtudiant.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
        
                infos = await response.json();
                setInfosSupplementaires(infos);
            } catch (error) {
                console.error("Erreur de connexion :", error);
            }
        }

        recupInfosSupplementaires();
    }, [utilisateur.id_groupe]);

    return (
        <>
            <Grid 
                size={2}
                bgcolor="#181C3C"
                minHeight="100vh" 
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                padding="10vh 2rem"
            >
                <Box 
                    display="flex"
                    flexDirection="column"
                    rowGap="2rem"
                    alignItems="center"
                >
                    {/* Nom de l'application */}
                    <Typography variant="h4" fontWeight="bold" color="white">
                        Noty
                    </Typography>

                    <img src="/user.png" style={{width:"2.5rem"}}/>

                    {/* Informations de l'utilisateur connecté */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Typography variant="subtitle1" color="white">{utilisateur.prenom}</Typography>
                        <Typography variant="subtitle1" color="white">{utilisateur.nom}</Typography>
                    </Box>

                    <Typography variant="body2" color="white">ID : {utilisateur.login_connexion}</Typography>

                    {/* La promotion et le groupe sont à afficher que si l'utilisateur est un étudiant. */}
                    {infosSupplementaires != null && utilisateur.typeUtilisateur == "etudiant" && (
                        <>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Typography variant="body2" color="white">Promotion {new Date(infosSupplementaires.anneeDiplome).getFullYear()}</Typography>
                                <Typography variant="body2" color="white" sx={{ fontStyle: 'italic' }}>"{infosSupplementaires.nomPromotion}"</Typography>
                            </Box>

                            <Typography variant="body2" color="white">{infosSupplementaires.nomGroupe}</Typography>
                        </>
                    )}
                </Box>

                {/* Bouton de déconnexion */}
                <ThemeProvider theme={theme}>
                    <Button variant="outlined" color="white" startIcon={<LogoutIcon />} onClick={handleDeconnexion}>
                        Déconnexion
                    </Button>
                </ThemeProvider>
            </Grid>
        </>
    );
}

export default Menu;