import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {

    constructor(popupSelector, formSubmitHandler) {
        super(popupSelector)
        this._formSubmitHandler = formSubmitHandler;
        this._inputList = Array.from(this._popupSelector.querySelectorAll(".popup__input"));
        this._formValues = {};
        this._form = this._popupSelector.querySelector(".popup__form");
    }

    _getInputValues() {
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value
        })
        return this.formValues
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', this._formSubmitHandler)
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