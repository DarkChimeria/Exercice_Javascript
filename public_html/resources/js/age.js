"use strict";
            //METTEZ TOUT LE JS DANS UN AUTRE FICHIER AFIN DE NE PAS MELANGER L'HTML ET LE JS
            //INSPIREZ-VOUS DU FICHIER ../js/regions.js
            function giveFeature(age){
                var age;
                var error=null;
                var type="";
                if (age >= 0 && age <= 1 ){
                    type='Vous êtes un bébé';
                }else if (age >= 1 && age <= 6 ){
                    type='Vous êtes un jeune enfant';
                }else if (age >= 7 && age <= 11 ){
                    type='Vous êtes un enfant qui a atteint l\'âge de raison';
                }else if (age >= 12 && age <= 17 ){
                    type='Vous êtes un adolescent';
                }else if (age >= 17 && age <= 65 ){
                    type='Vous êtes un jeune adulte';
                }else if (age >=66 && age <=115){
                    type='Vous êtes un sénior';
                }else{
                    error='Il semble y avoir un problème';
                }
                var resultOK = 'Vous avez ' + age + ' an(s).' + type;
                document.getElementById("resultatage").innerHTML = error == null ? resultOK: error;
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
