import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, formProfile, formSubmitHandler) {
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
        this._formProfile.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formSubmitHandler(this._getInputValues());
        });
    }

    close() {
        this._formProfile.reset();
    }
}