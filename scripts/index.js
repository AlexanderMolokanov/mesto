import { initialElements } from "./elements.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";

// import Card from "../components/Card.js";
// import FormValidator from "../components/FormValidator.js";
// import Section from "../components/Section.js";
// import UserInfo from "../components/UserInfo.js";
// import PopupWithImage from "../components/PopupWithImage.js";
// import PopupWithForm from "../components/PopupWithForm.js";

const profileEditButton = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profilePopup = document.querySelector('#popup-change-profile');
const profileCloseButton = document.querySelector('.popup__button-close');
const placeAddButton = document.querySelector('.profile__add');
const placeAddPopup = document.querySelector('#add_place');
const placeButtonClose = document.querySelector('#place-close-button');
const plaseElement = document.querySelector('.elements');
export const bigImagePopup = document.querySelector('#popup-image-div');
const popupImage = document.querySelector('#popup-image-img');
const popupImageClose = document.querySelector('#popup__image-close-button');
const formAddElement = document.querySelector('#place-edit');
const formAddName = document.querySelector('#place-name-input');
const formAddLink = document.querySelector('#place-link-input');
const profileForm = document.querySelector('#profile-edit');
const profileEditInput = document.querySelector('#name-input');
const profileEditJob = document.querySelector('#job-input');

const formCard = document.forms.card;
const popups = document.querySelectorAll('.popup');

const formProfile = document.forms.profile;
const formsValidationConfig = {
    formClass: '.popup__form',
    inputClass: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    disabledButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_underlining',
    errorClassVisible: 'popup__error_state_visible'
}

const validationProfile = new FormValidator(formsValidationConfig, formProfile);
const validationCard = new FormValidator(formsValidationConfig, formCard);


export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', todoEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', todoEscape);
}

// const userInfo = new UserInfo({
//     name: profileName,
//     job: profileJob,
// });


// function handleProfileFormSubmit(userData) {
//     const dataUser = {
//         firstInput: userData.profileName,
//         secondInput: userData.profileJob,
//     }
//     userInfo.setUserInfo(dataUser);
//     profileForm.close();
// }




function addCard(newCard) {
    plaseElement.prepend(newCard);
}

const createRealCard = (card) => {
    return new Card(card, '.template-element').createCard();
}

initialElements.reverse().forEach((card) => {
    const newCardElement = createRealCard(card);
    addCard(newCardElement)
});

// const newElement = new Section({ items: initialElements, renderer: createRealCard }, plaseElement);
// newElement.renderItem()

function addNewElement(evt) {
    evt.preventDefault();
    const card = {
        link: formAddLink.value,
        name: formAddName.value,
    }
    const newCardElement = createRealCard(card);
    addCard(newCardElement);
    closePopup(placeAddPopup);
};


function todoEscape(event) {
    if (event.code === 'Escape') {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

function openProfileForm() {
    profileEditInput.value = profileName.textContent;
    profileEditJob.value = profileJob.textContent;
    validationProfile.resetValidation();
    openPopup(profilePopup);
}

function openCardPopupHandler() {
    formCard.reset();
    validationCard.resetValidation();
    openPopup(placeAddPopup);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileEditInput.value;
    profileJob.textContent = profileEditJob.value;
    closePopup(profilePopup);
};

profileEditButton.addEventListener('click', openProfileForm);
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));
profileForm.addEventListener('submit', handleProfileFormSubmit);
placeAddButton.addEventListener('click', openCardPopupHandler);
placeButtonClose.addEventListener('click', () => closePopup(placeAddPopup));
formAddElement.addEventListener('submit', addNewElement);
popupImage.addEventListener('click', () => openPopup(bigImagePopup));
popupImageClose.addEventListener('click', () => closePopup(bigImagePopup));

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
});

validationProfile.enableValidation();
validationCard.enableValidation();