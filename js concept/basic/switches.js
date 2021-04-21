 const color = 'red';

 switch (color) {
     case 'red':
         console.log('Color is red');
         break;
     case 'blue':
         console.log('color is blue');
         break;
     default:
         console.log('Color is neither blue nor red');
         break;
 }

 const today = new Date().getDay();
 let day;
 switch (today) {
     case 0:
         day = 'Sunday';
         break;
     case 1:
         day = 'Monday';
         break;
     case 2:
         day = 'Tuesday';
         break;
     case 3:
         day = 'Wednesday';
         break;
     case 4:
         day = 'Thursday';
         break;
     case 5:
         day = 'Friday';
         break;
     case 6:
         day = 'Saturday';
         break;
     default:
         day = 'Not a day';
         break;
 }
 console.log(`Today is ${day}`);