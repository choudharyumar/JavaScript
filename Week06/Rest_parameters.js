// // rest parameters:
// function ab(a,b){
//    let sum=a+b;
//    return sum;
// }
// console.log(ab(1,2,4,5,6))// it only gives the sum of first two



// // For instance, to gather all arguments into array args:
// function small(...argsing){
//     let sum=0;
//     for(let arg of argsing)
//     sum+=arg;
//     return sum
// }
// console.log(small(1))
// console.log(small(1,2))
// console.log(small(1,4))
// console.log(small(1,5))



// // Here the first two arguments go into variables and the rest go into titles array:
// function s(firstname,lastname,...titles){
//     console.log(firstname+' '+lastname)
//     console.log(titles[0])
//     console.log(titles[1])
//     console.log(titles[2])


// }
// s('ali','hamza','class','school','friends')



// // The “arguments” variable:


// function abc()
// {
//     console.log(arguments.length)
//     console.log(arguments[0])
//     console.log(arguments[1])

// }
// abc('hello','boy')
// abc('he','was','jnab')



// // Arrow functions do not have "arguments":

// function f()
// {
//     let result=()=>console.log(arguments[0],arguments[1])
//     result()
// }
// f(1234,2345);
// f('ali')




// Spread syntax:

// let arr=[1,3,5]
// console.log(Math.max[arr])//undefined


// let arr=[1,3,5]
// console.log(Math.max(...arr))

// // comparing two arrays
// let arr1=[1,3,5]
// let arr2=[4,5,9]

// console.log(Math.max(...arr1,...arr2,25))//in this we add a number which greater in comparing both arrays 
// console.log(Math.max(...arr1,...arr2,2))//in this we add a number which less in comparing both arrays 


// merging two arrays 
let arr1=[1,3,5];
let arr2=[4,5,9];
let merged=[1,...arr1,2,...arr2]
console.log(merged)




// change string into an arrray
let str ='hello boy';
// console.log([...str])
console.log(Array.from(str))// it is used for universal level
