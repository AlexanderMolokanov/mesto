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
const profilePopup = document.querySelector('#popup-change-profile');
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

const inputs = document.querySelectorAll('.popup__input'); 
const errorSpans = document.querySelectorAll('.popup__error'); 

const buttonProfileEdit = document.querySelectorAll('#button-profile-edit');



function clearErrorMessages() {
    //const inputEvent = new KeyboardEvent('input');

    inputs.forEach(( input ) => {
        //input.dispatchEvent( inputEvent );
        input.classList.remove('popup__input_underlining');
        //input.value = '';
    });
    errorSpans.forEach((errorText) => {
        errorText.textContent = '';
    });
}


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
    elementImage.addEventListener('click', () => handlePreviewPictire(item));
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

const addElementToContainer = (element) => {
    const todo = createElement(element);
    plaseElement.prepend(todo);
};

function addNewElement(evt) {
    evt.preventDefault();
    const newElement = {};
    newElement.name = formAddName.value;
    newElement.link = formAddLink.value;
    addElementToContainer(newElement);
    formAddName.value = '';
    formAddLink.value = '';
    closePopup(placeAddPopup);
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openProfileForm() {
    clearErrorMessages();
    profileEditInput.value = profileTitle.textContent;
    profileEditJob.value = profileSubtitle.textContent;
    //setSubmitButtonState(profileForm, buttonProfileEdit);
    //profilePopup.classList.remove(formsValidationConfig.disabledButtonClass)
    //buttonProfileEdit.classList.remove('popup__button-save_disabled');
    openPopup(profilePopup);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileEditInput.value;
    profileSubtitle.textContent = profileEditJob.value;
    closePopup(profilePopup);
};


initialElements.forEach((elementData) => {
    addElementToContainer(elementData);
})



document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
});

function elementPopupEdding() {
    openPopup(placeAddPopup);
    //cardFormElement.reset();
    clearErrorMessages();
}


profileEditButton.addEventListener('click', openProfileForm);
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));
profileForm.addEventListener('submit', handleProfileFormSubmit);
placeAddButton.addEventListener('click', elementPopupEdding);
placeButtonClose.addEventListener('click', () => closePopup(placeAddPopup));
formAddElement.addEventListener('submit', addNewElement);
popupImage.addEventListener('click', () => openPopup(bigImagePopup));
popupImageClose.addEventListener('click', () => closePopup(bigImagePopup));


const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
});



// const cardFormElement = document.forms.card;
// const cardNameInput = cardFormElement.elements.cardName;
// const cardImageInput = cardFormElement.elements.cardUrl;


    // function clearErrorMessages() {
    //     const inputEvent = new KeyboardEvent('input');
    //     inputs.forEach((input) => {
    //         input.dispatchEvent(inputEvent);
    //         input.classList.remove('popup__input_underlining');
    //     }); 
    //     errorSpanElements.forEach(( span ) => {
    //         span.textContent = '';
    //     });
    // }


// function openCardPopupHandler() {
//     openPopup(cardPopup);
//     cardFormElement.reset();
//     clearErrorMessages();
// }

// function submitCardHandler( event ) {
//     event.preventDefault();
//     createCardFromPopup();
//     closePopup(cardPopup);
//     cardFormElement.reset();
// }


