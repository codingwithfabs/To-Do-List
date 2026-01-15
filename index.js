const inputEl = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const clearBtn = document.getElementById("clear-btn")

const task = document.getElementById("task")
const taskCont = document.getElementById("tasks-container")

let tasks = []

function render(task) {
    let taskItems = ""
    for (let i = 0; i < task.length; i++) {
        taskItems += `
            <div class="task" id="task">
                <span id="task-el">${task[i]}</span>
                <div class="task-icons">
                    <i class="fa-regular fa-square-check" id="done-icon"></i>
                    <i class="fa-regular fa-trash-can" id="delete-icon" data-index="${i}"></i>
                </div>
            </div>    
        `
    }
    taskCont.innerHTML = taskItems
}

addBtn.addEventListener("click", function() {
    tasks.push(inputEl.value)
    render(tasks)
    inputEl.value = ""
})

clearBtn.addEventListener("click", function() {
    tasks = []
    render(tasks)
})

taskCont.addEventListener("click", function(e) {
    // 1. Check if the click was on the checkmark icon
    if (e.target.classList.contains("fa-square-check")) {
        
        // 2. Find the specific .task div that contains this icon
        const parentTask = e.target.closest(".task")
        
        // 3. Find the span inside ONLY that specific task div
        const spanEl = parentTask.querySelector("span")
        
        // 4. Toggle the line-through
        if (spanEl.style.textDecoration === "line-through") {
            spanEl.style.textDecoration = "none"
        } else {
            spanEl.style.textDecoration = "line-through"
        }
    }

    if (e.target.classList.contains("fa-trash-can")) {
        const index = e.target.dataset.index

        tasks.splice(index, 1)

        render(tasks)
    }
})

