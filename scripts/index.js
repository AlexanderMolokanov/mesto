const buttonProfileEdit = document.querySelector('.profile__edit');
const popupButtonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');

const elementHeart = document.querySelectorAll('.element__heart');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonPlaceAdd = document.querySelector('.profile__add');
const popupPlaceAdd = document.querySelector('#add_place');
const placeButtonClose = document.querySelector('#place-close-button');

const popupImageAdd = document.querySelector('#popup-image')
const popupImage = document.querySelector('#image-1');
const popupImageClose = document.querySelector('#popup__image-close-button');


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

function openPopup() {
    popupPlaceAdd.classList.toggle('popup_opened');
}

function shiftPopupImage() {
    popupImageAdd.classList.toggle('popup_opened');
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

buttonPlaceAdd.addEventListener('click', openPopup);
placeButtonClose.addEventListener('click', openPopup);

popupImage.addEventListener('click', shiftPopupImage);
popupImageClose.addEventListener('click', shiftPopupImage);

function logCharacters(element) {
    for (let index = 0; index < elementHeart.length; index += 1) {
        element[index].addEventListener('click', function () {
            element[index].classList.toggle('element__heart_like');
        });
    }
}

logCharacters(elementHeart)



// document.addEventListener('keydown', function (event) {
//     if (event.code === 'Escape') {
//         closePopup();
//     }
// });

// const popupButtonSave = document.querySelector(selectors: '.edit__button-save');
// const buttonProfileAdd = document.querySelector(selectors: '.profile__add');
//popup.addEventListener('click', closePopup);
// export const Cards = [
//     {
//         name: "Дальний восток",
//         link: "https://drive.google.com/file/d/1z-vIjHjRQSJ5HMAA23lBV7WFJqNLyw8j/view?usp=sharing",
//     },
//     {
//         name: "Домбай",
//         link: "https://drive.google.com/uc?export=download&id=19GpMhC0OM20Kicd9koU2uzn639iZfYye",
//     },
//     {
//         name: "Эльбрус",
//         link: "https://drive.google.com/uc?export=download&id=1KtjgpgRM64pDjC5xTbCKqeDjThm2c8lc",
//     },
//     {
//         name: "Карачаевск",
//         link: "https://drive.google.com/uc?export=download&id=1jsh4Jjoxy698UIEZXqvIy69JUvEV-rlL",
//     },
//     {
//         name: "Кольчугино",
//         link: "https://drive.google.com/uc?export=download&id=1jsh4Jjoxy698UIEZXqvIy69JUvEV-rlL",
//     },
//     {
//         name: "Москва",
//         link: "https://drive.google.com/uc?export=download&id=1jsh4Jjoxy698UIEZXqvIy69JUvEV-rlL",
//     },
// ];


function addElement(artistValue, titleValue) {
    const trackContainer = document.createElement('div');
    trackContainer.classList.add('song');
    const artistElement = document.createElement('h4');
    artistElement.classList.add('song__artist');
    artistElement.textContent = artistValue;
    const titleElement = document.createElement('h4');
    titleElement.classList.add('song__title');
    titleElement.textContent = titleValue;
    const likeButtonElement = document.createElement('button');
    likeButtonElement.classList.add('song__like');
    likeButtonElement.textContent = likeValue;
    trackContainer.append(artistElement, titleElement, likeButtonElement);
    songsContainer.after(trackContainer);
    songsContainer.appendChild(trackContainer);
}

function addElement(name, link) {
    const trackContainer = document.createElement('article');
    trackContainer.classList.add('element');

    
    const artistElement = document.createElement('h4');
    artistElement.classList.add('song__artist');
    artistElement.textContent = artistValue;
    const titleElement = document.createElement('h4');
    titleElement.classList.add('song__title');
    titleElement.textContent = titleValue;
    const likeButtonElement = document.createElement('button');
    likeButtonElement.classList.add('song__like');
    likeButtonElement.textContent = likeValue;
    trackContainer.append(artistElement, titleElement, likeButtonElement);
    songsContainer.after(trackContainer);
    songsContainer.appendChild(trackContainer);
}