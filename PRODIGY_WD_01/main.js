function toggleMenu() {
    var navItems = document.getElementById('nav-items');
    navItems.classList.toggle('active');
}
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slidesLength = slides.length;

let activeSlideIndex = 0;

const moveToSlide = (swap) => {
  if (sliderContainer.classList.contains('slider-locked')) return;

  activeSlideIndex = (activeSlideIndex + swap + slidesLength) % slidesLength;

  sliderContainer.classList.add('slider-locked');

  slides.forEach((slide, index) => {
    slide.classList.toggle('scrolling_active', index === activeSlideIndex);
  });
}

const onTransitionEnd = () => {
  sliderContainer.classList.remove('slider-locked');
}

const onScroll = (event) => {
  event.preventDefault();
  const swap = Math.sign(event.deltaY);
  moveToSlide(swap);
}

document.addEventListener('wheel', onScroll);
sliderContainer.addEventListener('transitionend', onTransitionEnd);