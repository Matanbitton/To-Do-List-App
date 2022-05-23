export default function renderToDos(toDos) {
  for (let i = 0; i < toDos.length - 1; i++) {
    const toDoDiv = document.createElement("div");
    toDoDiv.className = "todo";
    toDoDiv.setAttribute = toDos[i].title;
    toDoDiv.textContent = toDos[i].title;
    return toDoDiv;
  }
}
