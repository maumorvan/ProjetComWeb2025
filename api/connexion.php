<?php 
    include("./fonctions.php");

    // Autorisations CORS pour permettre les requêtes depuis React.
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");    

    // Réponse automatique aux requêtes OPTIONS. 
    // Nécessaire pour les requêtes CORS avec fetch.
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    header('Content-Type: application/json'); // Type de contenu renvoyé.

    // Récupération des données envoyées par le front via POST.
    $dataJSON = file_get_contents("php://input");
    $data = json_decode($dataJSON, true);
    
    // Vérification que les paramètrs nécessaires à la récupération des données dans la bdd ont bien été reçus.
    if ($data && isset($data['type'], $data['identifiant'], $data['motDePasse'])) {
        recupUtilisateur($data['type'], $data['identifiant'], $data['motDePasse']);
    } else {
        envoiJSON(["error" => "Paramètres manquants"]);
    }
?>    