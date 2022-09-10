// function sayHi()
// {
// console.log('helo')
// }
// let func =sayHi;
// func();
// sayHi();



/// call back function

// function ask(question,yes,no)
// {
//     if(confirm(question)) yes()
//     else no();
// }
// function showOk()
// {
//     console.log('plz apprve')
// }
// function showCancel()
// {
//     console.log('dissmiss the offer')
// }
// ask('do you agree?',showOk,showCancel);


// above code in short form:\

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
  );
  // function expression
// function sum(a,b)
// {
//     return (a+b);
// }
//  let x=sum(4,5);
//  console.log(x)


 // function expreesion"
//  let sum=function(a,b)
//  {
//     return a+b;
//  }

//  console.log(sum (5,6));



//  sayHi('ali');
//  function sayHi(name)
//  {
//     console.log(`hello,${name}`)
//  }

 // when a function declare inside a code than it defines firstly

// let age =prompt ('what is your age?',17);
// let welcome;
// if (age<18)
// {
// welcome=function()
// {
//     console.log('hello');
// }
// }
// else
// {
// welcome=function()
// {
//     console.log('greetings');

// }
// }
//  welcome();

// in another variety

let age=prompt('what is your age?',18);
let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome();




