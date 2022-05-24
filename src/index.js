import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";
import Project from "./project";
import ProjectsList from "./projectslist";
import renderToDos from "./rendertodos";
import renderProjects from "./renderprojects";

const toDoDisplayed = document.querySelector(".displayed-todos");
let myList = new ToDoList();
let myTodo = new ToDo("Take the dog for a walk", "des", "date", "important");
let moreTodo = new ToDo("movie with friends", "black", "tommorow", "important");
let moreTodo1 = new ToDo("Ruhi Yahud", "black", "tommorow", "important");
let moreTodo2 = new ToDo("Eat Falafel", "black", "tommorow", "important");
myList.addToDo(myTodo);
myList.addToDo(moreTodo);
myList.addToDo(moreTodo1);
myList.addToDo(moreTodo2);
renderToDos(myList.toDos);

let workProject = new Project("Art");
workProject.addToProjectToDos(myList);
let projectsList = new ProjectsList();

projectsList.addToProjectList(workProject);
renderProjects(projectsList.projects);
