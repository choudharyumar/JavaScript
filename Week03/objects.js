//let user= new Object();
// let user={
//     name:'john',
//     age:23
// };
// delete user.age;

// console.log(user.name);
// user.isadmin=true;
// delete user.age;
// console.log(user.age);
// console.log(user.isadmin)

// let library={
//     books:'english',
//     admin:'ali',
//     password:1234,
//     "all is well":true,

// };
// library.isHelper=true;

// console.log(library.books)
// delete library.password;  // this is use to delete the key names
// console.log(library.admin)
// delete library["all is well"];
// console.log(library.password)
// console.log(library["all is well"])
// console.log(library.isHelper)


// simple program
// let user={
//     name:'ali',
//     age:29,
//     classNo:5,
//     student:'good'
// };
// user.isHelper=true;

// let key=prompt('what do you want ?','name');
// //delete user[key];  // it is used to remove the identifier 'key'

// console.log(user[key])
// delete user.isHelper;
// console.log(user.isHelper)



// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   console.log( user[key] )
//   console.log( user.age )


// computed properties"
// let fruit=prompt('which fruit do you want?','apple');

// let bag ={
//     [fruit]:5

// };
// console.log(bag.apple)



// property value short hand
// function x(name,age){
//     return{
//         name,
//         age
//     };
// }
// let y=x('ali',23);
// console.log(y.name)
// console.log(y.age)


// property name limitations:

// let obj={
//     for:1,
//     return:2,
//     let:3,
//     loop:4,
//     nor:5
    
// };
// console.log(obj.for+obj.return+obj.let+obj.loop+obj.nor)


// in this code there are no issue of strings and symbols

// let x={
//     0:'test',
//     4:'g umar bhi'

// };
// console.log(x[0])
// console.log(x[4])



// let obj = {};
// obj.__proto__ = 5; // assign a number  this isb an object which shows always a object 
// alert(obj.__proto__);

// let obj={
//     a__proto__:5,
// };
// console.log(obj.a__proto__)

// property existance in object
// let user={
//     name:'irfan',
//     age:40
// }
// console.log('name' in user)
// console.log('age' in user)
// console.log('40' in user)

// let obj={
// list:4
// }
// console.log(obj.noSuchproperty===undefined)//  it gives us true


// program when a property exits but sve no value

// let x={
//     test:undefined
// }
// console.log(x.test)
// console.log('test' in x)



// for in objects
// let x={
//     name:'umr',
//     age:30,
//     class:5
// };
// for(key in x)
// {
//     console.log(key)
//     console.log(x[key])
// }


// ordered like an object

// let codes={
//     49:'for grmny',
//     51:'for paki',
//     45:'for india'
// }

// codes.warn='iran';
// delete codes[51];
// for(code in codes)
// {
//     console.log(code)
//     console.log(codes[code])
    
// }


//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

    function multiplyNumeric(menu) {
        for (let key in menu) {
          if (typeof menu[key] == 'number') {
            menu[key] *= 2;
          }
          console.log(menu[key])
        }

      }
      multiplyNumeric(menu);









