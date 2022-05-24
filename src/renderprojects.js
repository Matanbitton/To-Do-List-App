export default function renderProjects(projects) {
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
