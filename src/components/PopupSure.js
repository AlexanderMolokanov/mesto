import { Popup } from './Popup.js';

export class PopupSure extends Popup {

    constructor(popup, submitHandler) {
        super(popup)
        this._submitHandler = submitHandler;
        this._card = null;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._card.cardId);
        })
        
    }

    setCard(card) {
        this._card = card;
    }

    getCard() {
        return this._card;
    }
}