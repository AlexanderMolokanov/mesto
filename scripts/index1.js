const initialElements = [
    {
        name: "Дальний восток",
        link: "https://drive.google.com/file/d/1z-vIjHjRQSJ5HMAA23lBV7WFJqNLyw8j/view?usp=sharing",
    },
    {
        name: "Домбай",
        link: "https://drive.google.com/uc?export=download&id=19GpMhC0OM20Kicd9koU2uzn639iZfYye",
    },
    {
        name: "Эльбрус",
        link: "https://drive.google.com/uc?export=download&id=1KtjgpgRM64pDjC5xTbCKqeDjThm2c8lc",
    },
    {
        name: "Карачаевск",
        link: "https://drive.google.com/uc?export=download&id=1jsh4Jjoxy698UIEZXqvIy69JUvEV-rlL",
    },
    {
        name: "Кольчугино",
        link: "https://drive.google.com/uc?export=download&id=1jsh4Jjoxy698UIEZXqvIy69JUvEV-rlL",
    },
    {
        name: "Москва",
        link: "https://drive.google.com/uc?export=download&id=1jsh4Jjoxy698UIEZXqvIy69JUvEV-rlL",
    },
];

const elementPlase = document.querySelector('.elements');
const template = document.querySelector('#element-template')
// const todoTemplate = template.cloneNode(true);

// const todoImage = todo.querySelector('.element__image');
// const todoTitle = todo.querySelector('.element__title');

// const todoHeart = todo.querySelector('.element__heart');
// const todoDelete = todo.querySelector('.element__delete');

// todoHeart.addEventListener('click', handleLikeButton)
// todoDelete.addEventListener('click', handleDeleteButton)


// const handleLikeButton = (e) => {
//     e.target.classList.toggle('todo__like-button_is-active')
// }

// const handleDeleteButton = (e) => {
//     e.target.closest('.todo').remove();
// }

const todoElement = (item) => {
    const todoTemplate = template.cloneNode(true);
    const todoTitle = todoTemplate.querySelector('.element__title');
    const todoLink = todoTemplate.querySelector('.element__image');
    const todoLikeButton = todoTemplate.querySelector('.todo__like-button');
    const todoDeleteButton = todoTemplate.querySelector('.todo__delete-button');

    // todoLikeButton.addEventListener('click', handleLikeButton);
    // todoDeleteButton.addEventListener('click', handleDeleteButton);

    todoTitle.textContent = item.name;
    todoLink.src = item.link;

    return todo;
}

const addElementToContainer = (element, container) => {
    const todo = todoElement(element)
    container.prepend(todo)
}

initialElements.forEach(elementData => {
    addElementToContainer(elementData, elementPlase)
})

