//Place to store todos
// var todos = ['item1', 'item2', 'item3'];

//Place to display todos
//console.log("My Todos:", todos);
//Output: My Todos: [ 'item1', 'item2', 'item3' ]

//Way to add new todos -- use push command on the array
// todos.push('item4', 'item5');
//console.log("My Todos:", todos);
//Output: My Todos: [ 'item1', 'item2', 'item3', 'item4', 'item5' ]

//Way to change existing todos -- 1)isolate targeted todos via zero-index bracket, 2)add = sign and the new value
// todos[0] = "item 1 updated";
//console.log("My Todos:", todos);
//Output: My Todos: [ 'item 1 updated', 'item2', 'item3', 'item4', 'item5' ]

//Way to delete existing todos -- use splice command on the array
//1)splice(enter number you want to start deletion at[zero-indexed], then how many items to delete (human-count))
// todos.splice(0,1);
//console.log("My Todos:", todos);
//Output: My Todos: [ 'item2', 'item3', 'item4', 'item5' ]
// todos.splice(3,1);
// console.log("My Todos:", todos);
//Output: My Todos: [ 'item2', 'item3', 'item4' ]

//FUNCTIONS
// function displayTodos() {
//     console.log("My Todos: ", todos);
// }
// displayTodos();

// function addTodos(todo){
//     todos.push(todo);
//     displayTodos();
// }
// addTodos('newest Todo');
// addTodos('hello there');
// //instead of calling a separate function to displays todos after theyve been added, we'll add it to the addTodo function
// // addTodos();
// // displayTodos();

// // addTodos();
// // displayTodos();

// function changeTodos(position, newValue){
//     todos[position] = newValue;
//     displayTodos();
// }
// changeTodos(1,"upgrade 2.0");
// changeTodos(0,"changed");
// changeTodos(0,"changed again");

// // function deleteTodos(start, total){
// //     todos.splice(start, total);
// //     displayTodos();
// // }
// // deleteTodos(2,1);
// // deleteTodos(0,3);

// //in vid example - function only takes position as parameter
// function deleteTodos(position){
//     todos.splice(position, 1); //because we're only deleting 1 item, we use 1 after position in function
//     displayTodos();
// }
// deleteTodos(2);
// deleteTodos(3)

//Objects
var candice = {
    name: 'Candice',
    sayName: function(){
        console.log(this.name);
    }
}
candice.sayName();

var todoList = {
    todos: [],
    displayTodos: function(){
        console.log(this.todos);
    },
    addTodos: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
            });
        this.displayTodos();
    },
    changeTodos: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodos: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
// console.log(todoList.todos);
// console.log(todoList.displayTodos());
console.log(todoList.addTodos('item 4', 'item 5'));
console.log(todoList.changeTodos(3, 'changed'));
console.log(todoList.deleteTodos(1));
