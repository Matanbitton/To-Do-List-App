export default function renderToDos(toDos) {
  toDos = Array.from(toDos);
  const displayedToDos = document.querySelector(".displayed-todos");
  for (let i = 0; i < toDos.length; i++) {
    const toDoDiv = document.createElement("div");
    toDoDiv.className = "todo";
    toDoDiv.setAttribute = toDos[i]["title"];
    toDoDiv.textContent = toDos[i].title;
    displayedToDos.append(toDoDiv);
  }
}
