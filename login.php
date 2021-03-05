
<!DOCTYPE html>
<html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-15 " />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charset=iso-8859-15 >
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title> Connexion </title>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="fonts/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./css/style.css">

    </head>
    <header>

    </header>
    <body>
        
        <div class="formulaire-connexion">
            <form action="verification.php" method="POST">
                <h4>Connexion </h4><br>
                <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" autocomplete="off"/><br><br>
                <input type="password" placeholder="Entrer le mot de passe" name="password" autocomplete="off"/><br><br>
                <input type="submit" id="Connexion" value='Connexion'/>
            </form>
        </div>

    </body>
</html>