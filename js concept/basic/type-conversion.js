let val;

// Number to string
val = String(55);
val = String(4 + 4);

// Convert a boolean to a string.
val = String(true);
// Date to a string
val = String(new Date());
// Arrsy to a string
val = String([1, 2, 4, 5]);
// ToString
val = (5).toString();
vsl = (true).toString();

// String to number
val = Number('4');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1, 2, 2]);

val = parseInt('100');
val = parseFloat('899');




// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(3));

const val1 = String(4);
const val2 = 2;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);