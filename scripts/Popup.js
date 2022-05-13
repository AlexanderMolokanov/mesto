export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this._popupSelector.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._popupSelector.classList.remouve('popopup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    setEventListeners() {
        this._popupSelector.addEventListener('click', (evt) => {
            if ((evt.target.classList.contains('popup__button-close')) || (evt.target.classList.contains('popup_opened'))) { this.close() }
        })
    }

    _handleEscClose(event) {
        if (event.code = 'Escape') {
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

// constructor (popupSelector) {
//     this._popupSelector = document.querySelector(popupSelector);
// }

// _handleEscClose(event){
//     if (event.code === 'Escape') {
//         this.close();
//     }
// }

// close(){
//     this._popupSelector.classList.remouve('popup_opened')
//     document.removeEventListener('keydown', this._handleEscClose);
// }

// open(){
//     this._popupSelector.classList.add('popup_opened')
//     document.addEventListener('keydown', this._handleEscClose);
// }

// setEventListeners() {
//     this._popupSelector.addEventListener('mousedown', (e) => {
//     if ((e.target.classList.contains('popup_opened')) || (e.target.classList.contains('popup__button-close'))) {
//             this.close();
//         }
//     });
// };


// _handleClickClose = (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       this.close();
//     }
//     if (evt.target.classList.contains("popup__close-button")) {
//       this.close();
//     }
//   };

// _setEventListeners() {
//     document.addEventListener("keydown", this._handleEscClose);
//     this._popup.addEventListener("click", this._handleClickClose);
// }