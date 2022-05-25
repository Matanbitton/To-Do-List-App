import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";
import Project from "./project";
import ProjectsList from "./projectslist";
import { renderToDos, listEmptyShowSVG } from "./rendertodos";
import renderProjects from "./renderprojects";
import icon from "./noToDos.svg";

const toDoDisplayed = document.querySelector(".displayed-todos");
let toDoSectionContainer = document.querySelector(".todo-section-container");

const myIcon = new Image();
myIcon.src = icon;

let myList = new ToDoList();
let myTodo = new ToDo("Take the dog for a walk", "des", "date", "important");
let moreTodo = new ToDo("movie with friends", "black", "tommorow", "important");
let moreTodo1 = new ToDo("Ruhi Yahud", "black", "tommorow", "important");
let moreTodo2 = new ToDo("Eat Falafel", "black", "tommorow", "important");

renderToDos(myList.toDos);
listEmptyShowSVG(toDoDisplayed, myList.toDos, myIcon);

let workProject = new Project("Art");
workProject.addToProjectToDos(myList);
let projectsList = new ProjectsList();

projectsList.addToProjectList(workProject);
renderProjects(projectsList.projects);
