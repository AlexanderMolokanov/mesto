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
const formProfile = document.forms.profile;
const formCard = document.forms.card;
const popups = document.querySelectorAll('.popup');

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
    closePopup(placeAddPopup);
    setSubmitButtonState(formCard, formsValidationConfig);
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', todoEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.remouveEventListener('keydown', todoEscape);
}

function todoEscape (event) {
    if (event.code === 'Escape') {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

function openProfileForm() {
    profileEditInput.value = profileTitle.textContent;
    profileEditJob.value = profileSubtitle.textContent;
    openPopup(profilePopup);
    setSubmitButtonState(formProfile, formsValidationConfig);
    hideFormError(formProfile, formsValidationConfig);
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

function openPopupСorrectly() {
    formCard.reset();
    openPopup(placeAddPopup);
    hideFormError(formCard, formsValidationConfig);
}

profileEditButton.addEventListener('click', openProfileForm);
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));
profileForm.addEventListener('submit', handleProfileFormSubmit);
placeAddButton.addEventListener('click', openPopupСorrectly);
placeButtonClose.addEventListener('click', () => closePopup(placeAddPopup));
formAddElement.addEventListener('submit', addNewElement);
popupImage.addEventListener('click', () => openPopup(bigImagePopup));
popupImageClose.addEventListener('click', () => closePopup(bigImagePopup));

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
});

