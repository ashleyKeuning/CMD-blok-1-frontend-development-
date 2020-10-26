/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true,
    white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
/*
console.log(slides)

var track = document.querySelector('.carousel__track');
var slides = Array ['voorpaginapic2.jpg','voorpaginapic3.jpg'];

//buttons
var nextButton = document.querySelector ('.carousel__button-right');
var prevButton = document.querySelector ('.carousel__button-left');

//slides arrangement
var setSlidePosition = (slide, index) => 
{slide.style.left = slideWidth * index + 'px;'};


//eventlisteners
nextButton.addEventListener ('click', e => {
    var currentSlide = track.querySelector ('.current-slide')
    console.log(slide);
    var nextSlide  = currentSlide.nextElementSibling;
    var amountToMove = nextSlide.style.left;
    //next slide
    
    track.style.transform = 'translateX(-' + amountToMove +')';
currentSlide.classlist.remove('current-slide');
    nextSlide.classList.add('.current-slide');
})
*/

/*
var detailAfbeelding = document.querySelector ('.detailpic')
var music = document.querySelector('.music');


function playMusic() {
Function.play()
 music.play();

}

detailAfbeelding.addEventListener('click', playMusic);

console.log(music);
*/
/*
var button = document.getElementById("button");
var audio = document.getElementById("player");
                        
function musicPlayer(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "Pause";
      consolge.log(play)
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }

button.addEventListener("click", musicPlayer);*/


var audio = document.getElementById ('audio');
var playPauseBut = document.getElementById ('detailpic');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
    
      
    }
    else{
        count = 0;
        audio.pause();
    }
}

playPauseBut.addEventListener("click", playPause);




