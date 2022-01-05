const buttonProfileEdit = document.querySelector('.profile__edit');
// const buttonProfileAdd = document.querySelector(selectors: '.profile__add');
// const popupButtonSave = document.querySelector(selectors: '.edit__button-save');
const popupButtonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const popupButtonActiveClass = 'popup_opened';

const elementHeart = document.querySelectorAll('.element__heart');
const elementHeartBlack = document.querySelector('.element__heart_black');
const elementHeartBlackClass = 'element__heart_black';

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#name-input');
let jobInput = document.querySelector('#job-input');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function logCharacters(elementHeart) {
    for (let index = 0; index < elementHeart.length; index += 1) {
        //console.log(elementHeart[index]);
        elementHeart[index].addEventListener('click', function () {
            elementHeart[index].classList.toggle(elementHeartBlackClass);
        });
    }
}

logCharacters(elementHeart)

function openPopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popup.classList.add(popupButtonActiveClass);
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    popup.classList.remove(popupButtonActiveClass);
    document.body.style.overflow = '';
}

// elementHeartBlack.addEventListener('click', function () {
//     elementHeart.classList.remove(elementHeartBlackClass);
// });

buttonProfileEdit.addEventListener('click', function () {
    openPopup();
});

popupButtonClose.addEventListener('click', function () {
    closePopup();
});

function formSubmitHandler(evt) {
    evt.preventDefault();

    const profileTitle = document.querySelector('.profile__title');
    const profileSubtitle = document.querySelector('.profile__subtitle');

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);


