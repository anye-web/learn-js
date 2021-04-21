 let val;


 const today = new Date();
 let birthDay = new Date('9-10-1981 11:23:00');
 birthDay = new Date('September 10 1998 11:23:00');
 birthDay = new Date('9/3/1234');

 val = today.getMonth();
 val = today.getDate();
 val = today.getDay();
 val = today.getFullYear();
 val = today.getHours();
 val = today.getMinutes();
 val = today.getSeconds();
 val = today.getTime();
 birthDay.setMonth(2);
 birthDay.setDate(6);
 birthDay.setFullYear(1999);
 birthDay.setHours(1);
 birthDay.setMinutes(34);
 birthDay.setSeconds(23);


 console.log(birthDay);