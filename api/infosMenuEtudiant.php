<?php 
    include("./fonctions.php");

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");    

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    header('Content-Type: application/json');

    $dataJSON = file_get_contents("php://input");
    $data = json_decode($dataJSON, true);
    
    if ($data && isset($data['idGroupe'])) {
        recupInfosPourMenuEtudiant($data['idGroupe']);
    } else {
        envoiJSON(["error" => "Paramètres manquants"]);
    }
?>    