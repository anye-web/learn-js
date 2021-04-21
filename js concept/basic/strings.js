const firstName = 'Williams';
const lastName = 'Johson';
const age = 89;
const str = 'Hello there my name is Brad';

let val;

val = firstName + lastName;
// Concatenantion
val = firstName + " " + lastName;
// APPEND
val = 'Brad ';
val += 'Traversy';

val = "Hello my name is " + firstName + " and I am " + age;
// Escaping
val = 'That\'s it\'s, I cant\'s do it';
// length
val = firstName.length;
// concat()
val = firstName.concat(' ', lastName);
// Change case
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase();
// Indexof()
val = lastName[0];
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
// CharAt
val = firstName.charAt("2");
// Get last character
val = firstName.charAt(firstName.length - 1);
// Substring()
val = lastName.substring(0, 3);
// Slice
val = lastName.slice(0, 2);
val = lastName.slice(-3);
// Split()
val = str.split(' ');
// Replace
val = str.replace('Brad', 'Jack');
// Include
val = str.includes('Hello');


console.log(val);