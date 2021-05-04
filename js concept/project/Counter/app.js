// Set Initial count
let count = 0;
// get Ui vars
const counter = document.querySelector('.counter');
const btns = document.querySelectorAll('.btn');
const text = document.querySelector('.text');

// Targeting Individual buttons and passing on event
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        // Adding the count value and append to the counter
        if (styles.contains('decrease')) {
            count--;

        } else if (styles.contains('increase')) {
            count++;

        } else {
            count = 0;
        }
        // Including the styles
        if (count > 0) {
            counter.style.color = 'green';
            text.textContent = 'Greater than Zero';
            text.style.color = 'green';
        }
        if (count < 0) {
            counter.style.color = 'red';
            text.textContent = 'Less Than Zero';
            text.style.color = 'red';
        }
        if (count === 0) {
            counter.style.color = 'black';
            text.textContent = 'Equal to Zero';
            text.style.color = 'black';
        }

        // appending to the counter
        counter.textContent = count;
    });
});