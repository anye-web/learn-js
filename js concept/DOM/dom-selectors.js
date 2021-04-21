// DOCUMENT.GET ELEMENT BY ID()
console.log(document.getElementById('task-title'));

// GET THINGS FROM THE ELEMENT
console.log(document.getElementById('task-title').id);

const taskTitle = document.getElementById('task-title');

// change styling 
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = ' My Task List';
taskTitle.innerHTML = '<span style="color: red"> Task List</span>';

// DOCUMENT. QUERY SELECTOR()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));

document.querySelector('li').style.background = 'red';
document.querySelector(' ul li').style.background = 'blue';
document.querySelector(' li:last-child').style.background = 'green';
document.querySelector(' li:nth-child(3)').style.background = 'pink';
document.querySelector(' li:nth-child(odd)').style.background = '#ccc';
document.querySelector(' li:nth-child(even)').style.background = '#ddd';