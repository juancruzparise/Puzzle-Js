// Variables que se usan en el codigo
var pics = [0,1,2,3,4,5,6,7,8,9,10,11];
var numClick=0;
var position1;
var audiowin = document.getElementById("audiowin");

// Llamo  a las funciones 
disorder();
reset();
uncheckAll();

// Funcion para desordenar las fotos
function disorder() {
	pics.sort(function() {return Math.random() - 0.5});
	console.log(pics);
}
function uncheckAll() {
	for (var i=0;i<=11;i++) {
		document.getElementById("img_"+i).style.border = "solid 2px white";
	}
}
//Función para hacer click
function selectImage(site) {
	numClick = numClick + 1;

	if (numClick == 1) {
		position1 = site;
		uncheckAll();
		document.getElementById("img_"+site).style.border = "solid 2px #5C239E";

	}

	if (numClick==2) {
		var position2 = site;
		var contenido = pics[position1];
		pics[position1] = pics[position2];
		pics[position2] = contenido;
		numClick=0;
		uncheckAll();
		reset();
		var fin = youWin();
		if (fin == true) {
				audiowin.play();
				setTimeout(function(){
                    alert("You win , Please click restart to play again "); 
                }, 200);
		}
	}
}
// Funcion para saber si ganaste
function youWin() {
	var fin = true;
	for (var i=0;i<=11;i++) {
		if (pics[i] != i) {
			fin = false;
		}
	}
	return fin;
	
}

function reset() {
	for (var site=0;site<=11;site++) {
		var imagen = pics[site];
		document.getElementById("img_"+site).src = "image/images1/image_"+imagen+".jpg";
	}
}

