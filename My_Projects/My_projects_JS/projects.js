
  //image carousel

const prev = document.getElementById("btn-prev"),
next = document.getElementById("btn-next"),
slides = document.querySelectorAll(".slide"), // we're getting all slides in one go
dots = document.querySelectorAll(".dot"),
pause=document.getElementById("pause"),
descriptionText = document.getElementById("description"),
textHolder=document.getElementById("text-bar");

let index = 0;
let description = [
  "Random facts about me", 
  "I like baking cakes more than eating them",
  "I used to ice skate across a frozen lake to go to school in the winter", 
  "I grew up in a small village with no running hot water and only an outdoor W.C.", 
  "I know how to milk a cow", 
  "After I finished school I was accepted by a military school, but decided to go elsewhere",
  "At school I was removed from the choir after the teacher found out how bad my singing voice was", 
  "My favourite movie is '3 idiots'"
  ]

  const activeSlide = n => {
    for (slide of slides){
      slide.classList.remove("active");
    }
    slides[n].classList.add("active");
    descriptionText.innerHTML = description[index];
    if (index>0){
      textHolder.style.display="block"
    }else{
      textHolder.style.display="none"
    }
    }
    

const activeDot = n => {
for (dot of dots){
dot.classList.remove("active");
}
dots[n].classList.add("active");
}


//tikrina paskutini slaida. Jei slaidas yra paskutinis, tai pereina i pirma,
//jei ne tai tesia toliau. t.y. prideda po viena

const nextSlide = () => {
if(index==slides.length-1){
index=0
activeSlide(index);
activeDot(index);
}else{
index++;
activeSlide(index);
activeDot(index);

}
}

const prevSlide = () => {
if(index==0){
index=slides.length-1
activeSlide(index);
activeDot(index);
}else{
index--;
activeSlide(index);
activeDot(index);
}
}


dots.forEach((item, indexDot)=> {
item.addEventListener("click",()=>{
index=indexDot;
activeSlide(index);
activeDot(index);
});
})

let playing=true;
let interval = setInterval(nextSlide, 5000);

function playSlideshow() {
pause.innerHTML = 'Pause';
playing = true;
interval = setInterval(nextSlide,5000);
}
function pauseSlideshow() {
pause.innerHTML = 'Play';
playing = false;
clearInterval(interval);
}

let stopPlay = pause.onclick; 

pause.onclick = ()=>{
	if(playing){ 
    pauseSlideshow(); 
  } else {
  playSlideshow();  
}
};


next.addEventListener("click" , nextSlide);
prev.addEventListener("click" , prevSlide);

document.addEventListener("keydown", function(event){

  switch (event.key){
    case "ArrowLeft":
    prevSlide();
    break;
    case "ArrowRight":
    nextSlide();
    break;
    case " ":   
    stopPlay;     
    break;
        
  }
});
