import jsConfetti from "canvas-confetti";
const displayedToDos = document.querySelector(".displayed-todos");

export function renderToDos(toDoDOM) {
  toDoDOM.forEach((toDo) => {
    displayedToDos.append(toDo);
  });
}
export function createToDoDivs(toDoObjects) {
  //creating the to do divs
  displayedToDos.innerHTML = "";
  for (let i = 0; i < toDoObjects.length; i++) {
    const toDoDiv = document.createElement("div");
    const toDoText = document.createElement("p");
    const date = document.createElement("p");

    const buttons = renderButtons();
    toDoDiv.className = "todo";
    date.className = "due-date";

    if (toDoObjects[i].done) {
      toDoDiv.classList.add("todo-done");
      toDoDiv.dataset.state = "done";
      toDoDiv.dataset.priority = toDoObjects[i]["priority"];
      toDoDiv.dataset.name = toDoObjects[i]["title"];
      toDoDiv.dataset.date = toDoObjects[i]["dueDate"];
    } else {
      toDoDiv.className = "todo";
      toDoDiv.dataset.name = toDoObjects[i]["title"];
      toDoDiv.dataset.priority = toDoObjects[i]["priority"];
      toDoDiv.dataset.date = toDoObjects[i]["dueDate"];
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

    date.innerText = `${toDoDiv.dataset.date}`;

    buttons.prepend(date);
    toDoDiv.append(toDoText, buttons);
    displayedToDos.append(toDoDiv);
  }
  return displayedToDos.childNodes;
}

function renderButtons() {
  const buttonsContainer = document.createElement("button-wrapper");
  buttonsContainer.innerHTML += `<i class="fa-regular fa-calendar-minus"></i>`;

  const checkButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  deleteButton.className = "delete";
  checkButton.className = "check";
  checkButton.id = "check";

  buttonsContainer.className = "button-wrapper";

  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  buttonsContainer.append(checkButton, deleteButton);
  return buttonsContainer;
}

export function listEmptyShowSVG(elementToAppendTo, img) {
  const noToDosText = document.createElement("h4");
  noToDosText.className = "no-todos-text";
  noToDosText.innerText = "My to-do list is empty, Time to relax...";
  elementToAppendTo.append(noToDosText, img);
}
export function renderProjects(projects) {
  const displayedProjects = document.querySelector(".projects");
  console.log("here");

  for (let i = 0; i < projects.length; i++) {
    const projectDiv = document.createElement("div");
    const projectName = document.createElement("p");
    projectName.innerText = projects[i].projectName;

    projectDiv.className = "project-item";
    projectDiv.append(projectName);
    displayedProjects.append(projectDiv);
  }
}
export function formVisiblity() {
  const formContainer = document.querySelector(".add-todo-form-container");
  const addToDoButton = document.querySelector(".add-todo-button");
  const formSubmit = document.querySelector(".submit");

  addToDoButton.addEventListener("click", () => {
    formContainer.style.display = "block";
  });
  formSubmit.addEventListener("click", () => {
    formContainer.style.display = "none";
  });
}
