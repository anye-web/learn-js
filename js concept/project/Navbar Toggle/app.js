// classList - show/hide all classes
// contains - checks classlist for specific class
//  add - add class
//  remove - remove class
// toggle - toggle classes

// Getting some Ui varriables
const toggleBtn = document.querySelector(".toggle-button");
const bars = document.querySelector("i");

const navLinks = document.querySelector(" .navbar ul");


toggleBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");

})