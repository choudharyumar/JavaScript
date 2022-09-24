// // for string conersion
// let obj={}
// console.log(obj);

// // using object as a property key
// anotherObj[obj] = 120;


// explicit conversion
// let obj={};
// let date1,date2,user1,user2;
// let num = Number(obj);

// // maths (except binary plus)
// let n = +obj; // unary plus
// let delta = date1 - date2;

// // less/greater comparison
// let greater = user1 > user2



/// symbol to primitive:
//obj[Symbol.toPrimitive] = function(hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
  //};

  // code:
//   let user={
//     name:'umar',
//     number:123,
  
//   [Symbol.toPrimitive](hint){
//     alert(`hint:${hint}`)
//     return hint=='string'? `name:${this.name}`:this.number;
//   }
// }
// alert(user);
// console.log(+user);
// console.log(user+500);



///to string/valueof:

// let user={name:'umar'}
// console.log(user)
// console.log(user.valueOf()===user)  // true

// above code instead use of primitve method:
// let user={name:'umar',
// number:30,
// // hint:if string
// toString(){
//     return `{name:'${this.name}'}`;
// },
// //hint: if value or default 
// valueOf(){
//     return this.number;
// }
// }
// console.log(user);
// console.log(+user);
// console.log(user+300);



//another method:
// let user={
//     name:'umar',
//     toString(){
//         return this.name;
//     }
// }
// console.log(user);
// console.log(user+400);


// other conversions:
// let obj={
//     toString(){
//         return '3';
//     }
// }
// console.log(obj*3);




// another code:
// let obj={
//     toString(){
//         return '3';
//     }
// }
// console.log(obj+3); // 33  (concatenation)


let obj={
    a:3,
    b:4
}
console.log('product',obj.a*obj.b)
console.log('sum',obj.a+obj.b)
console.log('division',obj.a/obj.b)














