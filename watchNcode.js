//Place to store todos
var todos = ['item1', 'item2', 'item3'];

//Place to display todos
//console.log("My Todos:", todos);
//Output: My Todos: [ 'item1', 'item2', 'item3' ]

//Way to add new todos -- use push command on the array
todos.push('item4', 'item5');
//console.log("My Todos:", todos);
//Output: My Todos: [ 'item1', 'item2', 'item3', 'item4', 'item5' ]

//Way to change existing todos -- 1)isolate targeted todos via zero-index bracket, 2)add = sign and the new value
todos[0] = "item 1 updated";
console.log("My Todos:", todos);