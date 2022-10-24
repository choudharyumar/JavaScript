

// let obj1={name:'um',age:32,class:5}
// let obj2={name:'gn',age:53} 

// let obj3={name:'kh',age:26} 

// let obj4={name:'al',age:36}


// for (let key of Object.keys(obj1)){
//     console.log(key)
// } 
// for (let key of Object.values(obj1)){
//     console.log(key)
// } 
// for (let key of Object.entries(obj1)){
//     console.log(key)
// } 

// for (let key of Object.keys(obj2)){
//     console.log(key)
// } 
// for (let key of Object.values(obj2)){
//     console.log(key)
// } 
// for (let key of Object.entries(obj2)){
//     console.log(key)
// } 







// compare map and Object.keys, values, entries


// let map=new Map([
//     ['name',123],
//     ['um',1253],

// ]);

// for (let key of map.keys())
// {
//     console.log(key)
// } 
// for (let val of map.values())
// {
//     console.log(val)
// } 
// for (let key of map.entries())
// {
//     console.log(key)
// } 







// Transforming objects:


// let price={apple:3,a:4,
//     orange:4,b:4,
//     mango:5,c:5 };
//     let doublePrices=Object.entries(price)
//  let f=doublePrices.map(entry=>[entry[0],entry[1]*2])
//  let againObj=Object.fromEntries(f)
//  console.log(againObj)





// tasks  1



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//  function sumSalaries(salaries){
//     let sum=0;
//     for(let sal of Object.values(salaries))
//     {
//          sum+=sal;

//     }
     
//     return sum;
// };
// console.log(sumSalaries(salaries))



// task 2:

let user = {
    name: 'John',
    age: 30
  };
  console.log(Object.keys(user))
 function count(user)
 {
 return Object.keys(user).length;
 }
 console.log(count(user))







