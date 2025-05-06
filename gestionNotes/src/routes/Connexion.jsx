import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const Connexion = () => {
    const [typeUtilisateur, setTypeUtilisateur] = useState("etudiant");
    const [identifiant, setIdentifiant] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const utilisateur = {
            id: identifiant,
            type: typeUtilisateur,
        };

        localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

        if (typeUtilisateur === "etudiant") {
            navigate(`/tableau_de_bord_etudiant/${identifiant}`);
        } else {
            navigate(`/tableau_de_bord_enseignant/${identifiant}`);
        }
    };

    return (
        <Grid container>
            <Grid 
                size={6} 
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                rowGap="10vh"
                minHeight="100vh" 
                bgcolor="#181C3C"
            >
                <Typography variant="h2" fontWeight="bold" color="white">
                    Noty
                </Typography>

                <img src="../../public/noty.png" style={{width:"25vw"}}/>
            </Grid>

            {/* Formulaire de connexion */}
            <Grid 
                size={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                rowGap="2rem"
                padding="5vw"
                minHeight="100vh"
            >
                <Typography variant="h4">
                    Bienvenue !
                </Typography>

                <Box 
                    component="form" 
                    onSubmit={handleSubmit} 
                    display="flex" 
                    flexDirection="column" 
                    rowGap="1rem"
                >
                    {/* Type d'utilisateur */}
                    <FormControl>
                        <RadioGroup
                            row
                            value={typeUtilisateur}
                            onChange={(e) => setTypeUtilisateur(e.target.value)}
                        >
                            <FormControlLabel
                                value="etudiant"
                                control={<Radio />}
                                label="Étudiant"
                            />
                            
                            <FormControlLabel
                                value="enseignant"
                                control={<Radio />}
                                label="Enseignant"
                            />
                        </RadioGroup>
                    </FormControl>

                    {/* Identifiant */}
                    <TextField
                        label="Identifiant"
                        variant="outlined"
                        fullWidth
                        value={identifiant}
                        onChange={(e) => setIdentifiant(e.target.value)}
                        required
                    />

                    {/* Mot de passe */}
                    <TextField
                        label="Mot de passe"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={motDePasse}
                        onChange={(e) => setMotDePasse(e.target.value)}
                        required
                    />

                    {/* Bouton de connexion (soumission du formulaire) */}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Connexion
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Connexion;
