import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
    
    static selectors = {
        imageLink: "#popup-image-img",
        imageCaption: ".popup__image-caption",
        // this._imageLink = document.querySelector(#popup-image-img);
        // this._imageCaption = document.querySelector(".popup__image-caption");
    }

    constructor(popupSelector, card) {
        super(popupSelector)
        this._imageLink = document.querySelector(PopupWithImage.selectors.imageLink)
        this._imageCaption = document.querySelector(PopupWithImage.selectors.imageCaption)
        this._name = card.name;
        this._link = card.link;
    }

    open() {
        super.open();
        this._imageLink.src = this._link;
        this._imageLink.alt = 'Изображение:' + ' ' + this._name;
        this._imageCaption.textContent = this._name;
    }
}

// оздайте класс PopupWithImage, который наследует от Popup. Этот класс
// должен перезаписывать родительский метод open. В методе open класса
// PopupWithImage нужно вставлять в попап картинку с src изображения и
// подписью к картинке.