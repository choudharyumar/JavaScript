// constructor operator

// function User(name){
//     this.name=name;
//     this.isadmin=false;
// };
// let user=new User('jack');
// let other=new User('ann');
// let other2=new User('haji');
// console.log(user.name)
// console.log(other.name)
// console.log(other2.name)
// console.log(user.isadmin)


//Return from constructors

// function big(name){
//     this.name=name;
//     return {name:'haji'}  // return shows the priority to return the value
// }
// let user2=new big('khizar')
// let user3=new big('baji')

// console.log(user2.name)  // haji
// console.log( user3.name)// haji


// another program
// function big(){
//     this.name='ali';
//     return {name:'haji'}
// }
// console.log(new big().name)


// another program for the value of this
// function big(){
//     this.name='ali';
//     return ;
// }
// console.log( new big().name)



//Methods in constructor:
// function user(name){
//     this.name=name;
//     this.sayHi =function(){
//         console.log('my name is:'+this.name)
//     }
// }
// let user2=new user('john');
// let user3=new user('ali');
// console.log(user3.name)
// user2.sayHi();



// let calculator={
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a*this.b;
//     },
//     read(){
//         this.a=+prompt('a?',5);
//         this.b=+prompt('b?',6);

//     },

// }
// //let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );




//// program to make a calculator by using constructors
// function Calculator() {
//     this.sum=function(){
//         return this.a + this.b;
//     };
//     this.mul=function(){
//         return this.a*this.b;
//     };
//     this.read=function(){
//         this.a=+prompt('a?',5);
//         this.b=+prompt('b?',6);

//     };

// }
// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );



//// program of a accumulator
// function Accumulator(startingValue){
//     this.value=startingValue;

//     this.read=function(){
//     this.value+=+prompt('what is the value?',5);
//     }

// }
// let accumulator = new Accumulator(10); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// console.log(accumulator.value); // shows the sum of these values

