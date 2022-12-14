// // Code blocks:
// {
// let mess='heloo'
// console.log(mess)

// }
// {
//     let mess='heloo'
//     console.log(mess)  // here is the discription of calling inside block than see the results if the value of both variables are same and if we declare outside of the block than there is a error
    
//     }
    
// // working of loops also do same

// for(let i=0;i<4;i++){
//     console.log(i)
// }
// // console.log(i)// here it gves the error



// // now see the results of if else condition which gives the same result as we do in up positon

// if (true){
//     let nam='ali'
//     console.log(nam)
// }
// else {
//     console.log1(false)
// }
// console.log(nam) // here it gives the error because call it outside the blocks


// nested functions:


// function name(firstname,lastname){
//     function fname(){
//         return firstname+' '+lastname;
//     }

//     console.log('hello',fname())
//     console.log('jnab',fname())

// }
//   name('umar','hayat')


//   makeCounter creates the “counter” function that returns the next number on each invocation:
// function count(){
  
//     function newc(){
//         let counter=0;
//         let c=counter
//         return ++c;
       
//     }
//     console.log(newc())
    
// }
//  count();


//  function count()
//  {
//   let counter =0;
  
//     return function newc()
//    {
//         return ++counter;
       
//     }
   
    
    
// }
// let a=count()
//  console.log(a());


// // Lexical Environment:


// let phrase;

// phrase='by';

// phrase='helo';
// console.log(phrase)


// function declaration:


// let phrase1='helo';
// function sam(name)
// {
//   console.log(`${phrase1},${name}`)
// }
// sam('ali')
// read from the book to amke it clear more for functons


// Garbage collection:


// function abc(){
//   let value=123;
//   return function(){
//     return value 
//   }
// }
//  let a=[abc(),abc(),abc()]
// console.log(a[0]())



// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // in console: type alert(value); No such variable!
//   }

//   return g;
// }

// let ab = f();
// console.log(ab());


// let value = "Surprise!";

// function f() {
//   let value = "the closest value";
//   console.log(value)

//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }

//   return g;
// }
// let g = f();
// g();





// function say(fn,ls){
//   function a(){
//     return fn+' '+ls;
//   }
//    console.log('g' , a())
// }
// say('ali','hamza')


// function name(firstname,lastname){
//   function fname(){
//       return firstname+' '+lastname;
//   }

//   console.log('g',fname())
//   console.log('g',fname())

// }
// name('umar','hayat')



// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); 



// Write function sum that works like this: sum(a)(b) = a+b.
// function sum(a){
 
//   return function(b){
//     return a+b;
//   }
// }
// console.log(sum(1)(3))


// let x = 1;

// function func() {
//   let x = 2;

//   console.log(x); // ?

// }

// func();



// let arr = [1, 2, 3, 4, 5, 6, 7];
// let result=arr.filter(abc)
// function abc(index){
//   return index > 2 && index < 7 
// }

// console.log(result)//3,4,5,6









let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2=[1, 2, 10]
let n=arr.filter(e => arr2.indexOf(e) > -1 ? true : false); // [1]
console.log(n)






// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(fieldname){
//   return (a,b)=>a[fieldname] > b[fieldname]?1:-1;
// }
// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));





// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { 
//       alert( i ); 
//     };
//     shooters.push(shooter); 
//     i++;
//   }


//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.




// // global variable:


// function g(){
//   let a=10;
//   console.log(a)
// }
// g()


// function f(){

//   console.log(b)
//   var b=10;;
// }
// f()


// for (var i=0;i<5;i++)
// {
//   var one=123;/// here we use let than it gives an error
//   console.log (i)
// }
// console.log(one)// we declare it inside the code block but call it outside than var also works






// global object :

user={
  name:'john'
}
console.log(user.name)