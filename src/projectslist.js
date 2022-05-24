import Project from "./project";

let projectTemplate = new Project("Work", []);
export default class ProjectsList {
  constructor() {
    this.projects = [projectTemplate];
  }
  addToProjectList(project) {
    this.projects.push(project);
  }
}
