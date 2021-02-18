class Todo {

    constructor() {
        this.total_tasks = document.querySelectorAll(".task").length
    }

    add_task (task_text) {

        //clone template
        let template = document.querySelector(".task").cloneNode(true)

        //remove class hide
        template.classList.remove("hide")

        //manipulate text
        let template_text = template.querySelector(".task-title")
        template_text.textContent = task_text

        let list = document.querySelector("#task-container")

        //insert in list
        list.appendChild(template)

        //add event tasks
        this.add_events()

        this.checkTask('add')

    }

    removeTask (task) {
        //find the element
        let parent = task.parentElement

        //remove from list
        parent.remove()

        this.checkTask('remove')
    }

    completeTask (task) {
        
        //add class done
        task.classList.add("done")
    }

    add_events () {
        let remove_btns = document.querySelectorAll('.fa-trash')
        let remove_btn = remove_btns[remove_btns.length - 1]
        let done_btns = document.querySelectorAll('.fa-check')
        let done_btn = done_btns[done_btns.length - 1]

        // event remove
        remove_btn.addEventListener("click", function () {
            todo.removeTask(this)
        })

        // event done
        done_btn.addEventListener("click", function () {
            todo.completeTask(this)
        })
    }

    checkTask(comand) {

        let message = document.querySelector("#empty-tasks")

        // add and remove tasks logic
        if (comand === 'add') {
            this.total_tasks += 1
        }else if (comand === 'remove') {
            this.total_tasks -= 1
        }

        //if you have more than one task add or remove class
        if (this.total_tasks == 1) {
            message.classList.remove('hide')
        }else {
            message.classList.add('hide')
        }

    }
}

const todo = new Todo()

// events
const add_button = document.querySelector("#adds")

add_button.addEventListener("click", function (e) {

    e.preventDefault()

    let task_text = document.querySelector("#task")

   if (task_text.value != ' ') {
        todo.add_task(task_text.value)
   }

    // erase text
    task_text.value = " "


})