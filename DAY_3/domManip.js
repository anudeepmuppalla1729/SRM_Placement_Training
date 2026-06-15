const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clear-all-btn");

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task-item");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

clearAllBtn.addEventListener("click", () => {
  taskList.innerHTML = ""; 
});
