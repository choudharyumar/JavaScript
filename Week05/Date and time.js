

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


// to check event loop


// console.log('hi')
// setTimeout(function()
// {
//     console.log('how are you')
// },500);
// console.log('after all this')


// task 1:


// Feb 20, 2012, 3:12am.
// let date=new Date(2012,01,20,3,12)
// console.log(date)




// task 2:
// Show a weekday:

// function getWeekDay(date){
   
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//     return days[date.getDay()];

// }
// let date = new Date(2012, 0, 1);  // 3 Jan 2012
// console.log( getWeekDay(date) ); 
// console.log(date.getDate())
// console.log(date.getDay())




// task 3
// getLocalDay(date)  //eurpoen date
// function getLocalDay(date) {

//     let day = date.getDay();
  
//     if (day == 0) { // weekday 0 (sunday) is 7 in european
//       day = 7;
//     }
  
//     return day;
//   }

//    date = new Date(2012, 0, 5);  // 3 Jan 2012
//   console.log( getLocalDay(date) );
// function getWeekDay(date){
   


//     let days = [ 'MO', 'TU', 'WE', 'TH', 'FR', 'SA','SU'];
//     return days[date.getDay()];

// }
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// console.log( getWeekDay(date) ); 
// console.log(date.getDate())
// console.log(date.getDay())






// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
//     return days[date.getDay()];
//   }
  
//   let date = new Date(2022, 09, 31); // 3 Jan 2014
//   console.log( getWeekDay(date) );
//   console.log(date.getDate())
// console.log(date.getDay())


// How many seconds have passed today?

 function getSecondsToday(){
    let now =new Date();

    let today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    let  diff=now-today;
    return Math.round(diff/1000);
 }
 console.log(getSecondsToday())



//  function getSecondsToday() 
 
//     let d = new Date();
//     let a=d;
//     a= d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds() ;
  
  
//   console.log( a );


//   How many seconds till tomorrow?


// function getSecondsToda() {
//     let d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()
//      ;
//   }
  
//   console.log( getSecondsToda() );
  let d = new Date();
  let a=d;
  a= (d.getHours()+24)* 3600 + d.getMinutes() * 60 + d.getSeconds() ;


console.log( a );

let f = new Date();
let g=f;
g= f.getHours()* 3600 + f.getMinutes() * 60 + f.getSeconds() ;


console.log( g*2 );