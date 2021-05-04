// array of numbers and value representing the hex symbols
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// UI VARS
const btn = document.getElementById("btn");
const color = document.querySelector("#color");
const textColor = document.querySelectorAll(".bg-text");
const active = document.querySelector(".active");

// Add Event for btn
btn.addEventListener('click', function() {
    let hexColor = "#";
    // getting random  value from hex array and calling the function getRandomNumber()
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // Setting the Color generated to the Ui Elements
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    btn.style.backgroundColor = hexColor;
    active.style.borderColor = hexColor;
    // Getting the other elements with bg-text class
    textColor.forEach(function(item) {
        item.style.color = hexColor;
    });
});

// Generate Random Number from the hex array length
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}