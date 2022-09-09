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




