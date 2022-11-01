// let obj={
//     name:'umar',
//     age:56,
//     toString(){
//         return `{'name:' '${this.name}','age':${this.age} }`;
//     }
// }
// console.log(obj.toString())



// JSON.stringify:


// let obj={
// name:'umar',
// age:21,
// subject:'math',
// arr:['html','css','java'],
// spouse:null,
// isAdmin:false
// }
// let json=JSON.stringify(obj);
// console.log(json)




// it is also apply for primitives:

// console.log(JSON.stringify(1222))
// console.log(JSON.stringify('hello boy'))
// console.log(JSON.stringify(['hy','boys'])) ;



// let user = {
//     sayHi() { // ignored
//       alert("Hello");
//     }
// }
// let json=JSON.stringify(user);
// console.log(json)



// objects between inner objects:


// let obj={
//     name:'umar',
//     age:56,
   
//      obj2:{
// name:'hayat',
// age:21,
// subject:'math',
// arr:['html','css','java'],
// spouse:null,
// isAdmin:false
// },

// }
// let json=JSON.stringify(obj);
// console.log(json)




// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };

//   room1 = room;      
//   room2 = meetup; 
  
//  console.log( JSON.stringify(room1));
//   console.log(JSON.stringify(room2));



  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;       // meetup references room
  room.occupiedBy = meetup; // room references meetup
  
  console.log(JSON.stringify(meetup));

