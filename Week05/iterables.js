// Symbol.iterator

// let range = 
// {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]()
//     {
//         this.current=this.from;
//         return this;
//     },
//     next()
//     {
//         if(this.current<=this.to)
//         {
//             return {done:false,value:this.current++};
//         }
//         else
//         {
//             return{done:true};
//         }
//     } 

// };
// for(let num of range)
// console.log(num)



// String is iterable

// for(let key of 'test'){
//     console.log(key)
// }

// let str='𝒳😂'
// for(let char of str)
// {
//     console.log(char)
// }



// Calling an iterator explicitly

// let str='hello boy';
// let iterator=str[Symbol.iterator]();

//     while(true)
//     {
//         let result=iterator.next();
//         if(result.done)break;
        
//         console.log(result.value)
//     }


    // 



    // Iterables and array-likes



    // let arrayLike = { // has indexes and length => array-like
    //     0: "Hello",
    //     1: "World",
    //     length: 2
    //   };
      
    //   // Error (no Symbol.iterator)
    //   for (let item of arrayLike) {
    //     console.log(item)// error arraylike is not iterable
    //   }


    // Array.from

//    let arraylike={
//     0:'hell',
//     1:'geo',
//     length:2
//    };
//    let arr=Array.from(arraylike)
//    console.log(arr)


//    Here we use Array.from to turn a string into an array of characters:

// let str='xerox';
// let char=Array.from(str);
// console.log(char[0])
// console.log(char[1])
// console.log(char[2])
// console.log(char[3])
// console.log(char[4])
// console.log(char.length)

// let str = '𝒳😂';

// let chars = []; // Array.from internally does the same loop
// for (let char of str) {
//   chars.push(char);
// }

// console.log(chars);


// We can even build surrogate-aware slice on it:
function slice(str,start,end)
{
    return Array.from(str).slice(start,end).join('');
}
 str='𝒳😂𩷶';
console.log(slice(str,1,3))
console.log(str.slice(1,3))







