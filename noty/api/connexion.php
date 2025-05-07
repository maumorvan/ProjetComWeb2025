<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");    

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    header('Content-Type: application/json');

    function envoiJSON($donnees) {
        $json = json_encode($donnees, JSON_UNESCAPED_UNICODE);
        echo $json;
    }
    
    function recupUtilisateur(string $type, string $identifiant, string $mdp) {
        $host = 'localhost';
        $dbname = 'maumorvan';
        $username = 'root';
        $password = 'noty';

        try {
            $bdd = new PDO('mysql:host='. $host .';dbname='. $dbname .';charset=utf8',
            $username, $password);
        } catch (Exception $e){
            die('Erreur : '.$e->getMessage());
        }

        $table = $type == "etudiant" ? "etudiants" : "enseignants";
        
        $requete = $bdd->prepare("SELECT * FROM $table WHERE login_connexion = :identifiant AND mdp = :mdp");
        $requete->execute([
            ':identifiant' => $identifiant,
            ':mdp' => $mdp
        ]);
        $utilisateur = $requete->fetch();


        envoiJSON($utilisateur);
    }

    $dataJSON = file_get_contents("php://input");
    $data = json_decode($dataJSON, true);
    
    if ($data && isset($data['type'], $data['identifiant'], $data['motDePasse'])) {
        recupUtilisateur($data['type'], $data['identifiant'], $data['motDePasse']);
    } else {
        envoiJSON(["error" => "Paramètres manquants"]);
    }
?>    