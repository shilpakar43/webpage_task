document.getElementById("addTask").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;

    let taskItem = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        taskTextElement.classList.toggle("completed", checkbox.checked);
        updateTaskCount();
    });

    
    let taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;

    
    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("task-actions");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        taskItem.remove();
        updateTaskCount();
    });

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", function () {
        let newText = prompt("Edit Task:", taskTextElement.innerText);
        if (newText) taskTextElement.innerText = newText;
    });

    actionsDiv.appendChild(deleteBtn);
    actionsDiv.appendChild(editBtn);

    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(actionsDiv);

    document.getElementById("taskList").appendChild(taskItem);

    taskInput.value = "";

    updateTaskCount();
});

function updateTaskCount() {
    let tasks = document.querySelectorAll("#taskList li");
    let completedTasks = document.querySelectorAll("#taskList li .completed").length;
    
    document.getElementById("completedCount").innerText = `Completed: ${completedTasks}`;
    document.getElementById("uncompletedCount").innerText = `Uncompleted: ${tasks.length - completedTasks}`;
}
