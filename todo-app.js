(function () {
  let deals = [];
  function updateLocal(list_name){
    localStorage.setItem(list_name, JSON.stringify(deals));
  }
  ///////////////////////////////////////////////createAppTitle
  function createAppTitle(title) {
    let AppTitle = document.createElement('h2');

    AppTitle.innerHTML = title;
    AppTitle.classList.add('display-4');
    return AppTitle;
  }//end of createAppTitle


  //////////////////////////////////////////createTodoItemForm
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

  function createTodoItem(task_obj,listname) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    item.textContent =task_obj.name;

    if(task_obj.done)
       item.classList.add('list-group-item-success');
    item.id = task_obj.id;

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
  } //////////////////////////////////////////////////////////////////////// end of createTodoItem

  function createTodoApp(container, title, listname ){
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    deals = JSON.parse(localStorage.getItem(listname));
    console.log(deals);
//////////////////////////////////////////////////////////////////////////// Checking local storage
    if(deals){

      for(let deal of deals){
        let item = createTodoItem({id: deal.id, name: deal.name, done: deal.done}, listname);
        ///////////////////////////// Done button handler
        item.doneButton.addEventListener('click', function(){
          item.item.classList.toggle('list-group-item-success');
          deals.map(el => el.id === Number(item.item.id) ? el.done = !el.done : null);
          updateLocal(listname);
        } );
        ///////////////////////////// Delete button handler
        item.deleteButton.addEventListener('click', function(){
          if (confirm('You are sure?')){
            deals = deals.filter(el => el.id !== Number(item.item.id));
            item.item.remove();
            updateLocal(listname);
          }
        });

        todoList.append(item.item);
      }


    }else{
      deals = [];
    }
//////////////////////////////////////////////////// end of Checking local storage


    ///////////////////////////////////////////////////////////////////////////////////////// FORM SUBMIT
    todoItemForm.form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!todoItemForm.input.value) {
        return;
      }
      ///// Create ID
      let i = 0;
      if(deals){
        for(let deal of deals){
          if (deal.id > i){
            i = deal.id;
          }
        }
      }
      ////// Transfer to local storage
      deals.push({id: i + 1, name: todoItemForm.input.value, done: false});


       let item = createTodoItem({id: i, name: todoItemForm.input.value, done: false}, listname); // ???
      //////////////////////////////////////////////// Adding handlers to the "Done" and "Delete" buttons
      /////////////////////////////////////////////////////// Done button handler
        item.doneButton.addEventListener('click', function(){
          item.item.classList.toggle('list-group-item-success');
          deals.map(el => el.done = el.done);
          updateLocal(listname);
          console.log(listname);
        });
        /////////////////////////////////////////////////////// Delete button handler
        item.deleteButton.addEventListener('click', function(){
          if(confirm('You are sure?')){
            deals = deals.filter(el => el.id !== Number(item.item.id))
            item.item.remove();
            updateLocal(listname);
            console.log(listname);
          }
        });
      //  Creating and adding to the list a new task with a name taken from the input field
      todoList.append(item.item);
      updateLocal(listname);
      // Clear the input field
      todoItemForm.input.value = '';
    } ); ////////////////////////////////////////// End of FORM SUBMIT
  }

  window.createTodoApp = createTodoApp;
})();
