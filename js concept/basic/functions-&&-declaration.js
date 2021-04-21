// Functions are blocks of code that can be define and call at a later time or in some case define and call at the same time.

// FUNCTION DECLARATION
function greet(firstName = 'John', lastName = 'Doe') {
    // console.log('hello');
    return `Hello ${firstName} ${lastName}`;
}
// console.log(greet('Jo', 'Chris'));

// FUNCTION EXPRESSION
const square = function(x = 3) {
    return x * x;
};
// console.log(square(9));

// IMEDIATELY INVOCABLE FUNCTION EXPRESSION - IIFES
// (function() {
//     console.log('IIFES Ran...')
// })();
// (function(name) {
//     console.log('Hello ' + name)
// })('janoh');

// PROPERTY METHODS
const todo = {
    add: function() {
        console.log('Add Todo');
    },
    edit: function(id) {
        console.log(`edit Todo ${id}`);
    }
}
todo.delete = function() {
    console.log('Delete Todo');
}
todo.delete();
todo.add();
todo.edit(33);