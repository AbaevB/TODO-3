(function () {
  // Создание заголовка приложения
  function createAppTitle(title) {
    let AppTitle = document.createElement('h2');

    AppTitle.innerHTML = title;
    AppTitle.classList.add('display-4');
    return AppTitle;
  }//end of createAppTitle


  // Создание формы
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control', 'form-control-action', 'form-control-lg');
    input.placeholder = 'Add new task name';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-outline-primary', 'btn-lg');
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
  function createTodoList() {
    list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  } // end of createTodoList

  function createTodoItem(name) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    item.textContent = name;

    item.classList.add('list-group-item', 'list-group-item-action', 'justify-content-between', 'd-flex', 'align-items-center');
    buttonGroup.classList.add('btn-group');
    doneButton.classList.add('btn', 'btn-outline-success');
    doneButton.textContent = 'Done';
    deleteButton.classList.add('btn', 'btn-outline-danger');
    deleteButton.textContent = 'Delete';


    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
    }
  } // end of createTodoItem

  document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('todo-app');

    let todoAppTitle = createAppTitle('Task List');
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    ////////////////////////////////////////////////////////// FORM SUBMIT
    todoItemForm.form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!todoItemForm.input.value) {
        return;
      }
       let todoItem = createTodoItem(todoItemForm.input.value); // ???
      // Adding handlers to the "Done" and "Delete" buttons
        todoItem.doneButton.addEventListener('click', function(){
          todoItem.item.classList.toggle('list-group-item-success');
        });
        todoItem.deleteButton.addEventListener('click', function(){
          if(confirm('You are sure?')){
            todoItem.item.remove();
          }
        });
      //  Creating and adding to the list a new task with a name taken from the input field
      todoList.append(todoItem.item);
      // Clear the input field
      todoItemForm.input.value = '';
    } ); ////////////////////////////////////////////////// End of FORM SUBMIT

  });// end of DOMContentLoaded
})();
