// let user={}
// console.log(user.address ?user.address.street:undefined)


// let user={

// }
//  console.log(user.adress?user.adress.street? user.adress.street.name:null:null)


 /// another way to write this
//  let user={}
//  console.log(user.address && user.address.street &&user.address.street.name )//undefined

//  let user1={}
//  console.log(user1.address)  //undefined

//  let user4 = {};

// console.log(user4.address && user4.address.street );//undefined




// optinal chaining

// let user={
//     street:4,
// }
// console.log(user.address?.street)// undefined


// let user1={
//     street:4,
// }
// console.log(user1.address?.street)// undefined



// simple program

// let user=null;
// let x=0;
// function sayHi(){
//     x=x+1;
// console.log(x)
// }
// sayHi(x);
// console.log(sayHi(x))





//  short circuiting
// let user=null;
// let x=0;
// function sayHi(x)
// {}
// user?.sayHi(x);
// console.log(x++)//0
// console.log(x++)//1


///Other variants: ?.(), ?.[]:


// let obj={
//     haji(){
//         console.log('i am admin')
//         name='john';
//     }
// }
// let obj2={}
// obj2.admin?.();  // give no value
// obj.admin?.(); // give the value
// console.log(name)













//let key='street';

//old simple version
// let user1={
//     street:4,
// }
// console.log(user1.street)

// let key='street'
// let user1={
//     street:4,
// }
// let user2={}
// console.log(user1?.[key])
// console.log(user2?.[key])



let user1={
    street6:4,
}
//user1?.street6;
console.log(user1?.[street6])  

    




