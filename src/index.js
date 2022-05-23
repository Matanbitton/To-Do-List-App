import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";
import Project from "./project";
import ProjectsList from "./projectslist";
import renderToDos from "./rendertodos";

const toDoDisplayed = document.querySelector(".displayed-todos");
let myList = new ToDoList();
let myTodo = new ToDo("title", "des", "date", "important");
let moreTodo = new ToDo("movie", "black", "tommorow", "important");
myList.addToDo(myTodo);
myList.addToDo(moreTodo);
console.log(myList.toDos);
toDoDisplayed.append(renderToDos(myList.toDos));

let workProject = new Project("Art");
workProject.addToProjectToDos(myList);
let projectsList = new ProjectsList();

projectsList.addToProjectList(workProject);
