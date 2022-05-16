import { initialElements } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
const profileEditButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('#popup-change-profile');
const profileCloseButton = document.querySelector('.popup__button-close');
const placeAddButton = document.querySelector('.profile__add');
const placeAddPopup = document.querySelector('#add_place');
const placeButtonClose = document.querySelector('#place-close-button');
const plaseElement = document.querySelector('.elements');
export const bigImagePopup = document.querySelector('#popup-image-div');
const popupImage = document.querySelector('#popup-image-img');
const popupImageClose = document.querySelector('#popup__image-close-button');
const formAddName = document.querySelector('#place-name-input');
const formAddLink = document.querySelector('#place-link-input');
const profileEditInput = document.querySelector('#name-input');
const profileEditJob = document.querySelector('#job-input');

const profileDataSelectors = {
    name: '.profile__name',
    job: '.profile__job',
}

const formsValidationConfig = {
    formClass: '.popup__form',
    inputClass: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    disabledButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_underlining',
    errorClassVisible: 'popup__error_state_visible'
}

const popupsSectors = {
    changeProfile: '#popup-change-profile',
    addElement: '#add_place',
    bigImage: '#popup-image-div',
    formCard: document.forms.card,
    formProfile: document.forms.profile,
}

const validationProfile = new FormValidator(formsValidationConfig, popupsSectors.formProfile);
const validationCard = new FormValidator(formsValidationConfig, popupsSectors.formCard);

const popupWithFormPerson = new PopupWithForm(popupsSectors.changeProfile, handleProfileFormSubmit);
popupWithFormPerson.setEventListeners();

const popupWithFormElement = new PopupWithForm(popupsSectors.addElement, addNewElement);
popupWithFormElement.setEventListeners();

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    // document.addEventListener('keydown', todoEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    // document.removeEventListener('keydown', todoEscape);
}

const createRealCard = (card) => {
    return new Card(card, '.template-element').createCard();
}

const elements = new Section({
    items: initialElements,
    renderer: createRealCard
}, plaseElement);
elements.renderItems()

function addNewElement(evt) {
    evt.preventDefault();
    const card = {
        name: formAddName.value,
        link: formAddLink.value,
    }
    const newElement = new Section({
        items: card,
        renderer: createRealCard
    }, plaseElement);
    newElement.addItem();
    closePopup(placeAddPopup);
};

function todoEscape(event) {
    if (event.code === 'Escape') {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

const userInfo = new UserInfo(profileDataSelectors);

const openProfileForm = () => {
    const obj = userInfo.getUserInfo()
    profileEditInput.value = obj.name;
    profileEditJob.value = obj.job;
    validationProfile.resetValidation();
    popupWithFormPerson.open()
    // openPopup(profilePopup);
}

function openCardPopupHandler() {
    popupsSectors.formCard.reset();
    validationCard.resetValidation();
    openPopup(placeAddPopup);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const newData = {};
    newData.name = profileEditInput.value;
    newData.job = profileEditJob.value;
    userInfo.setUserInfo(newData)
    popupWithFormPerson.close()
    // closePopup(profilePopup);
};

const openPopupWithImage = () => {
    // evt.target.classList.contains('popup_opened')
    const card = {
        name: formAddName.value,
        link: formAddLink.value,
    }
    const popupWithImage = new PopupWithImage(popupsSectors.bigImage, card);
    popupWithImage.open()
}

profileEditButton.addEventListener('click', openProfileForm);
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));
placeAddButton.addEventListener('click', openCardPopupHandler);
placeButtonClose.addEventListener('click', () => closePopup(placeAddPopup));
popupImage.addEventListener('click', openPopupWithImage);
popupImageClose.addEventListener('click', () => closePopup(bigImagePopup));

validationProfile.enableValidation();
validationCard.enableValidation();