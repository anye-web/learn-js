// Create the element
const ul = document.querySelector('ul.collection');
const li = document.createElement('li');
const link = document.createElement('a');

// Add ClassList to a link
link.classList = 'delete-item secondary-content';
// Creating Delete  icon
const icon = document.createElement('i');
icon.classList = 'fa fa-remove';
// append icon to link
link.appendChild(icon);



// Add class
li.className = 'collection-item';
// Add ID
li.id = 'new-item';
// Add Attribute
li.setAttribute("title", 'new title');
// Create Textnode and append
li.appendChild(document.createTextNode('Hello World'));
// Apend link to li
li.appendChild(link);

// Append li as child to ul
ul.appendChild(li);


console.log(li)