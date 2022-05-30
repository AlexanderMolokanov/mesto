export const initialElements = [
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

export const profileDataSelectors = {
    name: '.profile__name',
    job: '.profile__job',
}

export const formsValidationConfig = {
    formClass: '.popup__form',
    inputClass: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    disabledButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_underlining',
    errorClassVisible: 'popup__error_state_visible'
}

export const popupsSectors = {
    changeProfile: '#popup-change-profile',
    addElement: '#add_place',
    bigImage: '#popup-image-div',
    formCard: document.forms.card,
    formProfile: document.forms.profile,
}

