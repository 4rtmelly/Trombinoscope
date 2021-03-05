<?php
    /*
    *   verification.php : verifie le mot de passse et login de l'utilisateur
    *
    */
    require('config.php');
    
    if(isset($_POST['username']) && isset($_POST['password'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
    }
    $u = "SELECT nom_utilisateur FROM utilisateur";
    $p = "SELECT mot_de_passe FROM utilisateur";
    $content_recup = "SELECT nom_utilisateur AS user, mot_de_passe AS mdp FROM utilisateur";
    $result = $pdo->query($content_recup);
    $row_count = $result->rowCount();
    if($row_count > 0){
        while($row_count = $result->fetch( PDO:: FETCH_ASSOC ) ){
            
            if($username == $row_count['user']){
                
                if($password == $row_count['mdp']){
                    header("location:indexGerer.php");
                }
                else {
                    echo "Le mot de passe ou le nom d'utilisateur est incorrrect. Veuillez réessayer.";
                }
            }
            else {
                echo "Le mot de passe ou le nom d'utilisateur est incorrrect. Veuillez réessayer.";
            }
        }

    }
    
    
?>