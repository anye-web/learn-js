 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 //  Method 1
 function oddNum(arr) {
     let odd = [];
     for (let i = 0; i < arr.length + 1; i++) {
         if (i % 2 !== 0) {
             odd.push(i);
         }
     }

     return odd;
 }

 //  Method 2
 function oddNum2(arr) {
     return arr.filter(num => num % 2 === 0);
 }

 //  Method 3
 const oddNum3 = arr => arr.filter(num2 => num2 % 2 !== 0);

 console.log(oddNum(arr));
 console.log(oddNum2(arr));
 console.log(oddNum3(arr));

 // NO MORE TALK || NO MORE EXCUSES
 // YOU WOULD NEVER FEEL MOTIVATED TO DO THE THINGS BUT YOU HAVE TO FORCE YOUR SELF TO DO
 // GRIND AND GRIND.....
 // STAY FOCUS ON THE THINGS THAT HAS KEEP YOU GOING
 /*
 QUESTIONS
 Your classmate Ask you to copy some papper work for them.
 You know that there are 'n' classmate and the paper work has 'm' pages.
 You task is to calculate how many blank pages do you need . if n < 0 or m < 0 return 0.
 */
 function pages(n, m) {
     if (n < 0 || m < 0) {
         return 0;
     } else {
         return n * m;
     }
 }

 console.log(pages(5, 3));