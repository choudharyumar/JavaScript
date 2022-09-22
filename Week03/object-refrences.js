// let user={
//     name:'ali',
//     age:34
// }
// let admin=user;
// admin.name='khizar';
// console.log(admin.name);
// console.log(user.age);
// //user.name='ali';
// console.log(user.name);


// comarision  by refrences 
// let a={
//     name:'ali'
// }
// let b=a;// in this format we can assign the value of b to a
// console.log(b===a)


// let a={
//     name:'umar'
// };
// let b={
//     name:'khizar'
// };
// console.log(b===a)



// const obj={
//     name:'khzar',
//     age:34
// }

// obj.name='ALI';
// console.log(obj.name)
// console.log(obj.age)

// cloning and merge object design
// let x={
//     name:'umar',
//     age:43
// }
// let y={

// }
// for (let key in x)
// {
//     y[key]=x[key];
// }
//  //y.name='khizar';
// console.log(y.name)
// console.log(x.name)
// console.log(x.age)
// console.log(y.age)
// y.name='khizar';
// console.log(y.name)


// object assign
// let x={
//     name:'kh',
//     age:34
// }
// let y={
//     'hello world':true
// }
// let z={
//     'hello data':true
// }
// Object.assign(x,y,z);
// console.log(x.name)
// console.log(x['hello world'])
// console.log(x['hello data'])
// Object.assign(x,{name:'ali'});// use to change the property of a object
// console.log(x.name)


// nested clonning
let x={
    height:50,
    length:43,

 y:{
    width:45
}
};

let clone=Object.assign({},x);
//console.log( x.y === clone.y );
//x.y.width = 60;
//Object.assign(x,y);
console.log(clone.y.width)
x.y.width = 60;
console.log(clone.y.width)



// stuructured clone
// let x={
//     height:50,
//     length:43,

//  y:{
//     width:456
// }
// };

// let clone = structuredClone(x);
// x.y.width=45
// console.log(clone.y.width)









