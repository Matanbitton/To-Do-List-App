import jsConfetti from "canvas-confetti";
import { format, compareAsc, parseISO } from "date-fns";

const displayedToDos = document.querySelector(".displayed-todos");

export function createToDoDivs(toDoObjects) {
  //creating the to do divs
  while (displayedToDos.firstChild) {
    displayedToDos.removeChild(displayedToDos.firstChild);
  }

  for (let i = 0; i < toDoObjects.length; i++) {
    const toDoDiv = document.createElement("div");
    const toDoText = document.createElement("p");
    const date = document.createElement("p");
    const description = document.createElement("div");

    const buttons = renderButtons();
    toDoDiv.className = "todo";
    date.className = "due-date";
    toDoText.className = "todo-text";
    description.style.display = "none";

    if (toDoObjects[i].done) {
      toDoDiv.classList.add("todo-done");
      toDoDiv.dataset.state = "done";
      toDoDiv.dataset.priority = toDoObjects[i]["priority"];
      toDoDiv.dataset.name = toDoObjects[i]["title"];
      toDoDiv.dataset.date = toDoObjects[i]["dueDate"];
      description.textContent = toDoObjects[i]["description"];
    } else {
      toDoDiv.className = "todo";
      toDoDiv.dataset.name = toDoObjects[i]["title"];
      toDoDiv.dataset.priority = toDoObjects[i]["priority"];
      toDoDiv.dataset.date = toDoObjects[i]["dueDate"];
      description.textContent = `Description: ${toDoObjects[i]["description"]}`;
    }

    //setting priorities css attributes

    if (toDoDiv.dataset.priority == "important") {
      toDoDiv.style = "border-left: 6px solid rgb(252, 19, 19)";
    }
    if (toDoDiv.dataset.priority == "mild-importance") {
      toDoDiv.style = "border-left: 6px solid #446df6";
    }
    if (toDoDiv.dataset.priority == "low-importance") {
      toDoDiv.style = "border-left: 6px solid #387964";
    }

    toDoText.innerText = `${toDoObjects[i].title}`;
    if (toDoObjects[i].dueDate) {
      date.innerText = toDoObjects[i].dueDate;
    }

    buttons.prepend(date);
    toDoDiv.append(toDoText, buttons, description);

    toDoText.addEventListener("click", () => {
      if (description.style.display == "none") {
        description.style.display = "block";
      } else {
        description.style.display = "none";
      }
    });

    displayedToDos.append(toDoDiv);
  }
}

function renderButtons() {
  const buttonsContainer = document.createElement("div");
  const changeDateButton = document.createElement("button");
  const checkButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  deleteButton.className = "delete";
  checkButton.className = "check";
  changeDateButton.className = "change-date";
  checkButton.id = "check";

  buttonsContainer.className = "button-wrapper";

  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  changeDateButton.innerHTML = `<i class="fa-regular fa-calendar-minus"></i>`;

  buttonsContainer.append(changeDateButton, checkButton, deleteButton);
  return buttonsContainer;
}

export function listEmptyShowSVG(elementToAppendTo, img) {
  const noToDosText = document.createElement("h4");
  noToDosText.className = "no-todos-text";
  noToDosText.innerText = "My to-do list is empty, Time to relax...";
  elementToAppendTo.append(noToDosText, img);
}
export function renderProjects(projects) {
  const displayedProjects = document.querySelector(".projects-container");
  const projectsFormOptions = document.querySelector("#todo-project");

  displayedProjects.innerHTML = "";
  projectsFormOptions.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    const projectDiv = document.createElement("div");
    const projectName = document.createElement("p");

    const projectOption = document.createElement("option");
    projectOption.innerText = projects[i].projectName;
    projectName.innerText = projects[i].projectName;
    projectDiv.dataset.projectName = projects[i].projectName;

    projectDiv.className = "project-item";
    projectDiv.append(projectName);
    displayedProjects.prepend(projectDiv);
    projectsFormOptions.append(projectOption);
  }
}
export function formVisiblity() {
  const formContainer = document.querySelector(".add-todo-form-container");
  const addToDoButton = document.querySelector(".add-todo-button");
  const formSubmit = document.querySelector(".submit");
  const toDoDate = document.querySelector("#todo-date");

  //setting the min date to today since there is no point in making a to do list of the past
  let date = new Date();
  toDoDate.setAttribute("min", date);

  addToDoButton.addEventListener("click", () => {
    formContainer.style.display = "block";
  });
  formSubmit.addEventListener("click", () => {
    formContainer.style.display = "none";
  });
}
