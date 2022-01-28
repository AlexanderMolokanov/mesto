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

const handleLikeButton = (e) => {
    e.target.classList.toggle('element__heart_like')
}

const handleDeleteButton = (e) => {
    e.target.closest('.element').remove();
}
const elementPlase = document.querySelector('.elements');


const todoElement = (item) => {
    const template = document.querySelector('#element-template');
    const todoTemplate = template.content.cloneNode(true);
    const todoTitle = todoTemplate.querySelector('.element__title');
    const todoLink = todoTemplate.querySelector('.element__image');
    const todoLikeButton = todoTemplate.querySelector('.element__heart');
    const todoDeleteButton = todoTemplate.querySelector('.element__delete');
    todoLikeButton.addEventListener('click', handleLikeButton);
    todoDeleteButton.addEventListener('click', handleDeleteButton);
    todoTitle.textContent = item.name;
    todoLink.src = item.link;
    return todoTemplate;
}

const addElementToContainer = (element) => {
    const todo = todoElement(element);
    elementPlase.prepend(todo);
};

initialElements.forEach((elementData) => {
    addElementToContainer(elementData);
})

const buttonProfileEdit = document.querySelector('.profile__edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__button-close');

const buttonPlaceAdd = document.querySelector('.profile__add');
const popupPlaceAdd = document.querySelector('#add_place');
const placeButtonClose = document.querySelector('#place-close-button');

const popupImageAdd = document.querySelector('#popup-image');
const popupImage = document.querySelector('#image-1');
const popupImageClose = document.querySelector('#popup__image-close-button');

let formElement = document.querySelector('#profile-edit');
let newElementTodo = document.querySelector('#place-edit');

let nameInput = document.querySelector('#name-input');
let jobInput = document.querySelector('#job-input');

  
 
let placeName = document.querySelector('#place-name-input');
let placeLink = document.querySelector('#place-link-input');

function clickPopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popup.classList.toggle('popup_opened');
    //document.body.style.overflow = 'hidden';
    //document.body.style.overflow = '';
}

function openPopup() {
    popupPlaceAdd.classList.toggle('popup_opened');
}

function shiftPopupImage() {
    popupImageAdd.classList.toggle('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
};






function addNewElement(evt) {
    evt.preventDefault();
    let newElement = {};
    newElement.name = placeName.value;
    newElement.link = placeLink.value;
    console.log(newElement) 
    initialElements.push(newElement)
    console.log(initialElements)
    closePopup();
};

buttonProfileEdit.addEventListener('click', clickPopup);
popupButtonClose.addEventListener('click', clickPopup);
formElement.addEventListener('submit', formSubmitHandler);

buttonPlaceAdd.addEventListener('click', openPopup);
placeButtonClose.addEventListener('click', openPopup);

newElementTodo.addEventListener('submit', addNewElement);

// popupImage.addEventListener('click', shiftPopupImage);
// popupImageClose.addEventListener('click', shiftPopupImage);