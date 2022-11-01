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

let calculator={
    read(){
        this.a=+prompt('put hte value of a  :','');
        this.b=+prompt('put hte value of b  :','');
    },

    sum(){
        return this.a +this.b;
    },
    diff(){
        return this.a -this.b;
    },
    pro(){
        return this.a *this.b;
    },
    div(){
        return this.a /this.b;
    },
}
  
calculator.read();
console.log('the sum of value is :',calculator.sum())
console.log('the diff of value is :',calculator.diff())
console.log('the pro of value is :',calculator.pro())
console.log('the div of value is :',calculator.div())


