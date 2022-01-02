const buttonProfileEdit = document.querySelector( '.profile__edit');
// const buttonProfileAdd = document.querySelector(selectors: '.profile__add');
// const editButtonSave = document.querySelector(selectors: '.edit__button-save');
const editButtonClose = document.querySelector( '.edit__button-close');
const edit = document.querySelector('.edit');
const editButtonActiveClass = 'edit_active';

buttonProfileEdit.addEventListener( 'click', function() {
edit.classList.add(editButtonActiveClass);    
});

editButtonClose.addEventListener( 'click', function() {
edit.classList.remove(editButtonActiveClass);
});