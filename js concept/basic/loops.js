// A LOOP IS A CONDITION THAT REPEAT UNTILL A SPECIFIC CONDITION IS REACH.

// FOR LOOP
// for (let i = 0; i <= 10; i++) {
//     // console.log('Number ' + i)
//     if (i === 6) {
//         console.log(`Number ${i} is my favorite number`);
//         continue;
//     }
//     if (i === 8) {
//         console.log('Stop the loop')
//         break;
//     }
//     console.log('Number ' + i)
// }

// WHILE LOOP
// let i = 0;
// while (i < 10) {
//     console.log('Number ' + i);
//     i++;
// }

// DO WHILE LOOP
// let i = 0;
// do {
//     console.log('Number ' + i);
//     i++;

// } while (i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Toyota', 'Benz', 'BMW'];
// with for loop
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// with while loop
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

// FOREACH
cars.forEach(function(car) {
    console.log(car + ' is single');
});
// getting the index of an array
cars.forEach(function(car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array)
});

// MAP
// const users = [
//     { id: 1, names: 'sarah' },
//     { id: 2, names: 'john' },
//     { id: 3, names: 'joe' },
// ];

const ids = users.map(function(user) {
    return user.id;
});

// console.log(ids);

// FOR IN LOOP
const user = {
    firstName: "Ndoh",
    lastName: "CHoH",
    age: 43
}
for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}