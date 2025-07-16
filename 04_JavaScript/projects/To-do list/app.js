let input = document.querySelector("input");
let button = document.querySelector("button");
let todoContainer = document.querySelector(".todo-container");

button.addEventListener("click", () => {
  let todo = document.createElement("div");
  todo.className = "w-20, bg-red-400";
  todo.innerHTML = input.value;
  todoContainer.appendChild(todo);
});
