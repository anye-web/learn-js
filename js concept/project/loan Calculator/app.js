//  Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
    // HIDE RESULTS 
    document.querySelector('.result').style.display = 'none';

    // SHOW LOADER
    document.querySelector('#loader').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate result
function calculateResults() {

    // UI VAr
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('interest-payment');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute the monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    // Check if the monthly value is a Finite number
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // SHOW RESULT
        document.querySelector('.result').style.display = 'block';
        // HIDE LOADER
        document.querySelector('#loader').style.display = 'none';
    } else {
        showError('Please check your numbers');
    }
}

// SHOW ERROR
function showError(error) {

    // HIDE RESULT
    document.querySelector('.result').style.display = 'none';
    // HIDE LOADER
    document.querySelector('#loader').style.display = 'none';

    // CREATE DIV
    const errorDiv = document.createElement('div');

    // GET DOM ELEMENTS
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // ADD CLASS
    errorDiv.className = 'alert alert-danger';
    // CREATE TEXTNODE AND APPEND TO DIV
    errorDiv.appendChild(document.createTextNode(error));

    // INSERT ERROR ABOVE HEADING..
    card.insertBefore(errorDiv, heading);

    // CLEAR ERROR AFTER 5 SECONDS
    setTimeout(clearError, 3000);

}

// CLEAR ERROR 
function clearError() {
    document.querySelector('.alert').remove();
}