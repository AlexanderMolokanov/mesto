export class Card {

    constructor(card, cardTemplateSelector, clicker, userId, openDelitePopup, setLike, removeLike) {
        this._setLike = setLike;
        this._removeLike = removeLike;
        this._clicker = clicker;
        this._card = card;
        this._name = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._ownerId = card.owner._id;
        this._userId = userId;
        this.cardId = card._id;
        this._cardsTemplate = document.querySelector(cardTemplateSelector).content;
        this._cardElement = this._cardsTemplate.querySelector('.element').cloneNode(true);
        this._like = this._cardElement.querySelector('.element__heart');
        this._image = this._cardElement.querySelector('.element__image');
        this._trash = this._cardElement.querySelector('.element__delete');
        this._imageLink = document.querySelector("#popup-image-img");
        this._imageCaption = document.querySelector(".popup__image-caption");
        this.deleteHandleClick = card.deleteHandleClick;
        this._openDelitePopup = openDelitePopup;
        this._heartNumber = this._cardElement.querySelector('.element__heart-number')
    }

    _handleLikesChanged(likes) {
        this._likes = likes;
        this._renderLikeCounter()
        this._renderLikeButton()
    }

    _renderLikeCounter() {
        this._heartNumber.textContent = this._likes.length;
        if (this._likes.length === 0) {
            this._heartNumber.classList.add('element__heart-number_disabled');
        } else {
            this._heartNumber.classList.remove('element__heart-number_disabled');
        }
    }

    _renderLikeButton() {
        if (this._checkId(this._userId)) {
            this._like.classList.add('element__heart_like');
        } else {
            this._like.classList.remove('element__heart_like');
        }
    }

    _renderDeleteButton() {
        if (this._ownerId !== this._userId) {
            this._trash.remove();
        }
    }

    _addEventListeners() {
        this._trash.addEventListener('click', () => {
            this._openDelitePopup(this)
        });
        this._like.addEventListener('click', () =>
            this.toggleLike());
        this._image.addEventListener('click', () => { this._clicker(this._card) });
    }

    _checkId(userId) {
        return (this._likes.map(function (a) {
            return a._id
        })
        ).some(elem => elem === userId)
    }

    toggleLike() {
        if (this._checkId(this._userId)) {
            this._removeLike(this.cardId).then((data) => {
                this._handleLikesChanged(data.likes)
            }).catch((err) => {
                console.log(err);
            });
        } else {
            this._setLike(this.cardId).then((data) => {
                this._handleLikesChanged(data.likes)
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    createCard() {
        this._image.src = this._link;
        this._image.alt = 'Изображение:' + ' ' + this._name;
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._addEventListeners();
        this._renderDeleteButton();
        this._renderLikeCounter();
        this._renderLikeButton();
        return this._cardElement;
    }

    removeItem() {
        this._cardElement.remove();
    }
}

// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// принимает в конструктор её данные и селектор её template-элемента;
// содержит приватные методы, которые работают с разметкой, устанавливают
//  слушателей событий;
// содержит приватные методы для каждого обработчика;
// содержит один публичный метод, который возвращает полностью работоспособный
//  и наполненный данными элемент карточки.