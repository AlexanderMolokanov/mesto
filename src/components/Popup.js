export class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEsc =  this._handleEscClose.bind(this)
        this._button = this._popup.querySelector('.popup__button-save')
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEsc);
    }

    close() { 
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEsc);
    }

    setEventListeners() {
        this._popup.addEventListener('click', (e) => {
            if ((e.target.classList.contains('popup__button-close'))
                || (e.target.classList.contains('popup_opened'))
            ) {
                this.close()
            }
        })
    }

    _handleEscClose(event) {
        if (event.code === 'Escape') {
            this.close()
        }
    }
}

// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
// Модальное окно также закрывается при клике на затемнённую область вокруг формы.