
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

let user={
    fname:"umar",
    ab(pharse){
        console.log(`"ali",${pharse},${this.fname}`)
    }
}
let abc=user.ab.bind(user)

setTimeout(() => {abc("hello")
    
}, 2000);

setTimeout(() => {abc("hy")
    
}, 2000);
abc("janab")


console.log("hello")


