// let user={
//     name:'umar',
//     age:34
// };
// user.sayHi=function(){
//     console.log('hello boy')
// };
// user.sayHi();


//  same code in shorter form

// let user={
//     name:'umar',
//     age:34
// };

// user={ sayHi:function(){
//         console.log('hello boy')
//     }
// };
// user.sayHi();


// another short method

// let user={
//     name:'umar',
//     age:34,

   
//       sayHi(){
//         console.log('helo g')
//         console.log(this.age)
//         console.log(this.name)
//     }
// };
// user.sayHi();
// user.class=5;
// console.log(user.class)
// delete user.age;
// console.log(user.age)

//  this is suitable for cLLING the key


// let user={
//     name:'umar',
//     age:34,

   
//       sayHi(){
//         console.log('helo g')
//         console.log(this.age) // if we use 'user' insted of 'this' than the code  did not works properly
//         console.log(this.name)


//     }
// };
// let admin=user;
// user=null;
// admin.sayHi();


/// "this" is not bound

// let user={
//    name:'ali',
//    age:34, 
// }
// let admin={
//     name:'khizar',
//     age:45,
// }
// function sayHi(){
//     console.log(this.name)
//     console.log(this.age)

// }
// user.f=sayHi;
// admin.f=sayHi;
// user.f();
// admin.f();
// user.present='haji';
// console.log(user.present)



//// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator={
//     sum(){
//         return this.a+this.b;
//     },
//     mul(){
//        return this.a*this.b;

//     },
//     read(){
//         this.a=+prompt('a?',4);
//         this.b=+prompt('b?',5);
//     }
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());



// chaining
let ladder={
    step:0,
    up(){
      this.step++;
      return this;
    },
    down(){
      this.step--;
      return this;

    },
    showStep()
    {
      console.log(this.step)
      return this;
    }
  }
  ladder.up().showStep();
  ladder.down().showStep();







