export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectToDos = [];
  }
  addToProjectToDos(toDoList) {
    this.projectToDos.push(toDoList);
  }
}
