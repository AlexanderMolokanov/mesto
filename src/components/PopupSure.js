import { Popup } from './Popup.js';

export class PopupSure extends Popup {

    static selectors = {
        formAskSure: ".hide-input",
    } 
    
    constructor(popupSelector, submitHandler) {
        super(popupSelector)
        this._submitHandler = submitHandler;
        this._hideInput = document.querySelector(PopupSure.selectors.formAskSure);
        this.card = null;
    }

    _getInputValues() {
        return this._hideInput.value;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValues());
        })
        
    }

    setCard(card) {
        this.card = card;
        this.setEventListeners()
    }

    getCard() {
        return this.card;
    }
}