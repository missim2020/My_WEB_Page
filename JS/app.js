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

const paralax = document.getElementById("welcome-section");

window.addEventListener("scroll", function(){
let offset=window.pageYOffset;
paralax.style.backgroundPositionY=offset *0.1 +"px";

})