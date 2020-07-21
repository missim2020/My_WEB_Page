window.onscroll = () => {
    const nav = document.querySelector('#header');
   
    if(this.scrollY <= 500) {
        nav.className = ''
        document.getElementById("HRnav").style.visibility="visible";
    } else {
        header.className = 'scroll';
        document.getElementById("HRnav").style.visibility="hidden";
  }
}

//image carousel

const prev = document.getElementById("btn-prev"),
      next = document.getElementById("btn-next"),
      slides = document.querySelectorAll(".slide"), // we're getting all slides in one go
      dots = document.querySelectorAll(".dot"),
      pause=document.getElementById("pause");  

let index = 0;


const activeSlide = n => {
for (slide of slides){
  slide.classList.remove("active");
}
slides[n].classList.add("active");
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
let interval = setInterval(nextSlide, 6000);

function playSlideshow() {
  pause.innerHTML = 'Pause';
  playing = true;
  interval = setInterval(nextSlide,6000);
}
function pauseSlideshow() {
  pause.innerHTML = 'Play';
  playing = false;
  clearInterval(interval);
}

pause.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};


next.addEventListener("click" , nextSlide);
prev.addEventListener("click" , prevSlide);

document.addEventListener("keydown", function(event){

  switch (event.keyCode){
    case 37:
      prevSlide();
      break;
      case 39:
        nextSlide();
        break;
        
  }
});
