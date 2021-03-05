/*
    *   complete_card_content.js : creer des elements necessaires (html) pour le structure
    *   du trombinoscope (plusieurs div imbriquées) pour ensuite les remplir dynamiquement
    *   grâce à ajax/jquery via la table personne de la BDD : trombinoscope
    *   
    *   data : renvoie le tableau de données sous forme json
    *   selon le nombre de ligne (data.length) on crée toutes les div,elements que l'on rempli
    *   avec data[i].element
    *   line : testarray.php
    *   <i></i> correspondent aux icones fontawesome
    * 
    *   - ajax jquery egalement utilisé pour supprimer la card voulue selon son ID 
    *   lien : supprimer.php
    * 
    */
   $(document).ready(function() {

    $.ajax({
        url:"testarray.php",
        dataType: 'JSON',
        method:"POST",
        success:function(data) {
            console.log(data);
            console.log(data.length)
            
            for(var i=0; i<data.length; i++){

                var card = document.createElement('div');
                card.className = "card";
                card.id = "card";
                card.value = data[i].id;
               

                var cardUp = document.createElement('div');
                cardUp.className = "card-up";
                cardUp.id = "card-up";


                var container = document.createElement('div');
                container.className = "container";
                container.id = "container";

                /*
                var btnSuppr  = document.createElement('button');
                btnSuppr.id = "supprimer";
                btnSuppr.innerHTML = "Supprimer";
                */

                var popA = document.createElement('a');
                popA.className="abutton";
                popA.href = "#popup" + data[i].id;
                popA.innerHTML = "En savoir plus";

                var overlay  = document.createElement('div');
                overlay.className="overlay";
                overlay.id = "popup" + data[i].id;

                var popup  = document.createElement('div');
                popup.className="popup";
                popup.id = "popup";

                var close = document.createElement('a');
                close.className="close-btn";
                close.href = "#";
                close.innerHTML = "X";

                var content  = document.createElement('div');
                content.className = "content";
                content.id = "content";
                
                divLigne = document.getElementById('ligneFiche');

                divLigne.appendChild(card);
                card.appendChild(cardUp);
                card.appendChild(container);
                card.appendChild(popA);
                card.appendChild(overlay);
                overlay.appendChild(popup);
                popup.appendChild(close);
                

                // Données :
                var pole1,pole2,pole3,pole4 = ' ';

                var nompre = document.createElement('h4');
                nompre.innerHTML = data[i].nom + " " + data[i].prenom;
                
                // TEST POLES
                if(data[i].pole == 1){
                    pole1 = "Délégation à la transformation numérique";
                    var pole = document.createElement('h6');
                pole.innerHTML = '<i class="fa fa-bullseye fa-1x"></i>' +" "+ "Pole : " + pole1;
                }

                if(data[i].pole == 2){
                    pole2 = "Pôle Données";
                    var pole = document.createElement('h6');
                pole.innerHTML = '<i class="fa fa-bullseye fa-1x"></i>' +" "+ "Pole : " + pole2;
                }

                if(data[i].pole == 3){
                    pole3 = "Pôle culture Numérique";
                    var pole = document.createElement('h6');
                pole.innerHTML = '<i class="fa fa-bullseye fa-1x"></i>' +" "+ "Pole : " + pole3;
                }
                if(data[i].pole == 4){
                    pole4 = "Pôle Expérience Utilisateur";
                    var pole = document.createElement('h6');
                pole.innerHTML = '<i class="fa fa-bullseye fa-1x"></i>' +" "+ "Pole : " + pole4;
                }

               
                // TEST EQUIPE
                var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13 = '';
                if(data[i].equipe == 1){
                    e1 = "Pilotage, budget, immobilier, logistique informatique";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e1;
                }

                if(data[i].equipe == 2){
                    e2 = "Equipe Lac de données";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e2;
                }

                if(data[i].equipe == 3){
                    e3 = "Equipe Infrastructures";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e3;
                }

                if(data[i].equipe == 4){
                    e4 = "Equipe Gouvernance de la donnée";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e4;
                }

                if(data[i].equipe == 5){
                    e5 = "Equipe Datascience";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e5;
                }

                if(data[i].equipe == 6){
                    e6 = "Equipe Stratégies de valorisation";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e6;
                }

                if(data[i].equipe == 7){
                    e7 = "Equipe Accompagner à l''agilité et au DevOps";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e7;
                }

                if(data[i].equipe == 8){
                    e8 = "Equipe Mettre le Numérique au service des ressources humaines";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e8;
                }

                if(data[i].equipe == 9){
                    e9 = "Equipe Innover";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e9;
                }

                if(data[i].equipe == 10){
                    e10 = "Equipe UX et accessibilité";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e10;
                }

                if(data[i].equipe == 11){
                    e11 = "Equipe Urbanisation";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e11;
                }

                if(data[i].equipe == 12){
                    e12 = "Equipe Environnement Numérique";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e12;
                }

                if(data[i].equipe == 13){
                    e13 = "Gère equipe";
                    var equipe = document.createElement('h6');
                equipe.innerHTML = '<i class="fa fa-users fa-1x"></i>' + " " + "Equipe : " +e13;
                }

                
                

                var fonction = document.createElement('h6');
                fonction.innerHTML = '<i class="fa fa-edit fa-1x"></i>' + " "+ "Fonction : " + data[i].fonction;

                var email = document.createElement('h6');
                email.innerHTML = '<i class="fa fa-envelope fa-1x"></i>' + " " + data[i].email;

                var bureau = document.createElement('h6');
                bureau.innerHTML =  '<i class="fa fa-building fa-1x"></i>' + " " + "Bureau : " + data[i].bureau;
                
                var numero = document.createElement('h6');
                numero.innerHTML = '<i class="fa fa-phone fa-1x"></i>' + " " + data[i].numero;
                
                var linkedin = document.createElement('a');
                linkedin.setAttribute('href',data[i].linkedin);
                linkedin.innerHTML = '<i class="fa fa-linkedin fa-1x"></i>';

                /*
                var niveau = document.createElement('h6');
                niveau.innerHTML = data[i].niveau;
                */

                var photo = document.createElement('img');
                photo.src = data[i].photo;
                photo.id = "photo";

                var gif = document.createElement('img');
                gif.src = data[i].gif;
                gif.id = "gif";
                gif.className = "hide";

                // Contenu Popup - Overlay
                var info = document.createElement('p');
                info.innerHTML = data[i].info;

                var nomprePop = document.createElement('h1');
                nomprePop.innerHTML = data[i].nom + " " + data[i].prenom;

                var fonctionPop = document.createElement('h5');
                fonctionPop.innerHTML = '<i class="fa fa-edit fa-1x"></i>' + " "+ data[i].fonction;

                var photoPop = document.createElement('img');
                photoPop.src = data[i].photo;
                photoPop.id = "photo";
                
                var idCard = document.createElement('div');
                idCard.id = data[i].id;


                cardUp.appendChild(photo);
                cardUp.appendChild(gif);
                
                // Données de card
                container.appendChild(nompre);
                container.appendChild(pole);
                container.appendChild(equipe);
                container.appendChild(fonction);
                container.appendChild(email);
                //container.appendChild(Ibureau);
                container.appendChild(bureau);
                container.appendChild(numero);
                container.appendChild(linkedin);
                //container.appendChild(niveau);
                
                // Données dans popup 
                popup.appendChild(nomprePop);
                popup.appendChild(photoPop);
                popup.appendChild(fonctionPop);
                popup.appendChild(content);
                content.appendChild(info);
                

            }
            
        }
    });
});