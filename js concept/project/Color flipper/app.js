// Array of colors
const color = ["green", "red", "rgb(103, 109, 25)", "yellow", "#f15025", "#afadfc"];
const btn = document.getElementById("btn");
const colorSpan = document.querySelector("#color");
const bgText = document.querySelectorAll(".bg-text");
const active = document.querySelector(".active");

btn.addEventListener('click', function() {
    // Get Random number between 0 - 3 
    const randomNumber = getRandomNumber();
    // Setting the colors of DOM elements from the Array of colors
    document.body.style.backgroundColor = color[randomNumber];
    btn.style.backgroundColor = color[randomNumber];
    colorSpan.textContent = color[randomNumber];
    active.style.borderColor = color[randomNumber];
    // Changing the color of elements with the class bg-text;
    bgText.forEach(function(item) {
        item.style.color = color[randomNumber];
    });

});
// Generate Random Number
function getRandomNumber() {
    return Math.floor(Math.random() * color.length)
}

// Changes the color of all the element with class of bg-text