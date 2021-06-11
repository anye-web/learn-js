// Getting the Ui varriables

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(" li");

burger.addEventListener("click", function() {
    // Toggle between class
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    // Animate
    links.forEach(function(link, index) {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = ` navLinksFade 0.5s ease forwards ${index / 7 * 2}s`;
        }
    });

});