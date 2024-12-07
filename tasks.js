let slothHappiness = 0;
let addTaskBtn = document.getElementById("add-task");
let taskContainer = document.getElementById("task-container");
let task = document.getElementsByClassName("task")[1];
let button = document.getElementById("task-button");
let sloth = document.getElementById("sloth");
let taskList = document.getElementById("task-list")
let counter = document.getElementById("counter");
document.getElementById("heart").style.visibility = "hidden"; 



let taskArray = [
    "your new quest"
]

window.addEventListener("load", (event) => {
    slothHappiness = localStorage.getItem("happiness");
    counter.innerHTML = slothHappiness;
});


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
    taskList.prepend(newTask);
    
    localStorage.setItem("tasklist", taskArray);

})

buttonAddEventListener(button)

function buttonAddEventListener(button){
    button.addEventListener("click", function() {
        let parent = button.parentElement;
        parent.remove();
        sloth.src = "img/happyguy.png";
        document.getElementById("heart").style.visibility = "visible"; 
        setTimeout(() => { sloth.src = "img/guy.png";}, 2000);
        setTimeout(() => { document.getElementById("heart").style.visibility = "hidden";}, 2000);

        slothHappiness++;
        localStorage.setItem("happiness", slothHappiness)
        counter.innerHTML = slothHappiness;
    })
}


