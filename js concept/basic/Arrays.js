// Create some arrays
const numbers = [43, 56, 60, 22, 100];
const numbers2 = new Array(23, 78, 0, 11, 37);
const fruits = ['pineapple', 'Banana', 'Mango', 'Guava'];
const mixed = [33, 'job', true, null, undefined, { a: 1, b: 2 }, new Date()];

let val;
// Get array length
val = numbers.length;
// check if is an array
val = Array.isArray(numbers);
// GEt a Value from an array
val = numbers[3];
val = numbers[0];
// Insert into an Array
numbers[2] = 10;
// find the index of value 
val = numbers.indexOf(90);
// Mutating Arrays
// Add on to the End
numbers.push(230);
// Add on to front
numbers.unshift(345);
// Take of from the end
numbers.pop();
// Take of from the front
numbers.shift();
// SPlice values
numbers.splice(1, 1);
// Reverse
numbers.reverse();
// COncat Arrays
val = numbers.concat(numbers2);
// Sort
val = fruits.sort();
// val = numbers.sort();
// Used the compare Function to sort a number
val = numbers.sort(function(x, y) {
    return x - y;
});
// Reverse Sort
val = numbers.sort(function(x, y) {
    return y - x;
});

// Find
function under50(num) {
    return num < 50;
}
val = numbers.find(under50);

console.log(numbers)
console.log(val);