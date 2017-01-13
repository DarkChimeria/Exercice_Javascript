"use strict";
            //METTEZ TOUT LE JS DANS UN AUTRE FICHIER AFIN DE NE PAS MELANGER L'HTML ET LE JS
            //INSPIREZ-VOUS DU FICHIER ../js/regions.js
            function giveFeature(){
                var age = document.getElementById("age").value;
                var genre = document.querySelector('input[name = "genre"]:checked').value;
                var error=null;
                var type="";
                if (age >= 0 && age <= 1 ){
                    type='Vous êtes un bébé';
                }else if (age >= 1 && age <= 6 && genre == 'femme' ){
                    type='Vous êtes une jeune enfant';
                }else if (age >= 1 && age <= 6  && genre == 'homme' ){
                    type='Vous êtes un jeune enfant';
                }else if (age >= 7 && age <= 11 && genre == 'femme'){
                    type='Vous êtes une enfant qui a atteint l\'âge de raison';
                }else if (age >= 7 && age <= 11 && genre == 'homme'  ){
                    type='Vous êtes un enfant qui a atteint l\'âge de raison';
                }else if (age >= 12 && age <= 17 && genre == 'femme' ){
                    type='Vous êtes une adolescente';
                }else if (age >= 12 && age <= 17  && genre == 'homme' ){
                    type='Vous êtes un adolescent';
                }else if (age >= 17 && age <= 65 && genre == 'femme'){
                    type='Vous êtes une jeune adulte';
                }else if (age >= 17 && age <= 65  && genre == 'homme' ){
                    type='Vous êtes un jeune adulte';
                }else if (age >=66 && age <=115 && genre == 'femme'){
                    type='Vous êtes une sénior';
                }else if (age >=66 && age <=115 && genre == 'homme' ){
                    type='Vous êtes un sénior';
                }else{
                    error='Il semble y avoir un problème';
                }
                var resultH = 'Vous avez ' + age + ' an(s).' + type;
                document.getElementById("resultatage").innerHTML = error == null ? resultH: error;
            /* Indiquez par le biais d'alert ou d'un champ HTML la description qui correspond à l'âge saisi
             * 0 à 1 compris : Vous êtes un bébé.
             * 1 à 6 ans compris : Vous êtes un jeune enfant.
             * 7 à 11 ans compris : Vous êtes un enfant qui a atteint l'âge de raison.
             * 12 à 17 ans compris : Vous êtes un adolescent.
             * 17 à ???: Vous êtes un jeune adulte.
             * Supérieur à ??? : Vous êtes un sénior.
             */


            /* SUITE DE L'EXERCICE :
             * Vous pouvez aussi ajouter un radio button grâce auquel vous déterminerez le sexe de l’utilisateur. 
             * A l’aide de ternaires, vous pourrez ainsi accorder les phrases en fonction de l’utilisateur.
             */
         }



         function changeGenre(){
            debugger;
            var radiobuttons = document.getElementByName("genre");
            for (var i = 0; i < radiobuttons.length; i++){
                if (radiobuttons[i].checked){
                    genre = radiobuttons[i].value;
                    break;

                }


            }




        }
