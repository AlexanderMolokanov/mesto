export class Card {
    constructor(card, cardTemplateSelector) {
        this._name = card.name;
        this._link = card.link;
        this._cardsTemplate = document.querySelector(cardTemplateSelector).content;
        this._cardElement = this._cardsTemplate.querySelector('.element').cloneNode(true);
        this._like = this._cardElement.querySelector('.element__heart');
        this._image = this._cardElement.querySelector('.element__image');
        this._trash = this._cardElement.querySelector('.element__delete');
    }

    _addEventListeners() {
        this._trash.addEventListener('click', (evt) => evt.target.closest('.element').remove());
        this._like.addEventListener('click', (evt) => evt.target.classList.toggle('element__heart_like'));
        this._image.addEventListener('click', () => {
            this.handleClick(this);
            // imageLink.src = this._link;
            // imageLink.alt = this._name;
            // imageCaption.textContent = this._name;
            // openPopup(imagePopup);
        });
    }

    createCard() {
        this._image.src = this._link;
        this._image.alt = this._name;
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._addEventListeners();
        return this._cardElement;
    }
}