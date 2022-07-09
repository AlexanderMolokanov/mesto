import { profileDatas, formsValidationConfig, popupsSectors } from "../utils/constants.js";
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
const blackBox = document.querySelector('.profile__black-box')
const validationProfile = new FormValidator(formsValidationConfig, popupsSectors.formProfile);
const validationCard = new FormValidator(formsValidationConfig, popupsSectors.formCard);
const validationAvatar = new FormValidator(formsValidationConfig, popupsSectors.saveNewAvatar);
const popupWithFormPerson = new PopupWithForm(popupsSectors.changeProfile, handleProfileFormSubmit);
const popupWithFormElement = new PopupWithForm(popupsSectors.addElement, addNewElement);
const avatarForm = new PopupWithForm('#change-profile-image', changeAvatar);
const popupAskSure = new PopupSure(popupsSectors.askSure, (id) => { deleteCard(id) })

const openAvatarPopup = () => {
    validationAvatar.resetValidation()
    avatarForm.open();
}

const userInfo = new UserInfo(profileDatas);
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
    avatarForm.buttonText('Создание...')
    popupAskSure
    api.setAvatar(avatarlink).then((userData) => {
        userInfo.initUserLoad(userData)
        avatarForm.close()
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        avatarForm.buttonText('Сохранить')
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

function addNewElement(newData) {
    popupWithFormElement.buttonText('Создание...')
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
        popupWithFormElement.buttonText('Создать')

    })
};

function openDeletePopup(card) {
    popupAskSure.setCard(card);
    popupAskSure.open()
}

function deleteCard() {
    popupAskSure.buttonText('Удаление...')
    const cardId = popupAskSure.getCard().cardId;
    api.deleteCard(cardId).then(() => {
        const card = popupAskSure.getCard();
        card.removeItem();
        popupAskSure.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        popupAskSure.buttonText('Да')
    })
}

function handleProfileFormSubmit(newData) {
    popupWithFormPerson.buttonText('Сохранение...')
    const userData = {
        about: newData.jobInput,
        name: newData.nameInput,
    }
    api.setUserInfo(userData).then((data) => {
        userInfo.initUserLoad(data);
    }).then(() => {
        profileForm.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        popupWithFormPerson.buttonText('Сохранить')
        popupWithFormPerson.close()
    })
};

const openProfileForm = () => {
    const avatarData = userInfo.getUserInfo()
    profileEditInput.value = avatarData.name;
    profileEditJob.value = avatarData.job;
    validationProfile.resetValidation();
    popupWithFormPerson.open()
}

function openCardPopupHandler() {
    validationCard.resetValidation();
    popupWithFormElement.open();
}

function setLike(cardId, renderLikes) {
    return api.useLike(cardId).then((data) => {
        // console.log(renderLikes);
        renderLikes(data.likes)
    }).catch((err) => {
        console.log(err);
    });
}

function removeLike(cardId, renderLikes) {
    return api.removeLike(cardId).then((data) => {
        // console.log(renderLikes);
        renderLikes(data.likes)
    }).catch((err) => {
        console.log(err);
    });
}

function initUserInfo() {
    Promise.all([ 
        api.getUserInfo(),
        api.loadAllCards() ])
        .then(([datas, cards]) => {
            userInfo.initUserLoad(datas);
            elements.renderItems(cards);
        }).catch((err) => {
            console.log(err);
        }); 
}

blackBox.addEventListener('click', openAvatarPopup)
profileEditButton.addEventListener('click', openProfileForm);
placeAddButton.addEventListener('click', openCardPopupHandler);
validationProfile.enableValidation();
validationCard.enableValidation();
validationAvatar.enableValidation();
popupWithFormPerson.setEventListeners();
popupWithFormElement.setEventListeners();
avatarForm.setEventListeners();
popupWithImage.setEventListeners();
popupAskSure.setEventListeners();
initUserInfo();
