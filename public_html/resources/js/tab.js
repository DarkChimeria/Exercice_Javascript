		var tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
		var res = "";
		var count = 0;
		for(var i=0; i <= tab.length-1; i++){
			if(i == 0){
				res = res + " " + tab[i] + "<br>";
			}else if (i>0){
				res = res + " + " + tab[i] + "<br>";
			}else{


			}
		// alert(affichage);
		// count += affichage[i];
		count += parseInt(tab[i]);
		// alert(parseInt(affichage[i]));
	}
	resultat = res + "||||||||||<br>" + count;
	document.getElementById("tab").innerHTML = resultat;
		// document.getElementById("tab").innerHTML = count;