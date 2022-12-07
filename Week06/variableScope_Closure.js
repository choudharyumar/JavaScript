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



let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); 