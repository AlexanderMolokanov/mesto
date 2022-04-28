import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, formProfile) {
        super(popupSelector);
        this._formProfile = document.querySelector(formProfile);
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        добавить обработчик сабмита формы
        this._formProfile.addEventListener('submit', (evt) => {
            evt.preventDefault();
            profileTitle.textContent = profileEditInput.value;
            profileSubtitle.textContent = profileEditJob.value;
            closePopup(profilePopup);
        };
    }

    Метод setEventListeners класса PopupWithForm должен не только добавлять
    обработчик клика иконке закрытия,
    но и добавлять обработчик сабмита формы.

    close() {
        Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
        Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
        
    }
}

Создайте класс PopupWithForm, который наследует от Popup.
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    Содержит
приватный метод _getInputValues, который собирает данные всех полей формы.
Перезаписывает родительский метод setEventListeners.


export default class PopupWithForm extends Popup {
    constructor(dataSelectors, submitHandler) {
        super(dataSelectors.popup);
        this._form = this.popup.querySelector(dataSelectors.formSelector);
        this._inputList = Array.from(this._form.querySelectorAll(dataSelectors.inputSelector));
        this._submitHandler = submitHandler;
    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    };

    setEventListenersForm() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValues());
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
}