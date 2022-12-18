// function abc(){
//     console.log('hello ')

// }
// abc.lastname='ali'
// console.log(abc)
// console.log(abc.name)



// let user={
//      abc(){
//         console.log('hello ')
    
//     },
//     def(){
//         console.log('janab')
//     }
// }
// console.log(user.abc.name)
// console.log(user.def.name)
// user.abc.lastname='ali'
// console.log(user.abc.lastname)




// The “length” property:
// function a(a){}
// function b(a,b){}

// function c(a,b,c,...more){}
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)



// handler program:


// function ask(question,...hanndlers){
//     let isYes=confirm(question);
//     for (let handler of hanndlers){
//         if(handler.length==0){
//             if (isYes)handler()

           
//         }
//         else{
//             handler(isYes)
                
//         }
//     }
// }

// ask("Question?", () => console.log('You said yes'), result => console.log(result));



// Custom properties:


// function abc(){
//     abc.counter++;
// }
// abc.counter=0
// abc();
// abc();
// console.log(`${abc.counter} times`)



// function makeCounter(){
//     function counter(){
//         return counter.count++
//     }
//      counter.count=0
//     return counter;
// }
// let counter=makeCounter();
// console.log(counter)
// console.log(counter)
// console.log(counter())
// console.log(counter())



// named function expressions:
// function h(who){
//     console.log(`helo  ${who}`)
// }
// h("ali");

// same as up code in which we use the NFE:


// let f=function func(who){
//     console.log(`helo ${who}`)
// }
// f("ali")


// we see it in more details 

// let f=function func(who){
//     if (who){
//         console.log(`"helo "${who}`)
//     }
//     else{
//         f("guest")
//     }
// }
// let wel =f
// f=null
// wel()     // it gives error



// now we write a program using nfe

// let f=function qa(who){
//     console.log(who) 
        
    
//     if (who){
//         console.log(`"helo "${who}`)
//     }
//     else{
//         qa("guest")
//     }
// }

// let wel =f
//  f=null
// wel()     




// function f(who){ 
// if (who){
//     console.log(`"helo "${who}`)
// }
// else{
//     f("guest")
// }

// }
// f=null
// let wel=f
// // f=null
// wel// console.log(wel)




// function makeCounter() {
//     // instead of:
//     // let count = 0
  
//     function abc() {
//       return abc.count++;
//     };
  
//     abc.count = 0;
  
//     return abc;
//   }
  
//   let counter = makeCounter();
//    counter.count=10
//   console.log( counter() ); // 0
//   console.log( counter() ); // 1





// Set and decrease for counter


// function makeCounter() {
//     let count=10
    
//     console.log(count)
  
//     function abc() {
//       return count;
//     };
//    abc.set=value => count=value
//    abc.decrease=() => count=--count
//    return abc
//   }

//   // console.log(makeCounter)
//   let counter = makeCounter();
//   console.log( counter.set(5) ); // 0
//   console.log( counter.decrease() ); // 1




  // function f(a){

  //   let crnt_sm=a;
  //   function b(d){
  //        crnt_sm +=d;
  //         return b
  //   };
  //   b.toString=function(){
  //     return crnt_sm
  //   };
  //   return b
    

  // }

  // console.log(f(1)(3)(4))

  function sum(a) {

    function b(b) {
       if(b)
       {
        
           let c=sum(a+b)
           return c; 
       }
       return a
       
     }
     return b;
   }
  //  let a=sum(1)(2)
   // console.log(a()())
   console.log( sum(1)(2)()); // 3
   console.log( sum(5)(-1)(2)() ); // 6
   console.log( sum(6)(-1)(-2)(-3)() ); // 0
   console.log( sum(0)(1)(2)(3)(4)(5)() ); //
