import { initialElements } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';
// import logoImage from './images/header_logo.svg';
// import profileImage from '/images/profile__jac-if-kusto.jp';


// const somePic = [
//     { name: 'Michael Jordan', image: logoImage },
//     { name: 'Lebron James', link: profileImage }, 
//   ]; 

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

const openPopupWithImage = (card) => {
    const popupWithImage = new PopupWithImage(popupsSectors.bigImage, card);
    popupWithImage.setEventListeners()
    popupWithImage.open()
}

const createRealCard = (card) => {
    return new Card(card, '.template-element', openPopupWithImage).createCard();
}

const elements = new Section({
    items: initialElements,
    renderer: createRealCard,
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
        renderer: createRealCard,
    }, plaseElement);
    newElement.addItem();
    popupWithFormElement.close();
};

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const newData = {};
    newData.name = profileEditInput.value;
    newData.job = profileEditJob.value;
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