const inputEl = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const clearBtn = document.getElementById("clear-btn")
const taskCont = document.getElementById("tasks-container")

let tasks = []

function render(taskArray) {
    let taskItems = ""
    for (let i = 0; i < taskArray.length; i++) {
        const completedClass = taskArray[i].isCompleted ? "completed" : ""
        
        taskItems += `
            <div class="task">
                <span class="${completedClass}">${taskArray[i].text}</span>
                <div class="task-icons">
                    <i class="fa-regular fa-square-check" data-index="${i}"></i>
                    <i class="fa-regular fa-trash-can" data-index="${i}"></i>
                </div>
            </div>    
        `
    }
    taskCont.innerHTML = taskItems
}

addBtn.addEventListener("click", function() {
    if (inputEl.value === "") return 

    tasks.push({
        text: inputEl.value,
        isCompleted: false
    })
    
    render(tasks)
    inputEl.value = ""
})

clearBtn.addEventListener("click", function() {
    tasks = []
    render(tasks)
})

taskCont.addEventListener("click", function(e) {
    const index = e.target.dataset.index
    
    if (e.target.classList.contains("fa-square-check")) {
        tasks[index].isCompleted = !tasks[index].isCompleted
        render(tasks)
    }

    if (e.target.classList.contains("fa-trash-can")) {
        tasks.splice(index, 1)
        render(tasks)
    }   
})