// console.log("umar")


// property flags:


// let user={
//     name:"umar",
//     age:34
// }
// let descriptor =Object.getOwnPropertyDescriptor(user,"age")
// console.log(JSON.stringify(descriptor,null,5))
// console.log(descriptor)


// if we change the flags :


// let user={}
// Object.defineProperty(user,"name",{
//     value:"ali"
// })
// let descriptor=Object.getOwnPropertyDescriptor(user,"name")
// console.log(descriptor)


// Non-writable:

// let user={name:"ali"}
// Object.defineProperty(user,"name",{
//     writable:false
// })
// user.name="khizar"
// let descriptor=Object.getOwnPropertyDescriptor(user,"name")
// console.log(descriptor)
// console.log(user.name)//ali



// for true and flags is also changeable:

// let user={name:"ali"}
// Object.defineProperty(user,"name",{
//     writable:true
// })
// user.name="khizar"
// let descriptor=Object.getOwnPropertyDescriptor(user,"name")
// console.log(descriptor)
// console.log(user.name)//khizar



// another code 

// let user={name:"ali"}
// Object.defineProperty(user,"name",{

//     // writable:false,//if we not declarre writable than it alsways be tru
//     enumerable:true,
//     configurable:true,
// })
// user.name="khizar"
// let descriptor=Object.getOwnPropertyDescriptor(user,"name")
// console.log(descriptor)
// console.log(user.name)//ali


// another program:

// let user={}
// Object.defineProperty(user,"name",{
//     value:"hamza",
//     // writable:true,//if we not declare writable than it is false
//     enumerable:true,
//     configurable:true,
// })
// user.name="khizar"
// let descriptor=Object.getOwnPropertyDescriptor(user,"name")
// console.log(descriptor)
// console.log(user.name)//hamza



let user={}
Object.defineProperty(user,"name",{
    value:"hamza",
    writable:true,
    enumerable:true,
    configurable:true,
})
user.name="khizar"
let descriptor=Object.getOwnPropertyDescriptor(user,"name")
console.log(descriptor)
console.log(user.name)//khizar



// Non-enumerable:

// let user={
//     name:"umar",
//     toString(){
//         return this.name
//     }
// }
// Object.defineProperty(user,"name",{
//     // enumerable:true

// })
// console.log(user.name)

// let ba=Object.getOwnPropertyDescriptor(user,"name")
// console.log(ba)
// for(let key in user)
// console.log(key)




