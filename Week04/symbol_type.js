// let id1=Symbol('id');
// let id2=Symbol('id');
// console.log(id1===id2)  // both are unique


// let id1=Symbol('id');
// alert (id1)  // canot convert the symbol value to a string 


// for conversion of id in to a strig
// let id1=Symbol('id');
// console.log(id1.toString())



// to get symbol description property 
// let id1=Symbol('id');
// console.log(id1.description)




/////////// hidden properties:

// let user={
//     name:'john'
// }
// let id1=Symbol('id1');
// user[id1]=123;
// console.log(user[id1])
// console.log(user.name)


// another program
// let user={name:'umar'}
// let id =Symbol('id');
// user[id]='my name is khan';
// console.log(user[id])
// user[id]='my name is umar';
// console.log(user[id])

//program for string
// let user={name:'umar'}
//  let a = "hi"; 
//  let b= "hi";
// console.log(b===a)  // true 

// comparision
// let user={name:'umar'}
// let k1=Symbol('hi');
// let k2=Symbol('hi');
// console.log(k1===k2)  // false




/////Symbols in an object literal:
// let id =Symbol('123');
// let obj={
//     name:'umar',
//     [id]:123
// }
// console.log(obj[id])// 123

// obj[id]='234';
// console.log(obj[id])//234


///Symbols are skipped by for…in:

// let id=Symbol('id');
// let user={
//     name:'umar',
//     age:34,
//     [id]:123,
// }
// for(let key in user)
// {
//     console.log(key)

// console.log(user[key])// symbol dont work in for in loops

// }
// console.log('direct:'+user[id])



/// symbols in object
// let id=Symbol('id');
// let user={
//     name:'umar ',
//     age:34,
//     [id]:123
// }
// let clone=Object.assign({},user);
// console.log(clone.name)
// console.log(clone[id])



/// global symbols:
// let id=Symbol.for('di');
// let idAgain=Symbol.for('di');
// console.log(id===idAgain)// trrue



// let id=Symbol.for('di');
// let idAgain=Symbol.for('123');
// console.log(id===idAgain)  // false



///Symbol.keyFor:

// let sym1=Symbol.for('name');
// let sym2=Symbol.for('age');
// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));

// if the symbol.key for not presnet than if we cll it then it gives the answer of undefined


let sym1=Symbol.for('name');
let sym2=Symbol('age');
console.log(Symbol.keyFor(sym1));//name
console.log(Symbol.keyFor(sym2));// undefined
console.log(sym2.description)// for local variable










