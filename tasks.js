let slothHappiness = 0;
let addTaskBtn = document.getElementById("add-task");
let taskContainer = document.getElementById("task-container");
let task = document.getElementsByClassName("task")[1];
let button = document.getElementById("task-button");
let sloth = document.getElementById("sloth");
let taskList = document.getElementById("task-list")
let counter = document.getElementById("counter");

let tasklist = [
    "your new quest"
]

addTaskBtn.addEventListener("click", (e) => {
    const newTask = document.createElement("li");
    newTask.className = "task";
    const newInput = document.createElement("input");
    const newButton = document.createElement("button");
    newButton.innerHTML = "done!";
    newButton.id = "task-button";

    buttonAddEventListener(newButton);

    newInput.value = "your new quest";
    newTask.appendChild(newButton);
    newTask.appendChild(newInput);
    taskList.prepend(newTask)
    
    
})

buttonAddEventListener(button)

function buttonAddEventListener(button){
    button.addEventListener("click", function() {
        let parent = button.parentElement;
        parent.remove();
        sloth.src = "img/happyguy.png";
        setTimeout(() => { sloth.src = "img/guy.png";}, 2000);
        slothHappiness++;
        counter.innerHTML = slothHappiness;
    })
}


