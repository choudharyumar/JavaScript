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



  // let room = {
  //   number: 23
  // };
  
  // let meetup = {
  //   title: "Conference",
  //   participants: ["john", "ann"]
  // };
  
  // meetup.place = room;       // meetup references room
  // room.occupiedBy = meetup; // room references meetup
  
  // console.log(JSON.stringify(meetup));// gives error (converting circular)



  // Excluding and transforming: replacer:


  // let room = {
  //   number: 23
  // };
  
  // let meetup = {
  //   title: "Conference",
  //   participants: ["john", "ann"],
  //   place:room
  // };
  
  // room.occupiedBy = meetup; // room references meetup
  
  // console.log(JSON.stringify(meetup,['title','participants']));



// for the properties of romm obj

  // let room = {
  //   number: 23
  // };
  
  // let meetup = {
  //   title: "Conference",
  //   participants: ["john", "ann"],
  //   place:room
  // };
  
  // room.occupiedBy = meetup; // room references meetup
  
  // console.log(JSON.stringify(meetup,['title','participants','place','number']));




  // now we use a replacer function for occupiedby:

  // let room = {
  //   number: 23
  // };
  
  // let meetup = {
  //   title: "Conference",
  //   participants: ["john", "ann"],
  //   place:room
  // };
  
  // room.occupiedBy = meetup; // room references meetup
  
  // console.log(JSON.stringify(meetup,function replacer(key ,value){
  //   console.log(`${key}: ${value}`)
  //   return (key =='occupiedBy')?  undefined:value;
  // }));





  // Formatting: space:



//   let room = {
//     number: 23,

//   class:'5th',
  
//    meetup : {
//     title: "Conference",
//     participants: ["john", "ann"],
//   }
// }
// console.log(JSON.stringify(room,null,4))




// Custom “toJSON”

// let room = {
//   number: 23,

// class:'5th',

// }


//  let meetup = {
//   title: "Conference",
//   date:new Date(),
//   participants: ["john", "ann"],
//   room
// }

// console.log(JSON.stringify(meetup))




// let room = {
//   number: 23,

// toJSON(){
//   return this.number;
// },

// }

//  let meetup = {
//   title: "Conference",
//   date:new Date(),
//   participants: ["john", "ann"],
//   room
// }
// console.log(JSON.stringify(room))//23

// console.log(JSON.stringify(meetup))




// JSON.parse:



// stringified array


// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log( numbers[3] ); // 1




// Or for nested objects:

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log( user.age[0] ); // 1



// console.log('hy boy')




// Using reviver:

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup=JSON.parse(str);
// // console.log(meetup.date.getdate())//error
// console.log(meetup.date)//2017-11-30T12:00:00.000Z



// correct approach:

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup=JSON.parse(str,function (key , value){
// if (key=='date')return new Date(value)
// return value;
// });
// console.log(meetup.date.getDate())


// for nested Objects 
// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
//  schedule=JSON.parse(schedule,function (key , value){
//   if (key=='date')return new Date(value)
//   return value;
//   });
//   console.log(schedule. meetups[0].date.getDate())
//   console.log(schedule. meetups[1].date.getDate())




  // task 1:


  // let user = {
  //   name: "John Smith",
  //   age: 35
  // };
  // let json=JSON.parse(JSON.stringify(user))
  // console.log(json.name)
  // console.log(json.age)



// task2

  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  