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