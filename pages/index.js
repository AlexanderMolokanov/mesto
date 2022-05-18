import { initialElements } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
const profileEditButton = document.querySelector('.profile__edit');
const placeAddButton = document.querySelector('.profile__add');
const placeAddPopup = document.querySelector('#add_place');
const plaseElement = document.querySelector('.elements');
export const bigImagePopup = document.querySelector('#popup-image-div');
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
}

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

const userInfo = new UserInfo(profileDataSelectors);

const openProfileForm = () => {
    const obj = userInfo.getUserInfo()
    profileEditInput.value = obj.name;
    profileEditJob.value = obj.job;
    validationProfile.resetValidation();
    popupWithFormPerson.open()
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
};

profileEditButton.addEventListener('click', openProfileForm);
placeAddButton.addEventListener('click', openCardPopupHandler);

validationProfile.enableValidation();
validationCard.enableValidation();