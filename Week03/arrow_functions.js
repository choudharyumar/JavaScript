// simple program
// let sum=(a,b)=>(a+b);
// console.log(sum(1,4))

// for square of a number
let double=n=>n*2;
console.log(double(4))

 let sayHi=()=>console.log('hello');
 sayHi();

 // program to check age
 let age=prompt('what is your age?',14);
 let welcome=(age<18)?
 ()=>console.log('you are welcome'):
 ()=>console.log('you are  not welcome');
 welcome();


 // multiline arrow function
 let sum=(a,b)=>
 {
    let result=a+b;
return result;
 }
 console.log(sum(3,4))

 // simple practice program
 let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
'Do you agree?',
() => console.log('You agreed'),
() => console.log('You interrupted execution'),
);