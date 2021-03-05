<?php
    /*
    *   Recupere toutes les données de la table personne dans la BDD : trombinoscope
    *   pour les transformer en tableau json recupéré dans le complete_card_content.js (ajax/jquery)
    */
    require('config.php');
    $content_recup = "SELECT * FROM personne ORDER BY nom";
    $result = $pdo->query($content_recup);

    $personne = array();
    
    while($row = $result->fetch( PDO:: FETCH_ASSOC )){
        $personne[] = $row;
    }
    echo json_encode($personne);
?>