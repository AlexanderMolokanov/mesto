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
const changeProfilePopup = document.querySelector('#popup-change-profile');
const profileCloseButton = document.querySelector('.popup__button-close');
const placeAddButton = document.querySelector('.profile__add');
const placeAddPopup = document.querySelector('#add_place');
const placeButtonClose = document.querySelector('#place-close-button');
const plaseElement = document.querySelector('.elements');
const bigImagePopup = document.querySelector('#popup-image-div');
const popupImage = document.querySelector('#popup-image-img');
const popupImageClose = document.querySelector('#popup__image-close-button');
const popupImageCaption = document.querySelector('.popup__image-caption')
const formAddElement = document.querySelector('#place-edit');
const formAddName = document.querySelector('#place-name-input');
const formAddLink = document.querySelector('#place-link-input');
const profileForm = document.querySelector('#profile-edit');
const profileEditInput = document.querySelector('#name-input');
const profileEditJob = document.querySelector('#job-input');

const handleLikeButton = (e) => {
    e.target.classList.toggle('element__heart_like');
}

const handleDeleteButton = (e) => {
    e.target.closest('.element').remove();
}

const createElement = (item) => {
    const template = document.querySelector('#element-template');
    const todoTemplate = template.content.cloneNode(true);
    const todoTitle = todoTemplate.querySelector('.element__title');
    const todoLikeButton = todoTemplate.querySelector('.element__heart');
    const todoDeleteButton = todoTemplate.querySelector('.element__delete');
    const elementImage = todoTemplate.querySelector('#element-image');
    todoTitle.textContent = item.name;
    elementImage.src = item.link;
    elementImage.alt = 'Изображение:' + ' ' + item.name;
    elementImage.addEventListener('click', () => handlePreviewPictire(item))
    todoLikeButton.addEventListener('click', handleLikeButton);
    todoDeleteButton.addEventListener('click', handleDeleteButton);
    return todoTemplate;
}

const handlePreviewPictire = (data) => {
    popupImage.src = data.link;
    popupImage.alt = 'Изображение:' + ' ' + data.name;
    popupImageCaption.textContent = data.name;
    openPopup(bigImagePopup)
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
} 

const addElementToContainer = (element) => {
    const todo = createElement(element);
    plaseElement.prepend(todo);
};

initialElements.forEach((elementData) => {
    addElementToContainer(elementData);
})

function clickprofileForm() {
    profileEditInput.value = profileTitle.textContent;
    profileEditJob.value = profileSubtitle.textContent;
    changeProfilePopup.classList.toggle('popup_opened');
}

function shiftAnyPopup() {
    placeAddPopup.classList.toggle('popup_opened');
}

function addPopupImage() {
    bigImagePopup.classList.add('popup_opened');
}

function removePopupImage() {
    bigImagePopup.classList.remove('popup_opened');
}

function closePopup() {
    changeProfilePopup.classList.remove('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
} 

closePopup(changeProfilePopup) 

function handleProfileFormSubmit(evt) {
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
    newElement.name = ' ';
    newElement.link = ' ';
    shiftAnyPopup();
};

profileEditButton.addEventListener('click', clickprofileForm);
profileCloseButton.addEventListener('click', clickprofileForm);
profileForm.addEventListener('submit', handleProfileFormSubmit);
placeAddButton.addEventListener('click', shiftAnyPopup);
placeButtonClose.addEventListener('click', shiftAnyPopup);
formAddElement.addEventListener('submit', addNewElement);
popupImage.addEventListener('click', addPopupImage);
popupImageClose.addEventListener('click', removePopupImage);