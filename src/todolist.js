export default class ToDoList {
  constructor() {
    this.toDos = [];
  }
  addToDo(toDo) {
    this.toDos.push(toDo);
  }
  removeToDo(toDo) {
    this.toDos = this.toDos.filter((item) => item["title"] == toDo["title"]);
  }
}
