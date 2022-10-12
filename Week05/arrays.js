/// declaration of array:
// let fruit=['orange','red','green'];
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])

// now we can replace an element
// fruit[1]='pear';
// fruit[2]='apple';
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])
// console.log(fruit.length)


/// array can store different type  of elements

// let arr=['apple',{name:'umar'},true,function (){console.log('hello')}];
// console.log(arr[0])
// console.log(arr[1].name)
// arr[3]();


///trailing comma;
// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum"
//   ];
//   console.log(fruits[2])


  //Get last elements with “at”

//   let fruit=['apple','juice','banana'];
//   console.log(fruit[fruit.length-1])
// // in shorter form we can use this
// console.log(fruit.at(-1))



// Methods pop/push, shift/unshift:
// let str=['a','b','c'];
// console.log(str.pop());///pop
// console.log(str);
// str.push('c');      //push
// console.log(str)


// let str=['a','b','c'];
// console.log(str.shift());///shift
// console.log(str);
// str.unshift('a');      //unshift
// console.log(str)

// Methods push and unshift can add multiple elements at once:
// let str =['a'];
// str.push('b','c','d');
// str.unshift(1,2,3);
// console.log(str)



// internals:

// let arr=['a']
// let arr1=arr;
// console.log(arr===arr1)
// arr1.push('b')
// console.log(arr1)
// arr1[9999]=5;
// arr1[5]='haji'
// console.log(arr1[9999])
// console.log(arr1[5])
// console.log(arr1)


///Loops:

// let arr=['a','b','c'];
// for(let i=0;i<arr.length;i++)
// {
//   console.log(i)
// }





// another way to use loof that was for..of loop
// let count=['a','b','c'];
// for(let counts of count)
// {
//   console.log(counts)
// }



/// we use it like objects 
// let count=['a','b','c'];
// for(let key in count)
// {
 
//   console.log(key)
//   console.log(count[key])

// }



// /// array are different in lengths:
// let arr=[];
// arr[1223]='apple';
// console.log(arr.length)

// let arr=[1,2,3,4,5]
// arr.length=2;
// console.log(arr)
// arr.length=1;
// console.log(arr[0])

// new array

// let arr= new Array('apple','haji');
// console.log(arr[1])



// let arr=new Array(3)
// console.log(arr.length)//3
// console.log(arr)//empty


// Multidimensional arrays

// let arr=[
//   [1,3,5],
//   [1,2,3],
//   [1,8,9]
// ]
// console.log(arr[2][2])
// console.log(arr[1][0])



///toString

// let arr=[1,3,2]
// console.log(String(arr)==='1,3,2')

// console.log([]+1)
// console.log([1]+1)
// console.log(['1,2']+1)


// when a string add in something than it also converts it to string


// console.log(''+1)
// console.log('1'+1)
// console.log('1,213'+1)



// Don’t compare arrays with ==

console.log([]==[])
console.log([2]==[2])
console.log([]===[])
console.log(0==[])







