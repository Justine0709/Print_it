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

 function carroussel(){
	let image =document.querySelector('.banner-img');
	image.src=slides[click].image;
	let banner = document.getElementById('banner');
	let texte =banner.querySelector('p');
	texte.innerHTML=slides[click].tagLine;
  }; 
 
 const element =document.querySelector('.dots');
	
for ( let i = 0 ; i< slides.length ; i++){
	const bubble = document.createElement ('div');
	bubble.classList.add('dot');
	element.appendChild (bubble);
};

const container = document.querySelector('.dots');
let tab = Array.from(container.children);	

tab[0].classList.add('dot_selected');

arrow_left.addEventListener('click' , function(){

tab[click].classList.remove('dot_selected');
console.log('avant decrémentation',click);

 click--;
 console.log('aprés decrémentation',click);

	if (click < 0){
		click=slides.length-1;		
	};
	console.log('aprés condition',click);

	tab[click].classList.add('dot_selected');
	
	carroussel();
});

arrow_right.addEventListener('click' , function(){

  tab[click].classList.remove('dot_selected');

  click++;

	if (click >= slides.length){
		click=0;
	}
    carroussel();

	tab[click].classList.add('dot_selected');

});

