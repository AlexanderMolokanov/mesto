export class Section {
    constructor(items, renderer) {
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

    _openBigImage() {
        this._imageLink.src = this._link;
        this._imageLink.alt = 'Изображение:' + ' ' + this._name;
        this._imageCaption.textContent = this._name;
        openPopup(bigImagePopup);
    }