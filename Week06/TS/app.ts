let myage:string|number;
myage=16;//narrowing
console.log(myage)

myage='dont know';
console.log(myage)

let newage=Math.random()>0.6?'khan':30;
if (newage==='khan')
{
console.log(
    newage.toUpperCase());
}

let a=5;
console.log(typeof a)
let age:number|'died'|"unknown";
age=90;
age='died';
age='unknown';
age='living';
console.log(age)

