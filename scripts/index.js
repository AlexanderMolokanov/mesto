const buttonProfileEdit = document.querySelector('.profile__edit');
const popupButtonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const elementHeart = document.querySelectorAll('.element__heart');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name-input');
let jobInput = document.querySelector('#job-input');

function clickPopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popup.classList.toggle('popup_opened');
    //document.body.style.overflow = 'hidden';
    //document.body.style.overflow = '';
}

function closePopup() {
    popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
};

buttonProfileEdit.addEventListener('click', clickPopup);
popupButtonClose.addEventListener('click', clickPopup);
formElement.addEventListener('submit', formSubmitHandler);


// document.addEventListener('keydown', function (event) {
//     if (event.code === 'Escape') {
//         closePopup();
//     }
// });

// const popupButtonSave = document.querySelector(selectors: '.edit__button-save');
// const buttonProfileAdd = document.querySelector(selectors: '.profile__add');
//popup.addEventListener('click', closePopup);

// function logCharacters(element) {
//     for (let index = 0; index < elementHeart.length; index += 1) {
//         element[index].addEventListener('click', function () {
//             element[index].classList.toggle('element__heart_like');
//         });
//     }
// }

// logCharacters(elementHeart)