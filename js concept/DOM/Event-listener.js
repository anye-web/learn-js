const clearTask = document.querySelector('.clear-tasks');

// clearTask.addEventListener('click', function(e) {

//     console.log('Hello World');

//     // Prevents the default behavior of element
//     e.preventDefault();
// });

clearTask.addEventListener('click', onClick);

function onClick(e) {
    let val;

    val = e;
    // Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    // e.target.textContent = 'Thanks';

    // Event Type
    val = e.type;

    // TimeStamp
    val = e.timeStamp;
    // Coord event relative to the Window
    val = e.clientY;
    val = e.clientX;
    // Coord event relative to the Element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);

    e.preventDefault();
}