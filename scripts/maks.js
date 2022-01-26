const initialTodos = [
    {
        title: 'Покормить кота'
    },
    {
        title: 'Поработать'
    },
    {
        title: 'Провести вебинар'
    }
]

const todosWrap = document.querySelector('.todos__list');
const todosWrapFooter = document.querySelector('.todos__list_footer');
const form = document.querySelector('.form');
const todoInput = document.querySelector('[name="todo-name"]');
const todoTemplate = document.querySelector('#todo-template');
    .content.querySelector('.todo')

const getTodoElement = (item) => {
    // innerHTML
    // const template = `
    //     <li class="todos__item todo">
    //         <div class="todo__description">
    //             <h2 class="todo__title">${item.title}</h2>
    //             <div>
    //                 <button type="button" class="todo__delete-button"></button>
    //                 <button type="button" class="todo__like-button"></button>
    //             </div>
    //         </div>
    //     </li>
    // `

    //todosWrap.innerHTML += template;
    //todosWrap.insertAdjacentHTML('beforeend', template)

    const todo = todoTemplate.cloneNode(true);
    const todoTitle = todo.querySelector('.todo__title');
    const todoLikeButton = todo.querySelector('.todo__like-button');
    const todoDeleteButton = todo.querySelector('.todo__delete-button');

    todoLikeButton.addEventListener('click', handleLikeButton)
    todoDeleteButton.addEventListener('click', handleDeleteButton)

    todoTitle.textContent = item.title;

    return todo;
}

const renderTodo = (item, wrap) => {
    const todo = getTodoElement(item)
    wrap.prepend(todo)
}

const handleLikeButton = (e) => { 
    e.target.classList.toggle('todo__like-button_is-active')
}

const handleDeleteButton = (e) => {
    e.target.closest('.todo').remove();
}

const handleTodoFormSubmit = (e) => {
    e.preventDefault();
    const todo = {
        title: todoInput.value
    }
    renderTodo(todo, todosWrap);
}

initialTodos.forEach(item => {
    renderTodo(item, todosWrap)
})

form.addEventListener('submit', handleTodoFormSubmit) 