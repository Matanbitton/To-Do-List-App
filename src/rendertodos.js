import jsConfetti from "canvas-confetti";

export function renderToDos(toDos) {
  const displayedToDos = document.querySelector(".displayed-todos");

  displayedToDos.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    const toDoDiv = document.createElement("div");
    const toDoText = document.createElement("p");

    const buttons = renderButtons();
    toDoDiv.className = "todo";
    toDoDiv.dataset.name = toDos[i]["title"];
    toDoDiv.dataset.priority = toDos[i]["priority"];

    if (toDoDiv.dataset.priority == "important") {
      toDoDiv.style = "border-left: 6px solid rgb(252, 19, 19)";
    }
    if (toDoDiv.dataset.priority == "mild-importance") {
      toDoDiv.style = "border-left: 6px solid #446df6";
    }
    if (toDoDiv.dataset.priority == "light-importance") {
      toDoDiv.style = "border-left: 6px solid #387964";
    }

    toDoText.innerText = `${toDos[i].title}`;
    toDoDiv.append(toDoText, buttons);
    displayedToDos.append(toDoDiv);
  }

  function renderButtons() {
    const buttonsContainer = document.createElement("button-wrapper");

    const checkButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";

    checkButton.addEventListener("click", () => {
      if (!buttonsContainer.parentNode.classList.contains("todo-done")) {
        buttonsContainer.parentNode.classList.add("todo-done");
        buttonsContainer.parentNode.dataset.state = "done";

        let confetti = jsConfetti({
          spread: 120,
          particleCount: 200,
          startVelocity: 100,
          origin: { y: 1.1 },
        });
      } else {
        buttonsContainer.parentNode.classList.remove("todo-done");
        buttonsContainer.parentNode.dataset.state = "";
      }
    });

    checkButton.className = "check";
    buttonsContainer.className = "button-wrapper";

    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    buttonsContainer.append(checkButton, deleteButton);
    return buttonsContainer;
  }
}

export function listEmptyShowSVG(elementToAppendTo, toDos, img) {
  const noToDosText = document.createElement("h4");
  noToDosText.className = "no-todos-text";
  noToDosText.innerText = "My to-do list is empty, Time to relax...";
  if (toDos.length == 0) {
    elementToAppendTo.append(noToDosText, img);
  }
}
