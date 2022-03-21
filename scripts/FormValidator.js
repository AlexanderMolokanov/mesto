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

  // _showInputError = (inputElement, errorMessage) => {
  //   const errorElement = this._formClass.querySelector(`#${inputElement.id}-error`);
  //   inputElement.classList.add(this._inputErrorClass);
  //   errorElement.textContent = errorMessage;
  //   errorElement.classList.add(this._errorClassVisible);
  // };

  // hideInputError(formElement, inputElement) {
  //   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  //   inputElement.classList.remove(this._inputErrorClass);
  //   errorElement.classList.remove(this._errorClassVisibles);
  //   errorElement.textContent = "";
  // }

  // _setEventListeners = () => {
  //   this._toggleButtonState();
  //   this._inputList.forEach((inputElement) => {
  //     inputElement.addEventListener("input", () => {
  //       this._checkInputValidity(inputElement);
  //       this._toggleButtonState();
  //     });
  //   });
  // };

  // _toggleButtonState = () => {
  //   if (this._hasInvalidInput()) {
  //     this._buttonElement.classList.add(this._disabledButtonClass);
  //     this._buttonElement.setAttribute('disabled', true);
  //   } else {
  //     this._buttonElement.classList.remove(this._disabledButtonClass);
  //     this._buttonElement.removeAttribute('disabled');
  //   }
  // };

  // toggleButtonState(inputList, buttonElement){
  //   if (this._hasInvalidInput(inputList)) {
  //       buttonElement.setAttribute('disabled', true);
  //       buttonElement.classList.add(this._disabledButtonClass);

  //   } else {
  //       buttonElement.classList.remove(this._disabledButtonClass);
  //       buttonElement.removeAttribute('disabled');
  //   }
  // }

  // _checkInputValidity = (inputElement) => {
  //   if (!inputElement.validity.valid) {
  //     this._showInputError(inputElement, inputElement.validationMessage);
  //   } else {
  //     this._hideInputError(inputElement);
  //   }
  // };

  // _hasInvalidInput(inputList) {
  //   return inputList.some((inputElement) => {
  //       return !inputElement.validity.valid;
  //   });
  // }

  // enableValidation = () => {
  //   this._formClass.addEventListener('submit', (evt) => evt.preventDefault());
  //   this._setEventListeners();
  // };

  // resetValidation = () => {
  //   this._toggleButtonState();
  //   this._inputList.forEach((inputElement) => this._hideInputError(inputElement));
  // };

  // clearErrorMessages(formElement, inputList) {
  //   inputList.forEach( (input) => {
  //       this.hideInputError(formElement, input);
  //   });
  // }

  enableValidation() {
    this._setEventListeners(this._formClass);
    // console.log(this._formClass)
  }

  _setEventListeners(formElement) {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this.toggleButtonState(inputList, buttonElement);
      });
    });
  }

  toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._disabledButtonClass);

    } else {
      buttonElement.classList.remove(this._disabledButtonClass);
      buttonElement.removeAttribute('disabled');

    }
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClassVisible);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(formElement)
    console.log(`#${inputElement.id}-error`)
    console.log(errorElement)
    inputElement.classList.remove(this._inputErrorClass);
    // console.log(inputElement)
    // console.log(this._inputErrorClass)

    errorElement.classList.remove(this._errorClassVisible);
    console.log(this._errorClassVisible)
    // console.log(errorElement)

    errorElement.textContent = "";
  }

  // _hideInputError = (inputElement) => {
  //   const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  //     // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  //   console.log(this._formElement)
  //   console.log(`#${inputElement.id}-error`)
  //   console.log(errorElement)
  //   inputElement.classList.remove(this._inputErrorClass);
  //   errorElement.classList.remove(this._errorClass);
  //   console.log(errorElement)
  //   errorElement.textContent = "";
  // };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  clearErrorMessages(formElement, inputList) {
    inputList.forEach((input) => {
      this._hideInputError(formElement, input);
    });
  }


}
