import "./style.css";
import ToDo from "./todo";
import ToDoList from "./todolist";
import Project from "./project";
import ProjectsList from "./projectslist";
import jsConfetti from "canvas-confetti";
import {
  format,
  compareAsc,
  parseISO,
  parse,
  differenceInCalendarDays,
  add,
} from "date-fns";

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
  const projectsContainer = document.querySelector(".projects-container");
  const listCatagoryTitle = document.querySelector(".list-catagory-shown");
  const thisWeekButton = document.querySelector(".this-week-todos");
  const todayButton = document.querySelector(".today-todos");

  let toDoDivList;

  formVisiblity();
  projectFormVisibility();
  createToDoDivs(toDoList.toDos);
  checkButtonEL();
  changeDateButtonEL();

  body.addEventListener("click", (e) => {
    // when user presses the form sumbit button this event listener fires and adds a new todo
    if (e.target && e.target.id == "submit") {
      e.preventDefault();
      const form = document.querySelector("#form");
      const toDoTitle = document.getElementById("todo-title").value;
      const toDoDescription = document.getElementById("todo-description").value;
      let toDoDate = document.getElementById("todo-date").value;
      const toDoPriority = document.getElementById("todo-priority").value;
      const toDoProject = document.getElementById("todo-project").value;

      if (toDoDate) {
        toDoDate = `${format(parseISO(toDoDate), "dd/MM/yyyy")}`;
      }

      const toDo = new ToDo(
        toDoTitle,
        toDoDescription,
        toDoDate,
        toDoPriority,
        toDoProject
      );
      toDoList.addToDo(toDo);
      toDoDivList = createToDoDivs(toDoList.toDos);
      checkButtonEL();
      changeDateButtonEL();
      form.reset();
    }
  });

  doneToDoButton.addEventListener("click", () => {
    let listDoneDivs = toDoList.toDos.filter((toDo) => toDo.done == true);

    createToDoDivs(listDoneDivs);
    checkButtonEL();
    changeDateButtonEL();
    changeListCatagoryTitle("Done");
  });

  allToDoButton.addEventListener("click", () => {
    let allToDo = toDoList.toDos;
    toDoDisplayed.innerHTML = "";
    createToDoDivs(allToDo);
    checkButtonEL();
    changeDateButtonEL();
    changeListCatagoryTitle("All Time");
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

          const targetToDoDiv = e.target.parentNode.parentNode.dataset.name;

          let targetToDoObj = toDoList.getToDo(targetToDoDiv);
          targetToDoObj.done = false;

          e.target.parentNode.parentNode.dataset.state = "";
        }
      });
    });
  }
  function changeDateButtonEL() {
    const changeDateButtons = document.querySelectorAll(".change-date");

    changeDateButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const toDoDiv = e.target.parentNode.parentNode.dataset.name;
        let dateElement = e.target.parentNode.firstChild;
        dateElement.innerHTML = `<input class= "date-changer" type = "date">`;
        dateElement.addEventListener("change", (event) => {
          let dateFormatted = `${format(
            parseISO(event.target.value),
            "dd/MM/yyyy"
          )}`;
          dateElement.innerHTML = dateFormatted;
          toDoList.changeDate(toDoDiv, dateFormatted);
        });
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
  // this deletes the todo from list and from page
  toDoDisplayed.addEventListener("click", (e) => {
    let toDoDiv = e.target.parentNode.parentNode;
    if (toDoDiv.dataset.name && e.target.className == "delete") {
      toDoList.removeToDo(toDoDiv.dataset.name);
      toDoDiv.remove();
      if (toDoList.toDos.length == 0) {
        listEmptyShowSVG(toDoDisplayed, myIcon);
      }
    }
  });
  // this changes the title to the current project shown
  projectsContainer.addEventListener("click", (e) => {
    if (e.target.className == "project-item") {
      const projectShown = e.target.dataset.projectName;
      const projectsToDos = toDoList.toDos.filter(
        (toDo) => toDo.project == projectShown
      );
      createToDoDivs(projectsToDos);
      checkButtonEL();

      changeDateButtonEL();

      changeListCatagoryTitle(`For ${projectShown}`);
    }
  });
  thisWeekButton.addEventListener("click", () => {
    let todayDate = new Date();
    todayDate = todayDate.toISOString();
    let temp = todayDate;
    todayDate = format(parseISO(todayDate), "dd/MM/yyyy");
    let theDateInAWeek = add(parseISO(temp), { days: 7 });
    theDateInAWeek = format(theDateInAWeek, "dd/MM/yyyy");
    let thisWeekToDos = toDoList.toDos.filter((toDo) => {
      let daysDiff = differenceInCalendarDays(
        parse(theDateInAWeek, "dd/MM/yyyy", new Date()),
        parse(toDo.dueDate, "dd/MM/yyyy", new Date())
      );
      console.log(daysDiff);
      return daysDiff <= 7 && daysDiff >= 0;
    });
    let daysDiff = differenceInCalendarDays(
      parse(theDateInAWeek, "dd/MM/yyyy", new Date()),
      parse(todayDate, "dd/MM/yyyy", new Date())
    );
    console.log(todayDate);
    console.log(theDateInAWeek);
    console.log(thisWeekToDos);

    createToDoDivs(thisWeekToDos);
    checkButtonEL();
    changeDateButtonEL();

    changeListCatagoryTitle(`This Week`);
  });
  todayButton.addEventListener("click", () => {
    changeListCatagoryTitle("Today");
  });

  function changeListCatagoryTitle(title) {
    listCatagoryTitle.textContent = title;
  }

  let projectsList = new ProjectsList();
  renderProjects(projectsList.projects);
})();
