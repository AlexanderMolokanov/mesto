export class Popup {
    constructor (popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);

    }

    open(){
        this._popupSelector.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose); 
    }

    close(){
        this._popupSelector.classList.remouve('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event){
        if (event.code === 'Escape') {
            this.close(); 
        }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (e) => {
        if ((e.target.classList.contains('popup_opened')) || (e.target.classList.contains('popup__button-close'))) {
                this.close();
            }
        });
    };

}


Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
Принимает в конструктор единственный параметр — селектор попапа.
Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. 
Модальное окно также закрывается при клике на затемнённую область вокруг формы.