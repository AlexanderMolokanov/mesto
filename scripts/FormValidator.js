export class FormValidator {
  constructor(options, formClass) {
    this._formClass = formClass;
    this._inputClass = options.inputClass;
    this._submitButtonSelector = options.submitButtonSelector;
    this._disabledButtonClass = options.disabledButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClassVisible = options.errorClassVisible;
    this._inputList = Array.from(this._formClass.querySelectorAll(this._inputClass));
    this._buttonElement = this._formClass.querySelector(this._submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formClass.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClassVisible);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formClass.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClassVisibles);
    errorElement.textContent = "";
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._disabledButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._disabledButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    // console.log(this._inputList)
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };

  resetValidation = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => this._hideInputError(inputElement));
  };

}