export default function formVisiblity() {
  const formContainer = document.querySelector(".add-todo-form-container");
  const addToDoButton = document.querySelector(".add-todo-button");
  const formSubmit = document.querySelector(".submit");

  addToDoButton.addEventListener("click", () => {
    formContainer.style.display = "block";
  });
  formSubmit.addEventListener("click", () => {
    formContainer.style.display = "none";
  });
}
