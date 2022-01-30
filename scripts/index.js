const initialElements = [
    {
        name: "Дальний восток",
        link: "https://drive.google.com/uc?export=download&id=1z-vIjHjRQSJ5HMAA23lBV7WFJqNLyw8j",
    },
    {
        name: "Домбай",
        link: "https://drive.google.com/uc?export=download&id=19GpMhC0OM20Kicd9koU2uzn639iZfYye",
    },
    {
        name: "Эльбрус",
        link: "https://drive.google.com/uc?export=download&id=1KtjgpgRM64pDjC5xTbCKqeDjThm2c8lc",
    },
    {
        name: "Карачаевск",
        link: "https://drive.google.com/uc?export=download&id=1jsh4Jjoxy698UIEZXqvIy69JUvEV-rlL",
    },
    {
        name: "Кольчугино",
        link: "https://drive.google.com/uc?export=download&id=1lYFYdLV4uhQvMVJn8HSzuQW-R40EH1o1",
    },
    {
        name: "Москва",
        link: "https://drive.google.com/uc?export=download&id=1JNyODG1cbpYjYBcVNd5gXmZYXYnn8YqI",
    },
];

const profileEditButton = document.querySelector('.profile__edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__button-close');
const placeAddButton = document.querySelector('.profile__add');
const placeAddPopup = document.querySelector('#add_place');
const placeButtonClose = document.querySelector('#place-close-button');
const plaseElement = document.querySelector('.elements');
const popupImageAdd = document.querySelector('#popup-image-div');
const popupImage = document.querySelector('#popup-image-img');
const popupImageClose = document.querySelector('#popup__image-close-button');
const popupImageCaption = document.querySelector('.popup__image-caption')
const formAddElement = document.querySelector('#place-edit');
const formAddName = document.querySelector('#place-name-input');
const formAddLink = document.querySelector('#place-link-input');
let profileEditPopup = document.querySelector('#profile-edit');
let profileEditInput = document.querySelector('#name-input');
let profileEditJob = document.querySelector('#job-input');

const handleLikeButton = (e) => {
    e.target.classList.toggle('element__heart_like');
}

const handleDeleteButton = (e) => {
    e.target.closest('.element').remove();
}

const todoElement = (item) => {
    const template = document.querySelector('#element-template');
    const todoTemplate = template.content.cloneNode(true);
    const todoTitle = todoTemplate.querySelector('.element__title');
    const todoLikeButton = todoTemplate.querySelector('.element__heart');
    const todoDeleteButton = todoTemplate.querySelector('.element__delete');
    const todoLink = todoTemplate.querySelector('#element-image');
    todoTitle.textContent = item.name;
    todoLink.src = item.link;
    todoLink.addEventListener('click', () => handlePreviewPictire(item))
    todoLikeButton.addEventListener('click', handleLikeButton);
    todoDeleteButton.addEventListener('click', handleDeleteButton);
    return todoTemplate;
}

const handlePreviewPictire = (data) => {
    const imageElement = {}
    imageElement.textContent = data.name;
    imageElement.src = data.link;
    popupImage.src = imageElement.src;
    popupImageCaption.textContent = imageElement.textContent;
    popupImageAdd.classList.toggle('popup_opened');
}

const addElementToContainer = (element) => {
    const todo = todoElement(element);
    plaseElement.prepend(todo);
};

initialElements.forEach((elementData) => {
    addElementToContainer(elementData);
})

function clickPopup() {
    profileEditInput.value = profileTitle.textContent;
    profileEditJob.value = profileSubtitle.textContent;
    popup.classList.toggle('popup_opened');
}

function openPopup() {
    placeAddPopup.classList.toggle('popup_opened');
}

function shiftPopupImage() {
    popupImageAdd.classList.toggle('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileEditInput.value;
    profileSubtitle.textContent = profileEditJob.value;
    closePopup();
};

function addNewElement(evt) {
    evt.preventDefault();
    const newElement = {};
    newElement.name = formAddName.value;
    newElement.link = formAddLink.value;
    addElementToContainer(newElement);
    openPopup();
};

profileEditButton.addEventListener('click', clickPopup);
popupButtonClose.addEventListener('click', clickPopup);
profileEditPopup.addEventListener('submit', formSubmitHandler);
placeAddButton.addEventListener('click', openPopup);
placeButtonClose.addEventListener('click', openPopup);
formAddElement.addEventListener('submit', addNewElement);
popupImage.addEventListener('click', shiftPopupImage);
popupImageClose.addEventListener('click', shiftPopupImage);