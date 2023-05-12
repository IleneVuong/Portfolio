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

// portfolio section in index
function showImage1() {
  let image = document.getElementById("reduce-img");
  image.style.display = "block";
  image.style.animation = "fadeIn .35s";
}
function hideImage1() {
  let image = document.getElementById("reduce-img");
  image.style.animation = "fadeOut .35s";
  setTimeout(delay1, 300);
}
function delay1() {
  let image = document.getElementById("reduce-img");
  image.style.display = "none";
}

function showImage2() {
  let image = document.getElementById("dinosaur");
  image.style.display = "block";
  image.style.animation = "fadeIn .35s";
}
function hideImage2() {
  let image = document.getElementById("dinosaur");
  image.style.animation = "fadeOut .35s";
  setTimeout(delay2, 300);
}
function delay2() {
  let image = document.getElementById("dinosaur");
  image.style.display = "none";
}

function showImage3() {
  let image = document.getElementById("veldt-img");
  image.style.display = "block";
  image.style.animation = "fadeIn .35s";
}
function hideImage3() {
  let image = document.getElementById("veldt-img");
  image.style.animation = "fadeOut .35s";
  setTimeout(delay3, 300);
}
function delay3() {
  let image = document.getElementById("veldt-img");
  image.style.display = "none";
}

function showImage4() {
  let image = document.getElementById("coco-img");
  image.style.display = "block";
  image.style.animation = "fadeIn .35s";
}
function hideImage4() {
  let image = document.getElementById("coco-img");
  image.style.animation = "fadeOut .35s";
  setTimeout(delay4, 300);
}
function delay4() {
  let image = document.getElementById("coco-img");
  image.style.display = "none";
}

// function change(x) {
//   x.style.animation = "colorSwitch .3s";
// }

function happen() {
  let x = document.getElementsByClassName("awards1");
  x.style.animation = "slide 1s";
}