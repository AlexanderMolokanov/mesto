import { initialElements } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';

const profileEditButton = document.querySelector('.profile__edit');
const placeAddButton = document.querySelector('.profile__add');
const plaseElement = document.querySelector('.elements');
const formAddName = document.querySelector('#place-name-input');
const formAddLink = document.querySelector('#place-link-input');
const profileEditInput = document.querySelector('#name-input');
const profileEditJob = document.querySelector('#job-input');

const profileDataSelectors = {
    name: '.profile__name',
    job: '.profile__job',
}

const plase = {plaseElement:'.elements'};

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
const popupWithFormElement = new PopupWithForm(popupsSectors.addElement, addNewElement);
const userInfo = new UserInfo(profileDataSelectors);
const popupWithImage = new PopupWithImage(popupsSectors.bigImage);
popupWithImage.setEventListeners()

const openPopupWithImage = (card) => {
    popupWithImage.open(card)
}

const createRealCard = (card) => {
    return new Card(card, '.template-element', openPopupWithImage).createCard();
}

const elements = new Section({
    items: initialElements,
    renderer: createRealCard,
}, plase.plaseElement);
elements.renderItems()

function addNewElement(evt, newData) {
    evt.preventDefault();
    console.log(newData)
    const card = {
        name: newData.value,
        link: newData.value,
    }
    const newElement = new Section({
        items: card,
        renderer: createRealCard,
    }, plase.plaseElement);
    newElement.addItem();
    popupWithFormElement.close();
};

function handleProfileFormSubmit(evt, newData) {
    evt.preventDefault();
    console.log(newData)
    // const newData = {};
    // newData.name = profileEditInput.value;
    // newData.job = profileEditJob.value;
    console.log(newData)
    userInfo.setUserInfo(newData)
    popupWithFormPerson.close()
};

const openProfileForm = () => {
    const avatarData = userInfo.getUserInfo()
    profileEditInput.value = avatarData.name;
    profileEditJob.value = avatarData.job;
    validationProfile.resetValidation();
    popupWithFormPerson.open()
}

function openCardPopupHandler() {
    popupsSectors.formCard.reset();
    validationCard.resetValidation();
    popupWithFormElement.open();
}

profileEditButton.addEventListener('click', openProfileForm);
placeAddButton.addEventListener('click', openCardPopupHandler);

validationProfile.enableValidation();
validationCard.enableValidation();
popupWithFormPerson.setEventListeners();
popupWithFormElement.setEventListeners();