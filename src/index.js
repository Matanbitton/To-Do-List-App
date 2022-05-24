import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";
import Project from "./project";
import ProjectsList from "./projectslist";
import renderToDos from "./rendertodos";

const toDoDisplayed = document.querySelector(".displayed-todos");
let myList = new ToDoList();
let myTodo = new ToDo("Take the dog for a walk", "des", "date", "important");
let moreTodo = new ToDo("movie with friends", "black", "tommorow", "important");
myList.addToDo(myTodo);
myList.addToDo(moreTodo);
renderToDos(myList.toDos);
console.log("ptoato");

let workProject = new Project("Art");
workProject.addToProjectToDos(myList);
let projectsList = new ProjectsList();

projectsList.addToProjectList(workProject);
