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

let users=[
{id:1,name:'john'},
{'id':2,'name':'ali'},

{'id':3,'name':'aly'},
{'id':4,'name':'john'},

]
let user=users.find(item=>item.id==3)
console.log(user.name)//aly
 console.log(users.findIndex(user=>user.name=='john'))
 console.log(users.findLastIndex(user=>user.name=='john'))



