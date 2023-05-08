let colors = [
    '#A2A2A2',
    '#097158',
    '#703128',
    '#F0C482',
    '#B3837C',
    '#C6B5A9',
    '#584848',
    '#A0A4AD'
]

function hoverIn(x) {
    v = Math.round(Math.random() * colors.length -.5);
    colorIndex = colors[v];
    x.style.color = colorIndex;
    x.style.transition = '.3s ease';
}

// function hoverOut(x) {
//   x.transition = '20s ease';
//   x.style.color = 'black';
// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// function awardsHover1(x) {
//   x.style.backgroundColor = '#B3837C';
//   x.style.animation = 'slide 2s ease-in-out';
// }

// function awardsOut1(x) {
//   x.style.backgroundColor = '#e5e5e5';
// }

