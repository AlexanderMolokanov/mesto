export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector)
    }

    addItem(item) {
        this._containerSelector.prepend(item)
    }

    renderItems() {
        this._items.forEach((element) => {
            const item = this._renderer(element);
            this.addItem(item)
        }); 
    }
}

// Создайте класс Section, который отвечает за отрисовку элементов на странице.
// Этот класс:
// Первым параметром конструктора принимает объект с двумя свойствами: items и 
// renderer.Свойство items — это массив данных,
//     которые нужно добавить на страницу при инициализации класса.Свойство 
// renderer — это функция, которая отвечает за создание
// и отрисовку данных на странице.
// Второй параметр конструктора — селектор контейнера, в который нужно добавлять 
// созданные элементы.
// Содержит публичный метод, который отвечает за отрисовку всех элементов.
// Отрисовка каждого отдельного элемента должна
// осуществляться функцией renderer.
// Содержит публичный метод addItem, который принимает DOM - элемент и добавляет 
// его в контейнер.
// У класса Section нет своей разметки.Он получает разметку через функцию - 
// колбэк и вставляет её в контейнер.