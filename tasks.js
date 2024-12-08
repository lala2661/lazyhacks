let addTaskBtn = document.getElementById("add-task");
let taskContainer = document.getElementById("task-container");
let task = document.getElementsByClassName("task")[1];

addTaskBtn.addEventListener("click", (e) => {
    const newTask = document.createElement("li");
    newTask.className = "task";
    const newInput = document.createElement("input");
    newInput.value = "your new quest";
    newTask.appendChild(newInput);
    taskContainer.appendChild(newTask);


})