import {
    Popup
} from './Popup.js';

export class PopupWithForm extends Popup {

    // static selectors = {
    //     formCard: document.forms.card,
    //     // imageCaption: ".popup__image-caption",
    //     // this._imageCaption = document.querySelector(".popup__image-caption");
    //     formCard: document.forms.card
    // }

    constructor(popupSelector, formSubmitHandler) {
        super(popupSelector)
        this._formSubmitHandler = formSubmitHandler;
        // console.log(this._formSubmitHandler)
        this._inputList = Array.from(this._popupSelector.querySelectorAll(".popup__input"));
        this._formValues = {};
        // console.log(this._inputList)
        // this._formName = this._popupSelector.querySelector(".popup__form");
        // console.log(this._formName)
    }

    _getInputValues() {
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value
        })
        // console.log(this.formValues)
        return this.formValues
    }

    setEventListeners() {
        super.setEventListeners();
        // this._getInputValues()
        this._popupSelector.addEventListener('submit', this._formSubmitHandler)
    }

    close() {
        super.close()
        this._popupSelector.reset();
        // this._formName = this._popupSelector.querySelector(".popup__input"));
    }
}

/* <div class="popup" id="add_place">
            <div class="popup__container">
                <button class="popup__button-close" type="button" id="place-close-button" name="place-close"></button>
                <h2 class="popup__label">Новое место</h2>
                <form class="popup__form" id="place-edit" name="card" method="get" novalidate>
                    <div class="popup__input-wrapper">
                        <input required minlength="2" maxlength="200"
                        class="popup__input"
                        id="place-name-input"
                        name="place-name" type="text" placeholder="Название">
                        <span id="place-name-input-error" class="popup__error"></span>
                    </div>
                    <div class="popup__input-wrapper">
                        <input type="url" required
                        class="popup__input"
                        id="place-link-input"
                        name="place-link"
                        placeholder="Ссылка на картинку">
                        <span id="place-link-input-error" class="popup__error"></span>
                    </div>
                    <button class="popup__button-save" type="submit">Сохранить</button>

                </form>
            </div>
        </div> */
// }

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


// export default class PopupWithForm extends Popup {
//     constructor(popupSelector, formProfile, formSubmitHandler) {
//         super(popupSelector);
//         this._formProfile = document.querySelector(formProfile);
//     }

//     _getInputValues() {
//         this._formValues = {};
//         this._inputList.forEach((input) => {
//             this._formValues[input.name] = input.value;
//         });
//         return this._formValues;
//     };

//     setEventListeners() {
//         super.setEventListeners();
//         this._formProfile.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this.formSubmitHandler(this._getInputValues());
//         });
//     }

//     close() {
//         this._formProfile.reset();
//     }
// }