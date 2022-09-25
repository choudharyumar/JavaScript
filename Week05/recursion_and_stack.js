// two ways of thinking:
/// iterative thinking"
// function Pow(x,n){
// let result=1;
// for(let i=0;i<n;i++){
//     result *=x;
// }
// return result;
// }
// console.log(Pow(2,3))


/// recursive thinking:
// function Pow(x,n)
// {
//     if( n==1){
//         return x;
//     }
//     else{
//         return x*Pow(x,n-1);
//     }
// }
// console.log(Pow(2,4))


/// same function using conditional operator:

// function pow(x,n){
//     return (n==1)? x: (x*pow(x,n-1));
// }
// console.log(pow(2,4))

let a=3;
let result=5;
 result*=a;
console.log(result)
