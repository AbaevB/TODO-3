(function(){
// Создание заголовка приложения
function createAppTitle(){
  let AppTitle = document.createElement('h2');

  AppTitle.innerHTML = title;
  AppTitle.classList.add('display-2');
  return AppTitle;
}//end of createAppTitle


// Создание формы
function createTodoItemForm(){
  let form = document.createElement('form');
  let input = document.createElement('input');
  let buttonWrapper = document.createElement('div');
  let button = document.createElement('button');

  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control');
  input.placeholder = 'Add new task name';
  buttonWrapper.classList.add('input-group-append');
  button.classList.add('btn btn-outline-primary');
  button.setAttribute('type', 'submit');
  button.textContent = 'Add task';

  buttonWrapper.append(button);
  form.append.append(input);
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
} )();
