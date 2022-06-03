import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";
import Project from "./project";
import ProjectsList from "./projectslist";
import jsConfetti from "canvas-confetti";

import {
  renderProjects,
  renderToDos,
  createToDoDivs,
  listEmptyShowSVG,
  formVisiblity,
} from "./dom";
import icon from "./noToDos.svg";

(function ToDoListApp() {
  const body = document.body;
  const toDoDisplayed = document.querySelector(".displayed-todos");
  const toDoList = new ToDoList();
  const doneToDoButton = document.querySelector(".done-todos");
  const allToDoButton = document.querySelector(".all-todos");
  const addProjectButton = document.querySelector(".add-project");
  const projectsContainer = document.querySelector(".projects");

  let toDoDivList;

  formVisiblity();
  projectFormVisibility();
  createToDoDivs(toDoList.toDos);
  checkButtonEL();

  body.addEventListener("click", (e) => {
    // when user presses the form sumbit button this event listener fires and adds a new todo
    if (e.target && e.target.id == "submit") {
      e.preventDefault();

      const toDoTitle = document.getElementById("todo-title").value;
      const toDoDescription = document.getElementById("todo-description").value;
      const toDoDate = document.getElementById("todo-date").value;
      const toDoPriority = document.getElementById("todo-priority").value;
      const toDo = new ToDo(toDoTitle, toDoDescription, toDoDate, toDoPriority);
      toDoList.addToDo(toDo);
      toDoDivList = createToDoDivs(toDoList.toDos);
      checkButtonEL();
    }
  });

  doneToDoButton.addEventListener("click", () => {
    let listDoneDivs = toDoList.toDos.filter((toDo) => toDo.done == true);

    createToDoDivs(listDoneDivs);
    checkButtonEL();
  });

  allToDoButton.addEventListener("click", () => {
    let allToDo = toDoList.toDos;
    toDoDisplayed.innerHTML = "";
    createToDoDivs(allToDo);
    checkButtonEL();
  });
  function checkButtonEL() {
    const checkButton = document.querySelectorAll(".check");

    checkButton.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (
          e.target.id == "check" &&
          !e.target.parentNode.parentNode.classList.contains("todo-done")
        ) {
          e.target.parentNode.parentNode.classList.add("todo-done");
          e.target.parentNode.parentNode.dataset.state = "done";
          const targetToDoDiv = e.target.parentNode.parentNode.dataset.name;
          let targetToDoObj = toDoList.getToDo(targetToDoDiv);
          targetToDoObj.done = true;

          let confetti = jsConfetti({
            spread: 120,
            particleCount: 200,
            startVelocity: 100,
            origin: { y: 1.1 },
          });
        } else {
          e.target.parentNode.parentNode.classList.remove("todo-done");
          e.target.parentNode.parentNode.dataset.state = "";

          console.log(e.target.parentNode.parentNode);
          const targetToDoDiv = e.target.parentNode.parentNode.dataset.name;
          console.log(`targetToDoDiv = ${targetToDoDiv}`);
          let targetToDoObj = toDoList.getToDo(targetToDoDiv);
          targetToDoObj.done = false;
          console.log(`targetToDoObj = ${targetToDoObj}`);
          e.target.parentNode.parentNode.dataset.state = "";
        }
      });
    });
  }
  function projectFormVisibility() {
    const typeProjectNameInput = document.querySelector("#project-input");
    const typeProjectNameInputSubmit = document.querySelector(
      "#project-input-submit"
    );
    addProjectButton.addEventListener("click", () => {
      typeProjectNameInput.value = "";

      typeProjectNameInput.style.display = "block";
      typeProjectNameInputSubmit.style.display = "block";
    });

    typeProjectNameInputSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      typeProjectNameInput.style.display = "none";
      typeProjectNameInputSubmit.style.display = "none";

      if (typeProjectNameInput.value.length != 0) {
        let projectName = new Project(typeProjectNameInput.value);
        projectsList.addToProjectList(projectName);
        renderProjects(projectsList.projects);
      } else {
        typeProjectNameInput.style.border = "2px solid red";
      }
    });
  }

  const myIcon = new Image();
  myIcon.className = "no-todos-img";
  myIcon.src = icon;

  toDoDisplayed.addEventListener("click", (e) => {
    let toDoDiv = e.target.parentNode.parentNode;
    if (toDoDiv.dataset.name && e.target.className == "delete") {
      toDoList.removeToDo(toDoDiv.dataset.name);
      toDoDiv.remove();
      console.log(toDoList.toDos);
      if (toDoList.toDos.length == 0) {
        listEmptyShowSVG(toDoDisplayed, myIcon);
      }
    }
  });

  let workProject = new Project("Art");
  workProject.addToProjectToDos(toDoList);
  let projectsList = new ProjectsList();

  // this works and you need a function that deletes
  // the appropriate todo in relations to html element pressed

  projectsList.addToProjectList(workProject);
  renderProjects(projectsList.projects);
})();
