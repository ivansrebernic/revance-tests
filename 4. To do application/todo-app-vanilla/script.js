const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");

const Completed = "assets/happy.svg";
const Uncompleted = "assets/sad.svg";

let todos = [{ id: 0, title: "Hi", completed: false }];
let lastId = 0;

function updateDate() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const options = { weekday: "long", month: "long", day: "numeric" };
  const fullDate = today.toLocaleDateString("en-US", options);
  document.getElementById("month").textContent = month;
  document.getElementById("fullDate").textContent = fullDate;
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `todo-item ${item.completed ? "completed-todo" : ""}`;
    const span = document.createElement("span");
    span.textContent = item.title;

    const button = document.createElement("button");
    button.className = "toggle-button";
    const img = document.createElement("img");
    img.src = item.completed ? Completed : Uncompleted;
    img.alt = "status";
    button.appendChild(img);

    button.onclick = () => {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    };

    div.appendChild(span);
    div.appendChild(button);
    todoList.appendChild(div);
  });
}

todoForm.onsubmit = function (e) {
  e.preventDefault();
  const input = todoInput.value.trim();
  if (input === "") return;

  lastId++;
  todos.push({ id: lastId, title: input, completed: false });
  todoInput.value = "";
  renderTodos();
};

updateDate();
renderTodos();