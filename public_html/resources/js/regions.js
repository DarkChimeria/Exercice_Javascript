        "use strict";
            //METTEZ TOUT LE JS DANS UN AUTRE FICHIER AFIN DE NE PAS MELANGER L'HTML ET LE JS
            //INSPIREZ-VOUS DU FICHIER ../js/regions.js
            "use strict";

            var generateDepartmentList = new Array("Ain", "Aisne", "Allier", "Alpes-de-Haute-Provence", "Alpes-Maritimes", "Ardèche", "Ardennes", "Ariège", "Aube", "Aude", "Aveyron", "Bas-Rhin", "Bouches-du-Rhône", "Calvados", "Cantal", "Charente", "Charente-Maritime", "Cher", "Corrèze", "Corse-du-Sud", "Côte-d'Or", "Côtes-d'Armor", "Creuse", "Deux-Sèvres", "Dordogne", "Doubs", "Drôme", "Essonne", "Eure", "Eure-et-Loir", "Finistère", "Gard", "Gers", "Gironde", "Guadeloupe", "Guyane", "Haut-Rhin", "Haute-Corse", "Haute-Garonne", "Haute-Loire", "Haute-Marne", "Haute-Saône", "Haute-Savoie", "Haute-Vienne", "Hautes-Alpes", "Hautes-Pyrénées", "Hauts-de-Seine", "Hérault", "Ille-et-Vilaine", "Indre", "Indre-et-Loire", "Isère", "Jura", "La Réunion", "Landes", "Loir-et-Cher", "Loire", "Loire-Atlantique", "Loiret", "Lot", "Lot-et-Garonne", "Lozère", "Maine-et-Loire", "Manche", "Marne", "Martinique", "Mayenne", "Mayotte", "Meurthe-et-Moselle", "Meuse", "Morbihan", "Moselle", "Nièvre", "Nord", "Oise", "Orne", "Paris", "Pas-de-Calais", "Puy-de-Dôme", "Pyrénées-Atlantiques", "Pyrénées-Orientales", "Rhône", "Saône-et-Loire", "Sarthe", "Savoie", "Seine-et-Marne", "Seine-Maritime", "Seine-Saint-Denis", "Somme", "Tarn", "Tarn-et-Garonne", "Territoire de Belfort", "Val-d'Oise", "Val-de-Marne", "Var", "Vaucluse", "Vendée", "Vienne", "Vosges", "Yonne", "Yvelines");
            var d = document.departmentListForm.departmentList;
            for (var i = 0; i < generateDepartmentList.length; i++)
            {
                d.length++;
                d.options[d.length - 1].text = generateDepartmentList[i];
                // alert(generateDepartmentList[i])
            }

            function getRegion(department){
                var region = "";
                var error = null;

                
                if (department == "Aisne" || department == "Nord" || department == "Oise" || department == "Pas-de-Calais" || department == "Somme"){
                    region = "Hauts-de-France";
                }
                else if(
                    department == "Calvados" || department == "Eure" || department == "Manche"  || department == "Orne" || department == "Seine-Maritime"){
                    region = "Normandie";
            }
            else if(
                department == "Paris" || department == "Seine-et-Marne" || department == "Yvelines" || department == "Essonne" || department == "Hauts-de-Seine" || department == "Seine-Saint-Denis" || department == "Val-de-Marne" || department == "Val-d'Oise"){
                region = "Île-de-France";
        }
        else if(
            department == "Ardennes" || department == "Aube" || department == "Marne" || department == "Haute-Marne" || department == "Meurthe-et-Moselle" || department == "Meuse" || department == "Moselle" || department == "Bas-Rhin" || department == "Haut-Rhin" || department == "Vosges"){
            region = "Grand Est";
    }
    else if(
        department == "Côtes-d'Armor" || department == "Finistère" || department == "Ille-et-Vilaine" || department == "Morbihan"){
        region = "Région Bretagne";
}
else if(
    department == "Loire-Atlantique" || department == "Maine-et-Loire" || department == "Mayenne" || department == "Sarthe" || department == "Vendée"){
    region = "Pays de la Loire";
}
else if(
    department == "Cher" || department == "Eure-et-Loir" || department == "Indre" || department == "Indre-et-Loire" || department == "Loir-et-Cher" || department == "Loiret"){
    region = "Centre-Val de Loire";
}
else if(
    department == "Côte-d'Or" || department == "Doubs" || department == "Jura" || department == "Nièvre" || department == "Haute-Saône" || department == "Saône-et-Loire" || department == "Yonne" || department == "Territoire de Belfort"){
    region = "Bourgogne-Franche-Comté";
}
else if(
    department == "Charente" || department == "Charente-Maritime" || department == "Corrèze" || department == "Creuse" || department == "Dordogne" || department == "Gironde" || department == "Landes" || department == "Lot-et-Garonne" || department == "Pyrénées-Atlantiques" || department == "Deux-Sèvres" || department == "Vienne" || department == "Haute-Vienne"){
    region = "Nouvelle-Aquitaine";
}
else if(
    department == "Ain" || department == "Allier" || department == "Ardèche" || department == "Cantal" || department == "Drôme" || department == "Isère" || department == "Loire" || department == "Haute-Loire" || department == "Puy-de-Dôme" || department == "Rhône" || department == "Métropole de Lyon" || department == "Savoie" || department == "Haute-Savoie"){
    region = "Auvergne-Rhône-Alpes";
}
else if(
    department == "Ariège" || department == "Aude" || department == "Aveyron" || department == "Gard" || department == "Haute-Garonne" || department == "Gers" || department == "Hérault" || department == "Lot" || department == "Lozère" || department == "Hautes-Pyrénées" || department == "Pyrénées-Orientales" || department == "Tarn" || department == "Tarn-et-Garonne"){
    region = "Occitanie";
}
else if(
    department == "Alpes-de-Haute-Provence" || department == "Hautes-Alpes" || department == "Alpes-Maritimes" || department == "Bouches-du-Rhône" || department == "Var" || department == "Vaucluse"){
    region = "Provence-Alpes-Côte dAzur";
}
else if(
    department == "Guyane" || department == "Mayotte" || department == "La Réunion" || department == "Guadeloupe" || department == "Martinique"){
    region = department;
}
else if(department == "Corse")
{
    region = "Corse ";
}
else{

    error;
}

var resultOK = "Vous résidez dans la région " + region + ".";
department != null ? document.getElementById("resultat").innerHTML = resultOK: error;
}
