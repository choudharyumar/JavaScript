/// slice in array

// let arr=[1,2,3,4,5]
// console.log(arr.slice(2))
// console.log(arr.slice(1,4))//starts from position 1 and end on position 3 not include positwion 4
// console.log(arr.slice(-5))
// console.log(arr.slice(-3))//starts fromnposition -3 and continues to end



///concat in arrAy:
// let arr=[1,2]
// console.log(arr.concat([3,4],[5,6]))//add elements in a array
// console.log(arr)



// splice
// let arr=[1,2,3,4,5]
// delete arr[2];
// console.log(arr)
// console.log(arr.length)


// to reamove a element from the array

// let arr=[1,2,3,4,5,6,7]
// arr.splice(0,3);
// console.log(arr)

// arr.splice(0,3,1,2,3,4)// remove and add elements
// console.log(arr)

// arr.splice(3,0,'count the numbers')
// console.log(arr)



// we return the array of removed elements
// let arr=[1,2,3,4,5,6]
// let removed=arr.splice(0,3);
// console.log(removed)
// console.log(arr)



// negative indexes are also allowed

// let arr=[1,2,3,4,5]
// arr.splice(-3,3,'a','b');
// console.log(arr)



// Iterate: forEach:

// ['a','b','c','d'].forEach((item,index,array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)


//     console.log(`${item} is at index ${index}  in ${array}`)

    
// });


// indexOf/lastIndexOf and includes

// let arr=[1,2,3,4,5,false];
// console.log(arr.indexOf(5))
// console.log(arr.indexOf(false))
// console.log(arr.indexOf(NaN))
// console.log(arr.includes(5))
// console.log(arr.includes(10))
// console.log(arr.includes(false))
// console.log(arr.includes(true))


// let arr1=[1,2,3,1]
// console.log(arr1.indexOf(1))
// console.log(arr1.lastIndexOf(1))




// find and findIndex/findLastIndex

// let users=[
// {id:1,name:'john'},
// {'id':2,'name':'ali'},

// {'id':3,'name':'aly'},
// {'id':4,'name':'john'},

// ]
// let user=users.find(item=>item.id==3)
// console.log(user.name)//aly
// console.log(users.findIndex(user=>user.name=='john'))
// console.log(users.findLastIndex(user=>user.name=='john'))



//filter

// let users=[
//     {id:1,name:'john'},
//     {'id':2,'name':'ali'},
    
//     {'id':3,'name':'aly'},
//     {'id':4,'name':'john'},
    
//     ]
// let user=users.filter(item=>item.id<10)
// console.log(user[1])
// console.log(user.length)



///// transform an array


// map

// let arr=['umar','khizar','ali'];
// let lengths=arr.map(item=>item.length)
// console.log(lengths)
//  lengths=arr.map(item=>item.length<4)
// console.log(lengths)



//sort()

// let arr=[1,2,3,11,21,33,15];
// arr.sort();
// console.log(arr)


// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
  
//   console.log(compareNumeric(2,4))//-1

//   let arr = [ 1, 2, 15 ];
  
//   arr.sort(compareNumeric);
  
//   console.log(arr); 


// best sorting algorithm


//   let arr=[1,2,3,11,21,33,15];
//   arr.sort();
//   console.log(arr)//[1, 11, 15, 2, 21, 3, 33]
//   let arr1=arr.sort((a,b) => a-b)
//   console.log(arr)//[1, 2, 3, 11, 15, 21, 33]



// loal comapare

// let arr=['umar','Österreich','khizar','dilber']
// console.log(arr.sort((a,b)=>a>b?1:-1))
// console.log(arr.sort((a,b)=>a.localeCompare (b)))

// reverse
// let arr=[1,2,3,4,5];
// arr.reverse();
// console.log(arr)


// split and join

// let names='ali,umar,njia'
// let arr=names.split(',');
// for(let name of arr){
//     console.log(`a message to ${name}`)// message to all name
// }


// let arr1='ali,umar,njia'.split(',',2);// show two names
// console.log(arr1)



// split
// let arr2='haji';
// console.log(arr2.split(''))//h,a,j,i


// //join
// let arr3=['haji','mukhtar','dil'];
// let str=arr3.join(',')
// console.log(str)


// reduce/reduce eight
// let arr1=[2,3,4,5,6]
// console.log(arr1.reduce((sum,count)=>sum+count))


// Most methods support “thisArg”
// let army={
//     minage:18,
//     maxage:27,
//     canjoin(user){
//         return user.age >= this.minage && user.age<this.maxage;
//     },
// };
// let users=[
// {age:17},
// {age:19},

// {age:20},

// {age:2},

// {age:28},

// ]
// let soldier=users.filter(army.canjoin,army)
// console.log(soldier[0])
// console.log(soldier[1])
// console.log(soldier[2])
// console.log(soldier[3])


// //differnet programs



// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.


// let str='background-color,list-style-image,-webkit-transition';
// function camelize(str)
// {
//     return str
//     .split('-')
//     .map(
//         (word,index)=>index==0? word:word[0].toUpperCase()+word.slice(1)
//         )
//         .join('');
// }

// console.log(camelize('background-color'));
// console.log(camelize("list-style-image")) ;
// console.log(camelize("-webkit-transition"));



// /filter range program:


// let arr=[5,3,8,1];
// function filterRange(arr, a, b)
// {
//     return arr.filter(item => (a <= item && item <= b));
    
// }

// let filtered=filterRange(arr,1,5);
// console.log(filtered)
// console.log(arr)



// Filter range "in place"


// function filterRangeInPlace(arr, a, b)
// {
//     for(let i=0;i<arr.length;i++)
//     {

//         let val=arr[i];

//     if(val<a||val>b)
//     {
//         arr.splice(i,1);
//         i--;
//     }
// }
    
// }
// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);
// console.log(arr)


// Sort in decreasing order

// let arr1=[5, 2, 1, -10, 8];
// arr1.sort((a,b)=>b-a);
// console.log(arr1)

// Copy and sort array


// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted()
// {
//     return arr.slice().sort();
// }
// let sorted=copySorted()
// console.log (sorted)
// console.log(arr)


// Map to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];
// let names =users.map(item=>item.name);
// console.log(names)

// Map to objects


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped =users.map(user=>(
//     {fullname:`${user.name}${user.surname}`,
//     id: user.id}
//     ));
// console.log(usersMapped[0].id)
// console.log(usersMapped[0].fullname)


// Sort users by age

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

//  function sortByAge(arr){
//     return arr.sort((a,b)=>a.age-b.age);
//  }
//  sortByAge(arr);
//  console.log(arr[0].name);
//  console.log(arr[1].name);

//  console.log(arr[2].name);





// sort users by name


//  let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

//  function sortByAge(arr){
//     return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
//  }
//  sortByAge(arr);
//  console.log(arr[0].name);
//  console.log(arr[1].name);

//  console.log(arr[2].name);


//  shuffle the array

// function shuffle(arr) {
//     arr.sort(() => Math.random() - 0.5);
//   }
  
//   let arr = [1, 2, 3];
//   shuffle(arr);
//   console.log(arr);
  



//   Get average age
  // function getAverageAge(users) {
  //   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  // }
  
  // let john = { name: "John", age: 25 };
  // let pete = { name: "Pete", age: 30 };
  // let mary = { name: "Mary", age: 29 };
  
  // let arr = [ john, pete, mary ];
  
  // console.log( getAverageAge(arr) ); // 28



  // Filter unique array members

  function unique(arr) {
    let result =[];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) );



