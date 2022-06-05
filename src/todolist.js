import ToDo from "./todo";
export default class ToDoList {
  constructor() {
    this.toDos = [];
    const toDo = new ToDo(
      "Watch a movie with friends",
      "Don't forget your wallet like last time!",
      "12/31/2022",
      "low-importance"
    );

    this.toDos.push(toDo);
  }
  addToDo(toDo) {
    this.toDos.push(toDo);
  }
  removeToDo(toDoTitle) {
    this.toDos = this.toDos.filter((item) => item["title"] !== toDoTitle);
  }
  getToDo(toDoTitle) {
    return this.toDos.find((toDo) => toDo.title == toDoTitle);
  }

  checkIfEmpty() {
    if (this.toDos.length == 0) {
      return true;
    }
  }
}
