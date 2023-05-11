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
	var image =document.querySelector('.banner-img');
	image.src=slides[click].image;
	let banner = document.getElementById('banner');
	let texte =banner.querySelector('p')
	texte.innerHTML=slides[click].tagLine;
  }; 
 
  const element =document.querySelector('.dots');
	
for ( let i = 0 ; i< slides.length ; i++){
	const bubble = document.createElement ('div');
	bubble.classList.add('dot');
	element.appendChild (bubble);
};

const container = document.querySelector('.dots');
let elements = Array.from(container.children);	
elements[0].classList.add('dot_selected');

arrow_left.addEventListener('click' , function(){
 click--;
	if (click < 0){
		click=slides.length-1;		
	}
	carroussel();
	elements[click].classList.add('dot_selected');
	

	if(click == slides.length-1){
		indexbubble=0;
	}
	else {
		indexbubble=click+1;
	}
  elements[indexbubble].classList.remove('dot_selected');
});

arrow_right.addEventListener('click' , function(){
	if (click >= slides.length-1){
		click=-1;
	}
	click++;

    carroussel();

	elements[click].classList.add('dot_selected');
	let indexbubble;
	if(click == 0){
		indexbubble=slides.length-1;
	}
	else {
		indexbubble=click-1;
	}
	console.log(indexbubble);
	console.log(click);
	elements[indexbubble].classList.remove('dot_selected');
});

