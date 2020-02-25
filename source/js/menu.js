const sectionTopBar = document.querySelector(`.section-top-bar`);
const navMain = sectionTopBar.querySelector(`.section-top-bar__nav`);
const navToggle = sectionTopBar.querySelector(`.section-top-bar__nav--toggle`);

navMain.classList.remove(`section-top-bar__nav--nojs`);
navMain.classList.remove(`section-top-bar__nav--opened`);
navMain.classList.add(`section-top-bar__nav--closed`);
sectionTopBar.style.position = `absolute`;

navToggle.addEventListener(`click`, function() {
  if (navMain.classList.contains(`section-top-bar__nav--closed`)) {
    navMain.classList.remove(`section-top-bar__nav--closed`);
    navMain.classList.add(`section-top-bar__nav--opened`);
    sectionTopBar.style.position = `relative`;
  } else {
    navMain.classList.add(`section-top-bar__nav--closed`);
    navMain.classList.remove(`section-top-bar__nav--opened`);
    sectionTopBar.style.position = `absolute`;
  }
});
