///render a todo list///

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [""]

renderTodos();

function renderTodos() {
    //clear to do list element and update todoCountspan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
    //Rnder and new li for each todo
 for (var i = 0; i < todo.length; i++) {
     var todo = todos [i];

     var li = document.createElement ("li");
     li.textContent = tdod;
     todoList.appendChild("li");
 }
}

    todoForm.addEventListener("submit" , function(event){
        event.preventDefault();

        var newTodo = todoInput.value.trim();

        if (newTodo === ""){
            return;
        }
        todos.push(newTodo);
        todoInput.value = "";

        renderTodos();
    });