import { openPopup, bigImagePopup } from "./index.js";
export class Card {
    constructor(card, cardTemplateSelector) {
        this._name = card.name;
        this._link = card.link;
        this._cardsTemplate = document.querySelector(cardTemplateSelector).content;
        this._cardElement = this._cardsTemplate.querySelector('.element').cloneNode(true);
        this._like = this._cardElement.querySelector('.element__heart');
        this._image = this._cardElement.querySelector('.element__image');
        this._trash = this._cardElement.querySelector('.element__delete');
        this._imageLink = document.querySelector("#popup-image-img");
        this._imageCaption = document.querySelector(".popup__image-caption");
    }

    _addEventListeners() {
        this._trash.addEventListener('click', (evt) => {
            this._cardElement.remove()
            this._cardElement = null;
        });
        this._like.addEventListener('click', (evt) => evt.target.classList.toggle('element__heart_like'));
    }

    createCard() {
        this._image.src = this._link;
        this._image.alt = 'Изображение:' + ' ' + this._name;
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._addEventListeners();
        return this._cardElement;
    }
}