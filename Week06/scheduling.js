
// set timeout 

// function a (){
//     console.log("helo janab")
// }
// setTimeout(a,5000)


// with arguments:

// function abc(phrase,who){
//     console.log(phrase," , ",who)
// }
// setTimeout(abc,2000,"umar","hayat")


// there is a method but not run at this time in vs code we use string but we not recomend 
// setTimeout("console.log('Hello')", 1000);


// as a arrow function:

// setTimeout(() => console.log("hello")
    
// , 4000);

// setTimeout(()=>console.log("hello boy"),3000)// by comparing both codes shorter time code runs early



// // Canceling with clearTimeout:
// let str  = "never happens"
// let t setTimeout(() =>  str, 1000);
// console.log(timerId()); // timer identifier

// clearTimeout(timerId);
// console.log(timerId);



// set interval:


// let timerId=setInterval(()=>console.log("helo "),2000)// it runs for every passing of 2 seconds

// let timerId=setTimeout(()=>console.log("helo "),5000)
// console.log(timerId)// ot runs on;y for one time and tha stop


// nested settimeout:


// let timerid=setTimeout(function abc(){
//     console.log("hello")
//     timerId=setTimeout(abc,3000)
// },2000)


// let timerId=setTimeout(()=>console.log("helo "),5000)


// code with harry:
 

// console.log("hello")

// let a=setTimeout(function abc(){
//     console.log("i am in set time out")
// },5000)
// let b=prompt("Do you want to run the set time out?")
// if (b=="n")
// {
//     clearTimeout(a)

// }
// console.log(a)


// another program for a function


// const sum=(a,b)=>{
    
//     console.log("the answer of the sum is   " +(a+b))

// }

// setTimeout(sum ,3000,2,3)



// set interval

// const sub=(a,b)=>{
//     alert("the difference is "+(a-b))
// }
// setInterval(sub,3000,5,3)// it runs continuously again and again after given time



// clearinterval

// console.log("hello")
// let a =setInterval(function sum(a,b)
// {
//     console.log("the sum of two numbers "+(a+b))
// },4000)
// clearInterval(a)
// console.log(a)




// Zero delay setTimeout:

// setTimeout(function a(){
//     console.log("hy janab")
// })





// practice problems:


// let i = 0;

// setTimeout(() => console.log(i), 100); // 100000000

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }



// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.



// using setinterval

// function printNumbers(from, to){
//     let curnt=from;
//     let a=setInterval(function()
//     {
//         console.log(curnt)
//         if (curnt==to){
//             clearInterval(a)
//         }
//           curnt++;

//     },1000)
// }
// printNumbers(5,10)


// using settimeout


function printNumbers(from, to){
    let curnt=from;
    setTimeout(function go()
    {
        console.log(curnt)
        if (curnt<to){
            setTimeout(go,1000) 
        }
          curnt++;

    },1000)
}
printNumbers(5,10)


