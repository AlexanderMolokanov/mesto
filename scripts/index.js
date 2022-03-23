import { initialElements } from "./elements.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const profileEditButton = document.querySelector('.profile__edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
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

const addCardToContainer = (card, container) => container.prepend(card);

initialElements.reverse().forEach((card) => {
    const newCard = new Card(card, '.template-element');
    const newCardElement = newCard.createCard();
    addCardToContainer(newCardElement, plaseElement);
});

function addCard(newCard) {
    plaseElement.prepend(newCard);
}

function addNewElement(evt) {
    evt.preventDefault();
    const card = {
        link: formAddLink.value,
        name: formAddName.value,

    }
    const cardElement = new Card(card, '.template-element').createCard();
    addCard(cardElement);
    submitButtonSelector.classList.add("popup__button-save_disabled");
    submitButtonSelector.setAttribute("disabled", "");
    closePopup(placeAddPopup);
};

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', todoEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', todoEscape);
}

function todoEscape(event) {
    if (event.code === 'Escape') {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

function openProfileForm() {
    profileEditInput.value = profileTitle.textContent;
    profileEditJob.value = profileSubtitle.textContent;
    validationProfile.resetValidation();
    openPopup(profilePopup);
}

function openCardPopupHandler() {
    formCard.reset();
    openPopup(placeAddPopup);
    validationCard.resetValidation();
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileEditInput.value;
    profileSubtitle.textContent = profileEditJob.value;
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