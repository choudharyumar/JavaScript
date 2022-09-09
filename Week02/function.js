// // syntsx of function:

// function showMessage() {
 
//     console.log("hello you")
// }
// showMessage();
// showMessage();


// local variablea in function

// function showMessage() 
// {
//     let message ="how are you all";
//     console.log(message);
    
// }
// showMessage();

//other varibles in function:


//  let name= 'john'
//  function showMessage() 
//  {
//      let name="ali";

//      let message ='helo,   ' + name;
//      console.log(message);
    
//  }
//  console.log(name);
//  showMessage();
//  console.log(name);

//   let userName = 'John';

//   function showMessage() {
//     userName = "Bob"; // (1) changed the outer variable

//    let message = 'Hello, ' + userName;
//    console.log(message);
//  }

//  console.log( userName ); // John before the function call

//  showMessage();

//  console.log( userName ); // Bob, the value was modified by the function




//  let name='umar';
//  function showMessage()
//  {
//      name="bob";
//     let message='hy ,'+name;
//     console.log(message);
//  }
//  //console.log(name);
//  showMessage();
//  console.log(name);


 //parameters in function:

// function showMessage(you,text)
// {
//     console.log(you+" :"+text)
// }
// showMessage('hy','umar');
// showMessage('hy','khizar');


// function showMessage(from,text)
// {
//    // from='*'+from+'*';
//     console.log(from+" :"+text)

// }
// let from='ali';
// showMessage('come');
// showMessage(from);  /// ali but undefined:


// // default vLUES
// function showMessage(from,text='no text is given')
// {
//    // from='*'+from+'*';
//     console.log(from+" :"+text)

// }
// let from='ali';
// showMessage('come',undefined);// it shows the deefault value


// // alternative vslues
// function showMessage(text)
// {
//     console.log(text??"unknown")
// }
// showMessage();
// showMessage(0);
// showMessage(null);


// // returning a value
// function x(a,b)
// {
//     return a+b;
//     return a-b;
//     return a*b;
// }
// let result=x(2,5);
// console.log(result);
// console.log(result);
// console.log(result);


// let age=19;
// function check(age){
// if (age>=18) {
//     return true;
    
    
// }
// else{
//     return false;
// }
// }
// if (check(age)) {
//     console.log('access granted')
// }
// else{
//     console.log('access denied')

// }


// let a=13,b=12;
// console.log(a*b);
// console.log(a-b);
// console.log(a+b);
// console.log(a/b);


// function donothing()
// {
    
// }
// console.log(donothing()===undefined);


// let a=14,b=12;
// x=a*b;
// x=a-b;
// x=a+b;

// switch (x) {
//     case a*b:
//         console.log('mul')
        
//         break;
//          case a-b:
//          console.log('sub')
//              break;
//              case a+b:
//          console.log('add')
//              break;
//     default:
//         console.log('nothing')
//         break;
// }

// function x(a,b)
// {
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)

// }
// x(14,12);


function x(a,b,c)
{
    if (c=="+") {
        return(a+b);
    }
    if (c=="-") {
        return (a-b);
        
    }
}
let y=(6,3,"-");
console.log(y);// that code does not work and understand later


