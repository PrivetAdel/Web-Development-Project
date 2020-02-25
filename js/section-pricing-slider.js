'use strict';

(function () {
  const tariffs = document.querySelector(`.tariffs`)
  const slides = tariffs.querySelectorAll(`.tariffs__card`);
  const next = tariffs.querySelector(`.next`);
  const previous = tariffs.querySelector(`.previous`);
  let currentSlide = 0;

  tariffs.classList.remove(`tariffs--nojs`);

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = `tariffs__card`;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = `tariffs__card tariffs__card--showing`;
  }

  next.addEventListener(`click`, nextSlide);
  previous.addEventListener(`click`, previousSlide);
})();
