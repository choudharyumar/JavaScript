// function calculator(){
//     let a=+prompt('put hte value of a  :','');
//     let b=+prompt('put hte value of b  :','');
//     let c=prompt('put the operator which you want like (+,-,*,/)  :','');
//     if (c== '+')
//     {
//         return a+b;
//     }
//     if (c== '-')
//     {
//         return a-b;
//     }
//     if (c== '*')
//     {
//         return a*b;
//     }
//     if (c== '/')
//     {
//         return a/b;
//     }

// }
// let d=calculator();
// console.log(d);

// let calculator={
//     read(){
//         this.a=+prompt('put hte value of a  :','');
//         this.b=+prompt('put hte value of b  :','');
//     },

//     sum(){
//         return this.a +this.b;
//     },
//     diff(){
//         return this.a -this.b;
//     },
//     pro(){
//         return this.a *this.b;
//     },
//     div(){
//         return this.a /this.b;
//     },
// }
  
// calculator.read();
// console.log('the sum of value is :',calculator.sum())
// console.log('the diff of value is :',calculator.diff())
// console.log('the pro of value is :',calculator.pro())
// console.log('the div of value is :',calculator.div())


let arr=[11,14,16,19]
let findex=arr[0]
let lindex=arr[arr.length-1];
let arr2=[]
 for(let i=findex;i<=lindex;i++)
{
    if(arr.indexOf(i)==-1)
    {
        
    
    arr2.push(i);
    }
}
console.log(arr2)


let questions=['a)  what is your name?,  b)what isyour age?']
console.log('helo how are you')

