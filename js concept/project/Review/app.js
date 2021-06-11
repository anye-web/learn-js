// Array of all the properties of person
const review = [{
        id: 1,
        names: "Janoh Junior",
        title: "Web Designer",
        img: "cah2.jpg",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."

    },
    {
        id: 2,
        names: "Anna Chris",
        title: "Web  Specailist",
        img: "cah3.jpg",
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
    }, {
        id: 3,
        names: "Jonathan sam",
        title: "Marketing Dr",
        img: "cah4.jpg",
        text: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."
    }, {
        id: 4,
        names: "Tekeh Bless",
        title: "web Developer",
        img: "cah1.jpg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden."
    }
];
// Getting the Ui Elements
const img = document.getElementById("person");
const author = document.getElementById("author");
const title = document.getElementById("title");
const infoText = document.getElementById("info-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const btn = document.getElementById("btn");

// Set Starting content
let currentItem = 0;
// Load Initail content event
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// Show Person Base On Content
function showPerson(person) {
    // Creating var and assigning current Item
    const item = review[person];
    // Assign the Var values to the Ui
    img.src = item.img;
    author.textContent = item.names;
    title.textContent = item.title;
    infoText.textContent = item.text;
}

// Show Next Content
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > review.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Show Previous Content
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
});

// Show Random person
btn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson(currentItem);
});