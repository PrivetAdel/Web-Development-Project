const goTopBtn = document.querySelector(`.back-to-top`);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add(`back-to-top--show`);
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove(`back-to-top--show`);
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

window.addEventListener(`scroll`, trackScroll);
goTopBtn.addEventListener(`click`, backToTop);
