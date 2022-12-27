const teamPersonInfo = body.querySelectorAll('.team__person-info');
const popupCloseIcone = body.querySelector('.popup__close-icone');
const popupContainer = body.querySelector('.popup__container');

popupCloseIcone.addEventListener('click', function (evt) {
  evt.preventDefault();
  body.classList.remove('hide-overflow');
  popupContainer.classList.remove('popup__container--active');
});

teamPersonInfo.forEach((person) => {
  person.addEventListener('click', function () {
    popupContainer.classList.add('popup__container--active');
    body.classList.add('hide-overflow');
  });
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    popupContainer.classList.remove('popup__container--active');
    body.classList.remove('hide-overflow');
  }
});
