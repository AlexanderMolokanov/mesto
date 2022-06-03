import { initialElements, profileDataSelectors, formsValidationConfig, popupsSectors } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';

const profileEditButton = document.querySelector('.profile__edit');
const placeAddButton = document.querySelector('.profile__add');
const profileEditInput = document.querySelector('#name-input');
const profileEditJob = document.querySelector('#job-input');
const elementsSelector = document.querySelector('.elements')

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
    const newCard = new Card(card, '.template-element', openPopupWithImage).createCard()
    elementsSelector.prepend(newCard)
}

const elements = new Section({
    items: initialElements,
    renderer: createRealCard,
}, '.elements');
elements.renderItems()

function addNewElement(evt, newData) {
    evt.preventDefault();
    console.log(newData)
    const card = {
        name: newData.placeName,
        link: newData.placeLink,
    }
    const newElement = createRealCard(card)
    popupWithFormElement.close();
};

function handleProfileFormSubmit(evt, newData) {
    evt.preventDefault();
    console.log(newData)
    const userData = {
        job: newData.jobInput,
        name: newData.nameInput,
    }
    userInfo.setUserInfo(userData)
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