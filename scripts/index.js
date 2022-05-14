import { initialElements } from "./elements.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
// ./components
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
// const formAddElement = document.querySelector('#place-edit');
const formAddName = document.querySelector('#place-name-input');
const formAddLink = document.querySelector('#place-link-input');
// const profileForm = document.querySelector('#profile-edit');
const profileEditInput = document.querySelector('#name-input');
const profileEditJob = document.querySelector('#job-input');

const profileDataSelectors = {
    name: '.profile__name',
    job: '.profile__job',
}

const popups = document.querySelectorAll('.popup');


const formsValidationConfig = {
    formClass: '.popup__form',
    inputClass: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    disabledButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_underlining',
    errorClassVisible: 'popup__error_state_visible'
}
// const profilePopup = document.querySelector('#popup-change-profile');
// const bigImagePopup = document.querySelector('#popup-image-div');
// popupImage = document.querySelector('#popup-image-img');

// popup-change-profile

// add_place

// popup-image-div

// const popupsSectors.formCard = document.forms.card;
// const popupsSectors.formProfile = document.forms.profile;


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

// function addCard(newCard) {
//     plaseElement.prepend(newCard);
// }




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
    // const newCardElement = createRealCard(card);
    const newElement = new Section({
        items: card,
        renderer: createRealCard
    }, plaseElement);;
    // addCard(newCardElement); 
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
    openPopup(profilePopup);
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
    closePopup(profilePopup);
};

const openPopupWithImage = (e) => {
    evt.target.classList.contains('popup_opened')
    const card = {
        name: formAddName.value,
        link: formAddLink.value,
    }
    const popupWithImage = new PopupWithImage(popupsSectors.bigImage,);
    popupWithImage.open()
}

profileEditButton.addEventListener('click', openProfileForm);
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));
// profileForm.addEventListener('submit', handleProfileFormSubmit);
placeAddButton.addEventListener('click', openCardPopupHandler);
placeButtonClose.addEventListener('click', () => closePopup(placeAddPopup));
// formAddElement.addEventListener('submit', addNewElement);
// popupImage.addEventListener('click', () => openPopup(bigImagePopup));
popupImage.addEventListener('click', (e) => openPopupWithImage());
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