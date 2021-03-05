<?php
    require('config.php');
    
    
?>
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-15 " />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charset=iso-8859-15 >
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- RWD -->
        <title> Trombinoscope </title>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="fonts/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    </head>

    <header>
        <div class="gerer">

            <br>
            <div class="lien-container">
                <i class="fa fa-user-plus fa-1x"></i> <a id="ajouter" href="ajout.php">  Ajouter  </a><br>
            </div>
            <br>
            <div class="lien-container">
                <i class="fa fa-user-plus fa-1x"></i> <a id="deconnexion" href="deconnexion.php">  Deconnexion  </a><br>
            </div>
        </div>
        
    </header>
    <body>
    <script type="text/javascript" src="js/complete_card_content.js"></script>
    
        <div class="ligneFicheGerer" id="ligneFicheGerer">

        </div>
    </body>
</html>

