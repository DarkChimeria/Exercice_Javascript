function Produit(nom, description, poids, dimension, photo){
	this.nom = nom;
	this.description = description;
	this.poids = poids;
	this.dimension = dimension;
	this.photo = photo;
	// AJOUT A LA MAIN
	// thisaddFeature = function(name,valule){
	// 	this[name]=name;
	// }
}

var prod = new Produit('Marque','Description du produit','118kg','1m60','../img/1.jpg');
document.getElementById("item1").innerHTML = prod.nom;
document.getElementById("item2").innerHTML = prod.description;
document.getElementById("item3").innerHTML = prod.poids;
document.getElementById("item4").innerHTML = prod.dimension;
var img = new Image();
img.src= prod.photo;
document.getElementById("img").src = img.src;



function initialiseProduitFiche(param){
Object.key(param).foreach(function (key){
	if("photo" != key){
		var text = undefined != param[key] ? param[key] : "";
		document.getElementById(key).innerHTML = text;

	} else {
		document.getElementById(key).src = param[key];

	}
});
}
initialiseProduitFiche(prod);
