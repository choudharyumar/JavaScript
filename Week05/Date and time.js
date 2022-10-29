

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

let today=new Date();
today.setHours(5,3,4,5)
today.setFullYear(2019,5,6)
console.log(today);



