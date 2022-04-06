    import Popup from './Popup.js';
    export default class PopupWithImage extends Popup {
        constructor(dataSelectors) {
            super(dataSelectors.popup);
            this._name = this.popup.querySelector(dataSelectors.popupDescription);
            this._image = this.popup.querySelector(dataSelectors.popupImage);
        };
    
        open(name, link) {
            this._name.textContent = name;
            this._image.src = link;
            this._image.alt = name;
            super.open();    
        };
    }

    constructor (popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);

    }

    open(){
        this._popupSelector.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose); 
    }



    function handleProfileFormSubmit(evt) {
        evt.preventDefault();
        profileTitle.textContent = profileEditInput.value;
        profileSubtitle.textContent = profileEditJob.value;
        closePopup(profilePopup);
    };