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

//Catching butterflies

const butterfly1 = document.getElementById("but1")
const butterfly2 = document.getElementById("but2")
const butterfly3 = document.getElementById("but3")

const disappear1=()=> {
butterfly1.style.display="none"
}

const disappear2=()=> {
 butterfly2.style.display="none"
}

const disappear3=()=> {
butterfly3.style.display="none"
}
      
butterfly1.addEventListener("click", disappear1);
butterfly2.addEventListener("click", disappear2);
butterfly3.addEventListener("click", disappear3);









// navigation bar for mobile devices

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


// visability of page parts on mobile devices

function visible (v) {
  if(v.matches){
document.getElementById("aboutMe").style.display="none";
document.getElementById("Why").style.display="none";
document.getElementById("Projects").style.display="none";
  }else {
    document.getElementById("aboutMe").style.display="inline-block";
    document.getElementById("Why").style.display="grid";
    document.getElementById("Projects").style.display="inline-block";
  }
}

let visability = window.matchMedia("(max-width: 420px)")
visible(visability)
visability.addEventListener("change", visible)

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
    //pausePlay();
    break;
        
  }
});
