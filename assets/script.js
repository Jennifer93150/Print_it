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

// Ajout des dots
for(var i=0; i < nbImages; i++)
{
	var newDiv = document.createElement("div");
	wrapperDots.append(newDiv);
	newDiv.classList.add("dot");
}

let arrayDots = document.querySelectorAll('.dot');

// Evènement sur la flèche précédente
document.getElementById("prev").addEventListener("click", function() {
	arrayDots[count].classList.remove('dot_selected');
	if(count > 0){
		count--;
	}else{
		count = nbImages - 1;
	}
	arrayDots[count].classList.add('dot_selected');
	document.getElementById("image").setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
	document.getElementById("text-on-image").innerHTML = slides[count].tagLine;
});

// Evènement sur la flèche suivante
document.getElementById("next").addEventListener("click", function() {
	arrayDots[count].classList.remove('dot_selected');
	if(count < nbImages - 1 ){
		count++;
	}else{
		count = 0;
	}
	arrayDots[count].classList.add('dot_selected');
	document.getElementById("image").setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
	document.getElementById("text-on-image").innerHTML = slides[count].tagLine;
});


