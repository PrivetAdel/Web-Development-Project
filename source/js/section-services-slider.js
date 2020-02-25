'use strict';

(function () {
  const servicesCards = document.querySelector(`.section-services__cards`)
  const slides = servicesCards.querySelectorAll(`.services-card`);
  const next = servicesCards.querySelector(`.next`);
  const previous = servicesCards.querySelector(`.previous`);
  let currentSlide = 0;

  servicesCards.classList.remove(`section-services__cards--nojs`);

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = `services-card`;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = `services-card services-card--showing`;
  }

  next.addEventListener(`click`, nextSlide);
  previous.addEventListener(`click`, previousSlide);
})();
