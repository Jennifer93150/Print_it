const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let wrapperDots = document.getElementById("dots");
const nbImages = slides.length;
const prevImage = document.querySelector('arrow_left');
const nextImage = document.querySelector('arrow_right');
let count = 0;

// Ajout des dots en fonction du nombre d'images
for(var i=0; i < nbImages; i++)
{
	var newDiv = document.createElement("div");
	wrapperDots.append(newDiv);
	newDiv.classList.add("dot");
}

// Selection des dots 
let arrayDots = document.querySelectorAll('.dot');

// Premier dot en blanc
if(count === 0 && !arrayDots[count].classList.contains('dot_selected')){
	arrayDots[count].classList.add('dot_selected');
}

// Evènement sur la flèche précédente
document.getElementById("prev").addEventListener("click", function() {
	// Suppression class dot_selected
	arrayDots[count].classList.remove('dot_selected');
	//si nbr count est sup à 0
	if(count > 0){
		//Décrémente
		count--;
	}else{
		//Sinon count sera = nbr image -1
		count = nbImages - 1;
	}
	// Ajout class dot_selected
	arrayDots[count].classList.add('dot_selected');
	// Ajout src image en fonction du nbr de l'image
	document.getElementById("image").setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
	// Ajout du texte 
	document.getElementById("text-on-image").innerHTML = slides[count].tagLine;
});

// Evènement sur la flèche suivante
document.getElementById("next").addEventListener("click", function() {
	// Suppression class dot_selected
	arrayDots[count].classList.remove('dot_selected');
	//si nbr count est inf au nbr image -1
	if(count < nbImages - 1 ){
		// Incrémente
		count++;
	}else{
		//Sinon count sera = 0
		count = 0;
	}
	// Ajout class dot_selected
	arrayDots[count].classList.add('dot_selected');
	// Ajout src image en fonction du nbr de l'image
	document.getElementById("image").setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
	// Ajout du texte 
	document.getElementById("text-on-image").innerHTML = slides[count].tagLine;
});


