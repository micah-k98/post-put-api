"use strict"

let toDoService;

document.addEventListener("DOMContentLoaded", () => {
    
    toDoService = new ToDoService();

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchButtonClicked);
})

async function searchButtonClicked() {
    let id = document.getElementById("toDoIdInput").value;

    let toDo = await toDoService.getData(id);
    displayResult(toDo);
}

function displayResult(toDo) {
    let toDoInfo = document.getElementById("toDoInfo");
    toDoInfo.innerText = "";

    let h5Id = document.createElement("h5");
    h5Id.innerText = "ID: " + toDo.id;
    toDoInfo.appendChild(h5Id);

    let h5Title = document.createElement("h5");
    h5Title.innerText = "Title: ";
        let spanTitle = document.createElement("span");
        spanTitle.innerText = toDo.title;
        spanTitle.classList.add("fw-light")
        h5Title.appendChild(spanTitle);
    toDoInfo.appendChild(h5Title);
    
    let h5Completed = document.createElement("h5");
    h5Completed.innerText = "Completed: ";
        let spanCompleted = document.createElement("span");
        spanCompleted.innerText = toDo.completed;
        spanCompleted.classList.add("fw-light")
    h5Completed.appendChild(spanCompleted);
    toDoInfo.appendChild(h5Completed);
}