
// Losing this:
// let user={
//     fname:"umar",
//      ab(){
//         console.log(`"hello",${this.fname}`)

//     }
// }
// let f=user.ab
// setTimeout(f,2000)// in this it dsnt shoes the first name



// to fix this we find a solution

// 1:wrapper:

// let user ={
//     fname:"umar",
//     ab(){
//         console.log(`"hello",${this.fname}`)
//     }
// }
// setTimeout(() => {user.ab()
    
// },2000);// hello umar


// there is a problem in this 

// let user ={
//     fname:"umar",
//     ab(){
//         console.log(`"hello",${this.fname}`)
//     }
// }
// setTimeout(() => {user.ab()// i am in the settimeout
    
// },2000);

//  user={
//     ab(){
//         console.log("i am in the settimeout")
//     }
//  }



//  bind:

// (1)

// let user={
//     fname:"umar"
// }
// function ab(){
//     console.log(`"hello",${this.fname}`)
// }
// let func=ab.bind(user)
// func()



// (2)

// let user={
//     fname:"umar"
// }
// function ab(pharse){
//     console.log("hello "+pharse+ " , "+this.fname)
// }
// let func=ab.bind(user)
// func("janab")



// (3)

// let user ={
//     fname:"umar",
//     ab(){
//         console.log(`"hello",${this.fname}`)
//     }
// }
// let abc=user.ab.bind(user)
// setTimeout(() => {abc()
    
// },2000);

//  user={
//     ab(){
//         console.log("i am in the settimeout")
//     }
//  }


//  (4)

// let user={
//     fname:"umar",
//     ab(pharse){
//         console.log(`"ali",${pharse},${this.fname}`)
//     }
// }
// let abc=user.ab.bind(user)

// setTimeout(() => {abc("hello")
    
// }, 2000);

// setTimeout(() => {abc("hy")
    
// }, 2000);
// abc("janab")




// Partial functions


// (1)

// function mul(a,b){
//     return a*b
// }
// let ab=mul.bind(null,2)
// console.log(ab(3))



// // (2)
// function mul(a,b){
//     return a*b
// }
// let cd=mul.bind(null,3)
// console.log(cd(3))



// Going partial without context:

function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }
let user={
    fname:"umar",
    say(time,pharse){
        console.log(`${time},${this.fname},${pharse}`)

    }
}
// add a partial method with fixed time
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
// add a partial method with fixed time
user.sayNow = partial(user.say, 2 + ':' + 3);
 user.sayNow("hy")

// let user={
//     fname:"umar",
//     say(time,pharse){
//         console.log(`${time},${this.fname},${pharse}`)

//     }
// }
// user.say(2,"hayat")


// let d=user.say.bind(user)
// setTimeout(()=>d(2,"hayat")
// ,2000)




// diff of bind and call

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
// //   let ab = person.fullName.bind(member);// bind return the function and we used in future of program
//   let ab = person.fullName.call(member);// in call we only use the value for once 
  
//   console.log(ab)
