import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";

let myList = new ToDoList();
let myTodo = new ToDo("title", "des", "date", "important");
let moreTodo = new ToDo("movie", "black", "tommorow", "important");
myList.addToDo(myTodo);
myList.addToDo(moreTodo);
console.log(myList);
myList.removeToDo(myTodo);

console.log(myList);
