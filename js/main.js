let slideIndex = 1;
let lastSlide = 1;
const slides = document.getElementsByClassName('mySlides');
const models = document.getElementsByClassName('md');
const captions = document.getElementsByClassName('cp');
const cog = document.getElementById('holder');
let dir = 0;
const bg = document.getElementById('bg');

function plusSlides(n) {
  lastSlide = slideIndex;
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  lastSlide = slideIndex;
  showSlides((slideIndex = n));
}

function change(c) {
  bg.style.backgroundColor = c;
}

function showSlides(n) {
  slides[lastSlide - 1].classList.remove('fade');
  slides[lastSlide - 1].classList.add('fadeOut');
  dir -= 20;
  for (i = 0; i < models.length; i++) {
    models[i].classList.remove('on');
    captions[i].classList.remove('on');
  }
  holder.style.transform = 'rotate(' + dir + 'deg)';
  setTimeout(() => {
    var i;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides[lastSlide - 1].classList.remove('fadeOut');
    slides[lastSlide - 1].classList.add('hide');
    slides[slideIndex - 1].classList.add('fade');
    models[slideIndex - 1].classList.add('on');
    captions[slideIndex - 1].classList.add('on');
  }, 280);
}
