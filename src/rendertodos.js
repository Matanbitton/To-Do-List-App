import jsConfetti from "canvas-confetti";

export default function renderToDos(toDos) {
  const displayedToDos = document.querySelector(".displayed-todos");
  displayedToDos.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    const toDoDiv = document.createElement("div");
    const toDoText = document.createElement("p");

    const buttons = renderButtons();
    toDoDiv.className = "todo";
    toDoDiv.dataset.name = toDos[i]["title"];
    toDoText.innerText = `${toDos[i].title}`;
    toDoDiv.append(toDoText, buttons);
    displayedToDos.append(toDoDiv);
  }

  function renderButtons() {
    const buttonsContainer = document.createElement("button-wrapper");

    const checkButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    checkButton.addEventListener("click", () => {
      if (!buttonsContainer.parentNode.classList.contains("todo-done")) {
        buttonsContainer.parentNode.classList.add("todo-done");

        buttonsContainer.parentNode.dataset.name = "done";
        let confetti = jsConfetti({
          spread: 120,
          particleCount: 200,
          startVelocity: 100,
          origin: { y: 1.1 },
        });
      } else {
        buttonsContainer.parentNode.classList.remove("todo-done");

        buttonsContainer.parentNode.dataset.name = "";
      }
    });
    deleteButton.addEventListener("click", () => {
      buttonsContainer.parentNode.remove();
    });

    checkButton.className = "check";
    deleteButton.className = "delete";
    buttonsContainer.className = "button-wrapper";

    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    buttonsContainer.append(checkButton, deleteButton);
    return buttonsContainer;
  }
}
