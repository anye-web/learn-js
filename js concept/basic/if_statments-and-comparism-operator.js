// if(something){
//     do something
// }else{
//     do something
// }

const id = 100;

// Equal To
if (id == 100) {
    console.log("CORRECT");
} else {
    console.log('NOT CORRECT');
}
// Not Equal To
if (id != 120) {
    console.log('Not EQUAL');

} else {
    console.log('CORRECT');
}

// // EQUAL TO VALUE AND TYPE
if (id === 100) {
    console.log('Is 100');
} else {
    console.log('Not 100');
}
// NOT EQUAL TO VALUE AND THE TYPE
if (id !== 102) {
    console.log('Not 100');
} else {
    console.log('Is 100');
}

// TEST THE TYPE 
if (typeof id !== "undefined") {
    console.log(`the id is ${id}`);
} else {
    console.log('no ID')
}

// GREATER OR LESS THAN
if (id >= 100) {
    console.log(`ID is greater`);
} else {
    console.log(`Id is less `);
}
if (id <= 100) {
    console.log(`Id is less `);
} else {
    console.log(`Id is greater`);
}

const color = 'yellow';
if (color === 'red') {
    console.log('color is red');
} else if (color === 'blue') {
    console.log('color is blue');
} else {
    console.log('color is niether red nor blue');
}
// LOGICAL OPERATORS
const person = {
        names: 'Stevo',
        age: 12
    }
    // AND &&
if (person.age > 0 && person.age < 12) {
    console.log(`${person.names} Is a child`);
} else if (person.age >= 12 && person.age <= 20) {
    console.log(`${person.names} is a teenage`);
} else {
    console.log(`${person.names} Is an adult`);
}

// OR ||
if (person.age < 16 || person.age > 65) {
    console.log(`${person.names} can not enter the race`)
} else {
    console.log(`${person.names} IS fit for the race`)
}
// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
// WITHOUT BRACES
if (id === 100)
    console.log('correct')
else
    console.log('incorrect');