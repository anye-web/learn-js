let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[5].nodeType;

// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get Children Element Nodes
val = list.children;
val = list.children[0];
val = list.children[1];
// list.children[3].style.background = '#564'

// Get Children of Children
list.children[0].children[0].id = 'Hello';
val = list.children[0].children[0];
// First Child
val = list.firstChild;
val = list.firstElementChild;
// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Element
val = list.childElementCount;

// Get parent Node
val = listItem.parentNode;
val = listItem.parentElement;
// Get Parent of Parent
val = listItem.parentElement.parentElement;
// Get Next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// Get Previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;





console.log(val);