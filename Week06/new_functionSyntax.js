


// syntax of a new function

// let f=new Function("a",'b','return a+b');
// console.log(f(1,2))


// (2)
// let g=new Function(console.log(" hi"));
// g()




// this syntax is used for when string is passed and it converts into the function

// let str = " receive the code from a server dynamically ";

// let func = new Function(str);
// func();




// Closure


// this function is in it normal form


// function g()
// {
//     let value ="ali"
//     function f(){
//         console.log(value)
//     }
//     return f();
// }
// g()//ali



// function getfu()
// {
//     let value ="ali"


//     let f=new Function('console.log(value)')
    
//     return f();
// }
// getfu()  // in this it give not the value and it gives the error



// function getfu()
// {
//     let value ="ali"


//     let f=new Function(console.log(value))
    
//     return f();
// }
// getfu()  // it also gives the value 


// function getFunc() {
//     window.value = "test"
//     let func = new Function("console.log(window.value)");
//     return func
//     }
//     getFunc()();//  in this code window doesnot work in terminal