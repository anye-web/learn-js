const names = 'John';
const age = 54;
const job = 'web developer';
const city = 'miami';
let html;

// Without template strings (Es5)
html = '<ul><li>Name: ' + names + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'
    // With template Strings 
function hello() {
    return 'Halo';
}
html = `
<ul>
    <li>Name: ${names}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${4 * 6}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>
</ul>

`;



document.body.innerHTML = html;