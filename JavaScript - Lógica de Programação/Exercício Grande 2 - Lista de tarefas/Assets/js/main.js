const inputTask = document.querySelector('.input-tarefa');
const btnTask = document.querySelector('.btn-tarefa');
const task = document.querySelector('.tarefas');

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {     //"13" is the "ENTER" code.
        if (!inputTask.value) return
        createTask(inputTask.value);
    }
});

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    task.appendChild(li);
    clearInput();
    createDeleteButton(li)
    saveTasks();
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return
    createTask(inputTask.value);
});

function createDeleteButton(li) {
    li.innerText += ' ';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete';
    buttonDelete.setAttribute('class', 'delete');
    li.appendChild(buttonDelete);
}

document.addEventListener('click',function(e){
    const el = e.target;
    
    if (el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
})

function saveTasks() {
    const liTasks = task.querySelectorAll('li');
    const taskList = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        taskList.push(taskText);
    }

    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('task', tasksJSON);
}

function readSavedTasks() {
    const task = localStorage.getItem('task');
    const taskList = JSON.parse(task);

    for (let task of taskList) {
        createTask(task);
    }
}

readSavedTasks();