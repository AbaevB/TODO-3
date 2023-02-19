(function(){
// Создание заголовка приложения
function createAppTitle(title){
  let AppTitle = document.createElement('h2');

  AppTitle.innerHTML = title;
  AppTitle.classList.add('display-4');
  return AppTitle;
}//end of createAppTitle


// Создание формы
function createTodoItemForm(){
  let form = document.createElement('form');
  let input = document.createElement('input');
  let buttonWrapper = document.createElement('div');
  let button = document.createElement('button');

  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control', 'form-control-lg');
  input.placeholder = 'Add new task name';
  buttonWrapper.classList.add('input-group-append');
  button.classList.add('btn', 'btn-outline-primary',  'btn-lg');
  button.setAttribute('type', 'submit');
  button.textContent = 'Add task';

  buttonWrapper.append(button);
  form.append(input);
  form.append(buttonWrapper);

  return {
    form,
    input,
    button,
  }
}// end of createTodoItemForm
// Создание списка элементов.
function createTodoList(){
  list = document.createElement('ul');
  list.classList.add('list-group');
  return list;
} // end of createTodoList

function createTodoItem(name){

} // end of createTodoItem

document.addEventListener('DOMContentLoaded', function(){
  let container = document.getElementById('todo-app');

  let todoAppTitle = createAppTitle('Task List');
  let todoItemForm = createTodoItemForm();
  let todoList = createTodoList();

  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);



});// end of DOMContentLoaded
} )();
