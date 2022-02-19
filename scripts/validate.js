const formsValidationConfig = {
    formClass: '.popup__form',
    inputClass: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    disabledButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_underlining',
    errorClassVisible: 'popup__error_state_visible',
}

function showError (form, input, config) {
    input.classList.add(config.inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.classList.add(config.errorClassVisible)
    errorElement.textContent = input.validationMessage
};

function enableValidation(data) {
    const forms = [...document.querySelectorAll(data.formClass)]
    forms.forEach(form => setFormListeners(form, data))
};

function setFormListeners(form, config) {
    const inputs = [...form.querySelectorAll(config.inputClass)]
    
    inputs.forEach(input => input.addEventListener('input', () => handleField(form, input, config)))

    form.addEventListener('submit', handleSubmit)
    form.addEventListener('input', () => setSubmitButtonState(form, config))
    setSubmitButtonState(form, config)
 }

function hideError(form, input, config) {
    input.classList.remove(config.inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.classList.remove(config.errorClassVisible)
    errorElement.textContent = '';
};


function handleSubmit(event) {
    event.preventDefault()
}

function handleField(form, input, config) {
    if (input.validity.valid) {
        hideError(form, input, config)
    } else {
        showError(form, input, config)
    }
}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.submitButtonSelector)
    button.disabled = !form.checkValidity()
    button.classList.toggle(config.disabledButtonClass, !form.checkValidity());
};

enableValidation(formsValidationConfig);

