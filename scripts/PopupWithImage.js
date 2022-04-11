import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(data) {
        super(data.popup);
        this._name = this.popup.querySelector(data.popupDescription);
        this._image = this.popup.querySelector(data.popupImage);
    };

    open(name, link) {
        this._name.textContent = name;
        this._image.src = link;
        this._image.alt = name;
        super.open();
    };
}


// оздайте класс PopupWithImage, который наследует от Popup. Этот класс 
// должен перезаписывать родительский метод open. В методе open класса 
// PopupWithImage нужно вставлять в попап картинку с src изображения и 
// подписью к картинке.

// function handleProfileFormSubmit(evt) {
//     evt.preventDefault();
//     profileTitle.textContent = profileEditInput.value;
//     profileSubtitle.textContent = profileEditJob.value;
//     closePopup(profilePopup);
// };