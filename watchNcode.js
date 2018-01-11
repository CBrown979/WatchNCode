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
    displayTodos: function(){//display todos should tell if .todos is empty
        if(this.todos.length===0){
            console.log('Your todo list is empty!');
        } else {
        console.log('My Todos:');
        for(var i=0; i<this.todos.length; i++){
            if(this.todos[i].completed === true){//display todos should show .completed
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('( )', this.todos[i].todoText);
            }
        }
      }
    },
    addTodos: function(todoText){ //todoList.addTodo should add objects
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodos: function(position, todoText){//changeTodo should change the todoText property
        // this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodos: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){ //toggleCompleted should change the completed property
        var todo = this.todos[position];
        todo.completed = !todo.completed; //to flip boolean from whatever it starts out as - false to true. or true to false
        this.displayTodos();
    },
    toggleAll: function(){
        var totalTodos=this.todos.length;
        var completedTodos = 0; //we assume that completedTodos starts out as none/zero complete
        
        //Get number of completed todos.
        for(var i=0; i<totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            } 
        }   
        //Case 1: if everything is true, make everything false
            if (completedTodos === totalTodos){
              for (var i=0; i<totalTodos; i++){
                this.todos[i].completed = false;
            }
        //Case 2: OTHERWISE (use else), make everything true
        } else {
            for(var i=0; i<totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

// 1 - get access to the display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
// console.log(displayTodosButton);

// 2 - run displayTodos method, when display button is clicked
displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});
todoList.addTodos('love yourself');
todoList.addTodos('eat right');

//3 - clicking toggleAll should run todoList.toggleAll
var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
});

// console.log(todoList.todos);
// console.log(todoList.displayTodos());
// console.log(todoList.addTodos('item 4', 'item 5'));
// console.log(todoList.changeTodos(3, 'changed'));
// console.log(todoList.deleteTodos(1));
// console.log(todoList.addTodos('this is an object'));
// console.log(todoList.changeTodos(0,"second try"));
// console.log(todoList.addTodos('boolean testings'));
// console.log(todoList.toggleCompleted(0));
// console.log(todoList.toggleCompleted(1));
// console.log(todoList.addTodos('first'));
// console.log(todoList.addTodos('second'));
// console.log(todoList.addTodos('third'));

// console.log(todoList.addTodos('first entry'));
// console.log(todoList.deleteTodos(0));
//Output for above line 130 and 131
// My Todos:
// first entry
// undefined
// Your todolist is empty
// undefined

// console.log(todoList.addTodos("first"));
// console.log(todoList.addTodos("second"));
// console.log(todoList.addTodos("third"));
// // console.log(todoList.toggleCompleted(0));
// // console.log(todoList.toggleCompleted(1));
// console.log(todoList.toggleAll());
// // console.log(todoList.displayTodos());
// console.log(todoList.toggleAll());
