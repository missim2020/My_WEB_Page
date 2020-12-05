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

// navigation bar

function navigate (me){
  if (me.matches){
    document.getElementById("about").href = "./about_me/about.html";
    document.getElementById("why").href = "./My_Why/why.html";
    document.getElementById("projects").href = "./My_Projects/projects.html";
  }else{
    document.getElementById("about").href = "#Main"
    document.getElementById("why").href = "#Main";
    document.getElementById("projects").href = "#projects";
  }
}

let aboutMe = window.matchMedia("(max-width: 420px)")
navigate(aboutMe)
aboutMe.addEventListener("click", navigate)


//quote

function myFunction (q){
if (q.matches) {
  document.getElementById("quote1").style.display="inline-block";
  document.getElementById("quote2").style.display="none";
}else{
  document.getElementById("quote1").style.display="none";
  document.getElementById("quote2").style.display="inline-block";
}
}

let quote = window.matchMedia("(min-width: 1500px)")
myFunction(quote) 
quote.addEventListener("change", myFunction)

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

pause.onclick = function pausePlay (){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
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
    pausePlay();
    break;
        
  }
});
