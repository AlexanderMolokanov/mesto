import { profileDataSelectors, formsValidationConfig, popupsSectors } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';
import { ApiReguest } from "../components/ApiReguest.js";
import { Api } from "../components/Api.js";
import { PopupSure } from "../components/PopupSure.js";

const profileEditButton = document.querySelector('.profile__edit');
const placeAddButton = document.querySelector('.profile__add');
const profileEditInput = document.querySelector('#name-input');
const profileEditJob = document.querySelector('#job-input');
const sureAsk = document.querySelector('.popup__button-save_no-margin');
const hideInput = document.querySelector('.hide-input')
const saveButton = document.querySelector('#button-add-item')
const submitAvatar = document.querySelector('#popup-avatar-button-save')
const validationProfile = new FormValidator(formsValidationConfig, popupsSectors.formProfile);
const validationCard = new FormValidator(formsValidationConfig, popupsSectors.formCard);
const validationAvatar = new FormValidator(formsValidationConfig, popupsSectors.saveNewAvatar);
const popupWithFormPerson = new PopupWithForm(popupsSectors.changeProfile, handleProfileFormSubmit);
const popupWithFormElement = new PopupWithForm(popupsSectors.addElement, addNewElement);
const popupAskSure = new PopupSure(popupsSectors.askSure, (id) => { deleteCard(id) })

const openAvatarPopup = () => {
    validationAvatar.resetValidation()
    // console.log(avatarForm)
    avatarForm.open();
}

const userInfo = new UserInfo(profileDataSelectors, openAvatarPopup);
const avatarForm = new PopupWithForm('#change-profile-image', changeAvatar);
const popupWithImage = new PopupWithImage(popupsSectors.bigImage);
const request = new ApiReguest('https://nomoreparties.co/v1/cohort-42/', {
    authorization: 'f94fe150-fc6f-49bf-839d-cc1279afa58f',
    'Content-Type': 'application/json',
    'Accept': 'application/json: charset=utf-8'
})
const api = new Api(request);

const openPopupWithImage = (card) => {
    popupWithImage.open(card)
}

function changeAvatar(avatarlink) {
    submitAvatar.innerText = 'Сохранить...'
    api.setAvatar(avatarlink).then((userData) => {
        userInfo.initUserLoad(userData)
        avatarForm.close()
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        submitAvatar.innerText = 'Сохранить'
    })
}

const createRealCard = (item) => {
    return new Card(item, '.template-element', openPopupWithImage, userInfo.getUserId(), openDeletePopup, setLike, removeLike).createCard()
}

const addRealCard = (card) => {
    elements.addItem(card);
}

const elements = new Section({
    renderer: (card) => { addRealCard(createRealCard(card)) }
}, '.elements');

function addNewElement(evt, newData) {
    evt.preventDefault();
    saveButton.innerText = 'Создать...'
    const card = {
        name: newData.placeName,
        link: newData.placeLink,
    }
    api.createCard(card).then((card) => {
        const newElement = createRealCard(card)
        elements.addItem(newElement);
        popupWithFormElement.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        saveButton.innerText = 'Создать'
    })
};

function openDeletePopup(card) {
    hideInput.value = card.cardId
    popupAskSure.setCard(card);
    popupAskSure.open()
}

function deleteCard(id) {
    sureAsk.innerText = 'Да...'
    api.deleteCard(id).then(() => {
        const card = popupAskSure.getCard();
        card.removeItem();
        popupAskSure.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        sureAsk.innerText = 'Да'
    })
}

function handleProfileFormSubmit(newData) {
    const userData = {
        about: newData.jobInput,
        name: newData.nameInput,
    }
    api.setUserInfo(userData).then((data) => {
        userInfo.setUserInfo({
            name: data.name,
            job: data.about,
            _id: data._id
        })
        userInfo.initUserLoad(data);
    }).then(() => {
        profileForm.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        submitProfile.innerText = 'Сохранить'
    })
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

function renderCards() {
    api.loadAllCards().then((cards) => {
        elements.setItems(cards);
        elements.renderItems();
    }).catch((err) => {
        console.log(err);
    });
}

function setLike(cardId) {
    return api.useLike(cardId)
}

function removeLike(cardId) {
    return api.removeLike(cardId)
}

function initUserInfo() {
    api.getUserInfo().then((datas) => {
        userInfo.initUserLoad(datas);
        userInfo.setUserId(datas._id);
        renderCards();
    }).catch((err) => {
        console.log(err);
    });
}

profileEditButton.addEventListener('click', openProfileForm);
placeAddButton.addEventListener('click', openCardPopupHandler);
validationProfile.enableValidation();
validationCard.enableValidation();
validationAvatar.enableValidation();
popupWithFormPerson.setEventListeners();
popupWithFormElement.setEventListeners();
avatarForm.setEventListeners();
popupWithImage.setEventListeners();
userInfo.setEventListeners();
popupAskSure.setEventListeners();
initUserInfo();
