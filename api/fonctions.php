<?php
    function connexionBDD() {
        $host = 'localhost';
        $dbname = 'maumorvan';
        $username = 'maumorvan';
        $password = 'noty';

        try {
            $bdd = new PDO('mysql:host='. $host .';dbname='. $dbname .';charset=utf8',
            $username, $password);
        } catch (Exception $e){
            die('Erreur : '.$e->getMessage());
        }

        return $bdd;
    }

    function envoiJSON($donnees) {
        $json = json_encode($donnees, JSON_UNESCAPED_UNICODE);
        echo $json;
    }

    function recupUtilisateur(string $type, string $identifiant, string $mdp) {
        $table = $type == "etudiant" ? "etudiants" : "enseignants";
        
        $bdd = connexionBDD();

        $requete = $bdd->prepare("SELECT * FROM $table WHERE login_connexion = :identifiant AND mdp = :mdp");
        $requete->execute([
            ':identifiant' => $identifiant,
            ':mdp' => $mdp
        ]);
        $utilisateur = $requete->fetch();

        envoiJSON($utilisateur);
    }

    function recupInfosPourMenuEtudiant(string $idGroupe) {
        $bdd = connexionBDD();

        $requete = $bdd->prepare("SELECT groupes.nom as nomGroupe, promotions.annee_diplome as anneeDiplome, promotions.nom as nomPromotion FROM groupes JOIN promotions ON groupes.id_promotion = promotions.id WHERE groupes.id = :idGroupe");
        $requete->execute([
            ':idGroupe' => $idGroupe
        ]);
        $infosMenu = $requete->fetch();

        envoiJSON($infosMenu);
    }
?>