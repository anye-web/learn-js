const person = {
    firstName: 'Stebic',
    lastName: 'Bank',
    age: 90,
    email: 'stebic@gmail.com',
    hobbies: ['Tennis', 'football', 'Yoga'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2021 - this.age;
    }
}
let val;
val = person;
// Get the specific value
val = person.firstName; // Recommended by Brad.
val = person['firstName'];

val = person.hobbies[2];
val = person.address.state;
val = person.getBirthYear();

const people = [
    { names: 'John', age: 34 },
    { names: 'DOOH', age: 23 },
    { names: 'DH', age: 25 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].names);
    console.log(people[i].age);
}


console.log(val);