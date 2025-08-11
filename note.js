
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');

function isEmailValid(value) {
   return EMAIL_REGEXP.test(value);
}

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'white';
  }else if(input.value!==''){
    input.style.borderColor = '#AE0303';
  }else{
    input.style.borderColor = 'white';
  }
}

input.addEventListener('input', onInput);


// Smooth Scroll
      
       const links = document.querySelectorAll(".nav-link, .nav-link2, .btn33, .hero-button");

       for (const link of links) {
       link.addEventListener("click", clickHandler);
       }

       function clickHandler(e) {
       e.preventDefault();
       const href = this.getAttribute("href");

       document.querySelector(href).scrollIntoView({
           behavior: "smooth"
       });
       }

// Button Up

       window.onscroll = function(){scrollFunction()};

       const upbuttons = document.querySelectorAll(".button-up");

       for (const upbutton of upbuttons) {
           upbutton.addEventListener("click", clickHandler);
       }

       function clickHandler(e) {
       e.preventDefault();
       const href = this.getAttribute("href");

       document.querySelector(href).scrollIntoView({
           behavior: "smooth"
       });
       }

       function scrollFunction(){
           if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
               document.getElementById('btnUp').className = 'button-up visible';
           } else {
               document.getElementById('btnUp').className = 'button-up hidden';
           }
       }
