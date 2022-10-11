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
let count=['a','b','c'];
for(let key in count)
{
 
  console.log(key)
  console.log(count[key])

}


