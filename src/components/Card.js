export class Card {
    constructor(card, cardTemplateSelector, clicker) {
        this._clicker = clicker;
        this._card = card
        this._name = card.name;
        this._link = card.link;
        this._cardsTemplate = document.querySelector(cardTemplateSelector).content;
        this._cardElement = this._cardsTemplate.querySelector('.element').cloneNode(true);
        this._like = this._cardElement.querySelector('.element__heart');
        this._image = this._cardElement.querySelector('.element__image');
        this._trash =   this._cardElement.querySelector('.element__delete');
        this._imageLink = document.querySelector("#popup-image-img");
        this._imageCaption = document.querySelector(".popup__image-caption");
    }

    _addEventListeners() {
        this._trash.addEventListener('click', () => {
            this._cardElement.remove()
            this._cardElement = null;
        });
        this._like.addEventListener('click', (evt) =>
            evt.target.classList.toggle('element__heart_like'));
        this._image.addEventListener('click', () => {this._clicker(this._card)});
    }

    createCard() {
        this._image.src = this._link;
        this._image.alt = 'Изображение:' + ' ' + this._name;
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._addEventListeners();
        return this._cardElement;
    }
}

// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// принимает в конструктор её данные и селектор её template-элемента;
// содержит приватные методы, которые работают с разметкой, устанавливают
//  слушателей событий;
// содержит приватные методы для каждого обработчика;
// содержит один публичный метод, который возвращает полностью работоспособный
//  и наполненный данными элемент карточки.