const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

 arrow_left = document.querySelector('.arrow_left');
 arrow_right = document.querySelector('.arrow_right');

let click = 0;	

/*** fonction pour changer image et texte du carroussel ***/
 function carroussel(){
	let image =document.querySelector('.banner-img');
	image.src=slides[click].image;
	let banner = document.getElementById('banner');
	let texte =banner.querySelector('p');
	texte.innerHTML=slides[click].tagLine;
  }; 
 
/*** creation des points du carroussel ***/
 const element =document.querySelector('.dots');

for ( let i = 0 ; i< slides.length ; i++){
	const bubble = document.createElement ('div');
	bubble.classList.add('dot');
	element.appendChild (bubble);
};

/*** Création d'un tableau ***/
const container = document.querySelector('.dots');
let tab = Array.from(container.children);	
/***  ajouter la classe dot_selected au premier point ***/
tab[0].classList.add('dot_selected');

/*** ecouteur d'évènement sur la flèche gauche***/
arrow_left.addEventListener('click' , function(){

tab[click].classList.remove('dot_selected');

 click--;
 
	if (click < 0){
		click=slides.length-1;		
	};
	tab[click].classList.add('dot_selected');
	
	carroussel();
});

/*** ecouteur d'évènement sur la flèche droite ***/
arrow_right.addEventListener('click' , function(){

  tab[click].classList.remove('dot_selected');

  click++;

	if (click >= slides.length){
		click=0;
	}
    carroussel();

	tab[click].classList.add('dot_selected');

});

