const btnWarning = document.querySelectorAll(`.btn__warning`);
const popup = document.querySelector(`.pop-up__content`);
const overlay = document.querySelector(`.pop-up__overlay`);

const openPopup = function () {
  popup.classList.add(`pop-up__content--show`);
  overlay.classList.add(`pop-up__overlay--show`);
}

const closePopup = function () {
  popup.classList.remove(`pop-up__content--show`);
  overlay.classList.remove(`pop-up__overlay--show`);
}

for (let i = 0; i < btnWarning.length; i++) {
  btnWarning[i].addEventListener(`click`, function () {
    openPopup();
  });

  overlay.addEventListener(`click`, closePopup);

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains(`pop-up__content--show`)) {
        closePopup();
      }
    }
  });
}
