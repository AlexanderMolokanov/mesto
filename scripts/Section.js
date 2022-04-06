export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItem() {
        this._items.forEach(element => {
            const item = this._renderer(element);
            this.addItem(item);
        });
    }

    addItem(element) {
        this._container.prepend(element)
    }

}