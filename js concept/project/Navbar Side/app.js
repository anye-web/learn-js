// Getting Ui varriables
const toggleBtn = document.getElementById("toggle-btn");
const closeBtn = document.getElementById("close-btn");
const sideBar = document.querySelector(".sidebar-menu");

// AddEvent Listeners on The btn
toggleBtn.addEventListener("click", function() {
    // if (sideBar.classList.contains("show-sidebar-menu")) {
    //     sideBar.classList.remove("show-sidebar-menu")
    // } else {
    //     sideBar.classList.add("show-sidebar-menu")
    // }
    sideBar.classList.toggle('show-sidebar-menu');
});

closeBtn.addEventListener("click", function() {
    if (sideBar.classList.contains('show-sidebar-menu')) {
        sideBar.classList.remove('show-sidebar-menu');
    }
})