import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";
import Project from "./project";
import ProjectsList from "./projectslist";
import { renderToDos, listEmptyShowSVG } from "./rendertodos";
import renderProjects from "./renderprojects";
import icon from "./noToDos.svg";
import formVisiblity from "./toDoUserInput";

(function ToDoListApp() {
  formVisiblity();

  const toDoDisplayed = document.querySelector(".displayed-todos");
  const form = document.querySelector(".add-todo-form");
  const myList = new ToDoList();
  renderToDos(myList.toDos);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const toDoTitle = document.getElementById("todo-title").value;
    const toDoDescription = document.getElementById("todo-description").value;
    const toDoDate = document.getElementById("todo-date").value;
    const toDoPriority = document.getElementById("todo-priority").value;
    const toDo = new ToDo(toDoTitle, toDoDescription, toDoDate, toDoPriority);
    myList.addToDo(toDo);
    renderToDos(myList.toDos);
  });

  const myIcon = new Image();
  myIcon.className = "no-todos-img";
  myIcon.src = icon;

  toDoDisplayed.addEventListener("click", (e) => {
    let toDoDiv = e.target.parentNode.parentNode;

    if (toDoDiv.dataset.name && e.target.className == "delete") {
      myList.removeToDo(toDoDiv.dataset.name);
      toDoDiv.remove();
      console.log(myList.toDos);
      if (myList.toDos.length == 0) {
        listEmptyShowSVG(toDoDisplayed, myIcon);
      }
    }
  });

  let workProject = new Project("Art");
  workProject.addToProjectToDos(myList);
  let projectsList = new ProjectsList();

  // this works and you need a function that deletes
  // the appropriate todo in relations to html element pressed

  projectsList.addToProjectList(workProject);
  renderProjects(projectsList.projects);
})();
