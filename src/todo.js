export default class ToDo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
    this.project = project;
  }
  setDone() {
    this.done = true;
  }
}
