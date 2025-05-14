<?php
    /*
        Établit une connexion à la base de données MySQL.
        return : Une instance PDO connectée à la base. 
    */
    function connexionBDD() {
        $host = 'localhost';
        $dbname = 'maumorvan';
        $username = 'maumorvan';
        $password = 'noty';

        try {
            $bdd = new PDO('mysql:host='. $host .';dbname='. $dbname .';charset=utf8',
            $username, $password);
        } catch (Exception $e){
            // En cas d'erreur, le script est interrompu avec un message d'erreur.
            die('Erreur : '.$e->getMessage());
        }

        return $bdd;
    }

    /*
        Encode des données en JSON et les envoie en réponse HTTP.
        param donnees : Les données à encoder.
    */
    function envoiJSON($donnees) {
        $json = json_encode($donnees, JSON_UNESCAPED_UNICODE);
        echo $json;
    }

    /*
        Récupère un utilisateur à partir de son identifiant, mot de passe et typde (étudiant ou enseignant).
        
        param type : Type de l'utilisateur (etudiant ou enseignant).
        param identifiant : Identifiant de connexion (login).
        param mdp : Mot de passe.
    */
    function recupUtilisateur(string $type, string $identifiant, string $mdp) {
        // Détermine la table à interroger en fonction du type.
        $table = $type == "etudiant" ? "etudiants" : "enseignants";
        
        $bdd = connexionBDD();

        $requete = $bdd->prepare("SELECT * FROM $table WHERE login_connexion = :identifiant AND mdp = :mdp");
        $requete->execute([
            ':identifiant' => $identifiant,
            ':mdp' => $mdp
        ]);
        $utilisateur = $requete->fetch();

        // Envoi de la réponse en JSON : données ou false si aucune correspondance
        envoiJSON($utilisateur);
    }

    /*
        Récupère les informations liées à un groupe : son nom, le nom de la promotion et l'année d'obtention du diplôme.
        Cette fonction est utilisée pour afficher les infos contextuelles dans le menu du tableau de bord d'un étudiant.
        
        param idGroupe : Identifiant du groupe (clé étrangère chez l'étudiant).
    */
    function recupInfosPourMenuEtudiant(string $idGroupe) {
        $bdd = connexionBDD();

        $requete = $bdd->prepare("
            SELECT 
                groupes.nom as nomGroupe, 
                promotions.annee_diplome as anneeDiplome, 
                promotions.nom as nomPromotion 
            FROM groupes 
            JOIN promotions ON groupes.id_promotion = promotions.id 
            WHERE groupes.id = :idGroupe
        ");
        $requete->execute([
            ':idGroupe' => $idGroupe
        ]);
        $infosMenu = $requete->fetch();

        envoiJSON($infosMenu);
    }
?>