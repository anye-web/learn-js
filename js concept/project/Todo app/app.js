// The Local storage events are been written the last


// Define Ui varriables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listener
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM content load
    document.addEventListener('DOMContentLoaded', getTask);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // CLear task Event
    clearBtn.addEventListener('click', clearTask);
    // Filter task events
    filter.addEventListener('keyup', filterTask);
}
// Get Task from Ls
function getTask() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Create Ui elements
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text nodde and Append to li
        li.appendChild(document.createTextNode(task));
        // create new link Element
        const link = document.createElement('a');
        // Add class to link
        link.className = 'delete-item secondary-content';
        // Add Icon to link
        link.innerHTML = '<i class= "fas fa-trash-alt"></>';
        // Append link to li
        li.appendChild(link);
        // Append li to Ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {

    // Create Ui elements
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text nodde and Append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link Element
    const link = document.createElement('a');
    // Add class to link
    link.className = 'delete-item secondary-content';
    // Add Icon to link
    link.innerHTML = '<i class= "fas fa-trash-alt"></>';
    // Append link to li
    li.appendChild(link);
    // Append li to Ul
    taskList.appendChild(li);

    // Store task in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove task
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {

            e.target.parentElement.parentElement.remove();

            // Remove from Local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }

    e.preventDefault();
}
// Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task
function clearTask(e) {

    // taskList.innerHTML = '';

    // Faster
    while (taskList.firstChild) {

        taskList.removeChild(taskList.firstChild);

    }

    // Clear task from local Storage
    clearTaskFromLocalStorage();

    e.preventDefault();
}

// Clear task from local storage
function clearTaskFromLocalStorage() {
    localStorage.clear();
}

// Filter task Event 
function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });


}