<?php

	/*
    *	Recupere IdQueryDelete : Id de la card à supprimer
    *	IdQueryDelete utilisé dans complete_card_content.js (ajax/jquery)
    */
    require('config.php');
    if($_POST['id']){
        print($_POST['id']);
        $content_recup = $pdo->exec("DELETE FROM personne WHERE id = '".$_POST['id']."' ");
    }
    echo $content_recup = "DELETE FROM personne WHERE id = '".$_POST['id']."' ";
?>
