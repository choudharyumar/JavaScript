// we see the garbage and overwrite values

// let john={name:'umar'}
// let arr=[john];
// console.log(arr[0])//{name: 'umar'}
//  john=null;
// //   console.log(john.name)//error
//  console.log(arr[0])//{name: 'umar'}



// let john={name:'umar'}
// let map=new Map()
// map.set('john','....')
// john=null;
//   console.log(john.name)//error

// console.log(map.get('john'))


// WeakMap:


// let john={name:'umar'}
// let obj={name:'um'}

// let map=new WeakMap()
// map.set(john,'34')
// // map.set('ali','345')// this gives us error 
//  console.log(map.get(john))
// console.log(map.get(obj))


// comparing weakmap with the map 

// let john={name:'umar'}
// let map=new Map()
// map.set(john,'34')
// map.set('haji','345')
// console.log(map.get(john))
// console.log(map.get('haji'))




// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// console.log(weakMap.get(john))




// let john = { name: "John" };

//  let map = new Map();
// map.set(john, "...");
// john=null;
// let b=map.keys();
// console.log(b.next().value)




// Use case: additional data:

// // 📁 visitsCount.js
// let visitsCountMap = new Map(); // map: user => visits count

// // increase the visits count
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }
// // And here’s another part of the code, maybe another file using it:

// // 📁 main.js
// let john = { name: "John" };

// countUser(john); // count his visits

// // later john leaves us
// john = null;
// // 📁 visitsCount.js
// let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// // increase the visits count
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }




// WeakSet

// let visits=new WeakSet();
// let obj1={name:'umar'}
// let obj2={name:'khi'}
// let obj3={name:'ali'}
// visits.add(obj1);
// visits.add(obj2);
// visits.add(obj3);
// visits.add(obj1);
// visits.add(obj2);
// // for (let key of visits);
// console.log(visits.has(obj1))
// console.log(visits.has(obj2))

// console.log(visits.has(obj3))
// obj1=null;
// console.log(visits.has(obj1))
// console.log(visits.has(obj2))






// practice problem:


// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
//   let read=new WeakSet();
//   read.add(messages[0]);
//   read.add(messages[1]);
//   read.add(messages[2]);
//   read.add(messages[0]);
//   console.log(read.has(messages[0]))
//   console.log(read.has(messages[1]))
//   console.log(read.has(messages[2]))
//   messages.shift(0);
//   console.log(read.has(messages[2]))


  // another practice problem:


  // let messages = [
  //   {text: "Hello", from: "John"},
  //   {text: "How goes?", from: "John"},
  //   {text: "See you soon", from: "Alice"}
  // ];
  
  // let readMap = new WeakMap();
  
  // readMap.set(messages[0], new Date(2017, 1, 1));
  // readMap.set(messages[1], new Date(2022, 09, 23));
  // console.log(readMap.get(messages[0]))
  // console.log(readMap.get(messages[1]))
  // for (let key of messages){
  //   console.log(key)
  //   console.log(key.from)
  //   console.log(key.text)

  // }


  // practice
  let map=new WeakSet()
  let obj1={name:'u'}
  let obj2={name:'u'}
  map.add(obj1)
  map.add(obj2)
  console.log(map.has(obj1))
   delete obj1;
  obj1=null;
  console.log(map.has(obj1))
  console.log(map.has(obj2))








  




