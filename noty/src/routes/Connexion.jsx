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
  Alert
} from "@mui/material";

const Connexion = () => {
    // Champs du formulaire.
    const [typeUtilisateur, setTypeUtilisateur] = useState("etudiant");
    const [identifiant, setIdentifiant] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [erreurConnexion, setErreurConnexion] = useState(false);
    
    const navigate = useNavigate();

    /**
     * Fonction déclenchée à la soumission du formulaire.
     * Appelle l'API en POST pour vérifier les identifiants.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
         // On masque l’erreur si elle était visible. Utile dans le cas où l'utilisateur aurait déjà tenté de 
         // se connecter mais aurait se serait trompé d'identifiant par exemple.
        setErreurConnexion(false);

        const data = {
            type: typeUtilisateur,
            identifiant,
            motDePasse,
        };

        try {
            const response = await fetch("https://maumorvan.zzz.bordeaux-inp.fr/noty/api/connexion.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
      
            const utilisateur = await response.json();
                  
            if (utilisateur && utilisateur.id) {
                // Ajout du type utilisateur pour l'affichage futur.
                utilisateur["typeUtilisateur"] = typeUtilisateur;

                // Stockage local pour maintenir la session.
                localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
      
                // Redirection vers le bon tableau de bord.
                if (typeUtilisateur === "etudiant") {
                    navigate(`/tableau_de_bord_etudiant/${utilisateur.id}`);
                } else {
                    navigate(`/tableau_de_bord_enseignant/${utilisateur.id}`);
                }
            } else {
                // Aucune correspondance trouvée (identifiants incorrectes).
                setErreurConnexion(true);
            }
        } catch (error) {
            console.error("Erreur de connexion :", error);
            setErreurConnexion(true);
        }
    };

    return (
        <Grid container>
            {/* Partie gauche : titre et image */}
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

                <img src="/noty.png" style={{width:"25vw"}}/>
            </Grid>

            {/* Partie droite : Formulaire de connexion */}
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
                    {/* Sélection du type d'utilisateur */}
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

                    {/* Message d’erreur si identifiants invalides */}
                    {erreurConnexion && (
                        <Alert severity="error">
                            Vos informations n’ont pas été reconnues. Veuillez recommencer.
                        </Alert>
                    )}

                    {/* Bouton de validation (soumission du formulaire) */}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Connexion
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Connexion;
