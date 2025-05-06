import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
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
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            rowGap="2rem"
            padding="5rem"
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

                <TextField
                    label="Identifiant"
                    variant="outlined"
                    fullWidth
                    value={identifiant}
                    onChange={(e) => setIdentifiant(e.target.value)}
                    required
                />

                <TextField
                    label="Mot de passe"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                    required
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Connexion
                </Button>
            </Box>
        </Box>
    );
};

export default Connexion;
