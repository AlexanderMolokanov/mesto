import { Popup } from './Popup.js';

export class PopupSure extends Popup {

    constructor(popup, submitHandler) {
        super(popup)
        this._submitHandler = submitHandler;
        this._card = null;
        this._button = this._popup.querySelector('.popup__button-save')
    }

    buttonText(text) {
        this._button.textContent = text
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._card);
        })
    }

    setCard(card) {
        this._card = card;
    }

    getCard() {
        return this._card;
    }
}