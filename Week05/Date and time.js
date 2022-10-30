

// creat0ion:


// let now=new Date();
// console.log(now)

// new Date(milliseconds):


// old methods
// let jan01_1970=new Date(0);
// console.log(jan01_1970)

// let jan02_1970=new Date(24*3600*1000);
// console.log(jan02_1970)



// let jan03_1970=new Date(48*3600*1000);
// console.log(jan03_1970)


// // this code is used brfore the date of 1970
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log( Dec31_1969 );



// new methods:


// let date=new Date("2022-10-29")
// console.log(date)

// let date1 = new Date("2017-01-26");
// console.log(date1);

// // advanced method

// let date2=new Date(2022,09,29)
// console.log(date2)//Sat Oct 29 2022 00:00:00


// let date3=new Date(2011, 0, 1, 2, 3, 4, 567);
// console.log(date3)




// Access date components

// let date=new Date()
// console.log(date.getHours())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getDate())
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())
// console.log(date.getMonth())
// console.log(date.getTime())
// console.log(date.getSeconds())
// console.log(date.getUTCHours())

// console.log( date.getTimezoneOffset() );



// Setting date components:

// let today=new Date();
// console.log(today)
// today.setDate(12);
// console.log(today)
// today.setFullYear(2021);
// console.log(today)
// today.setTime();
// console.log(today)



// by other way

// let today=new Date();
// today.setHours(5,3,4,5)
// today.setFullYear(2019,5,6)
// console.log(today);




// Autocorrection:

// let date=new Date(2017,2,32)
// console.log(date)

// let date1=new Date(2017,2,8)
// date1.setDate(date1.getDate()+2)
// console.log(date1)


// let date=new Date();
// date.setSeconds(date.getSeconds()+70)
// console.log(date)


// let date=new Date(2016,0,2);
// date.setDate(1)
// console.log(date)
// date.setDate(0)
// console.log(date)



// Date to number, date diff:

// let date = new Date();
// console.log(+date);

// let start=new Date();
// let dosomthing;
// for(let i=0;i<100000;i++)
// {
//      dosomthing=i*i*i;
// }
// let end = new Date();
// console.log(`the loop tooks ${start - end} ms`)






// Date.now()

// let start= Date.now();
// let dosomthing;
// for(let i=0;i<100000;i++)
// {
//      dosomthing=i*i*i;
// }
// let end =  Date.now();
// console.log(`the loop tooks ${start - end} ms`)



// benchmarking


// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
  
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
  
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
//   console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
//   console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' ); 
  
// //   another code comaprare to this code
// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
  
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
  
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
  
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
  
//   let time1 = 0;
//   let time2 = 0;
  
//   // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
//   for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
//   }
  
//   console.log( 'Total time for diffSubtract: ' + time1 );
//   console.log( 'Total time for diffGetTime: ' + time2 );



// Date.parse from a string:


// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

// console.log(ms); // 1327611110417  (timestamp)

// // now we can create a new date imidiately


// let date = new Date( Date.parse('2023-09-25T13:51:50') );

// console.log(date);


// var foo=$.getsync('//foo.com');
// var bar=$.getsync('//bar.com');
// var qux=$.getsync('//qux.com');
//  console.log(foo)
//  console.log(bar)
//  console.log(qux)



console.log('hi')
setTimeout(function()
{
    console.log('how are you')
},5000);
console.log('after all this')
