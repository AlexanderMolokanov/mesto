import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {

    constructor(popup, formSubmitHandler) {
        super(popup)
        this._formSubmitHandler = formSubmitHandler;
        this._inputList = Array.from(this._popup.querySelectorAll(".popup__input"));
        this._formValues = {};
        this._form = this._popup.querySelector(".popup__form");
        this._button = this._popup.querySelector('.popup__button-save')
    }

    // buttonText(text) {
    //     this._button.textContent = text
    // }

    _getInputValues() {
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value
        })
        return this._formValues
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (e) => {
            e.preventDefault();
            this._formSubmitHandler(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}

// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners
//  класса PopupWithForm
// должен не только добавлять обработчик клика иконке закрытия,
//  но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма
// должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.