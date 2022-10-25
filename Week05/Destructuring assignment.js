
// Array destructuring:


// let arr=['umar','hayat'];
// let [firstname,surname]=arr;
// console.log(firstname);
// console.log(surname);


// we can work with variables instead of array members

// let [firstname,surname]='umar hayat'.split(' ')
// console.log(firstname);
// console.log(surname);


// “Destructuring” does not mean “destructive”.


// let arr=['umar','hayat'];
// let firstname=arr[0];
// let surname=arr[1];
// console.log(firstname);
// console.log(surname);



// Ignore elements using commas:

// let [firstname,surname,,title,district]=['waqar','asif','chowkazam','biography','layyah'];
// console.log(title);
// console.log(district);



// Works with any iterable on the right-side:


// let [a,b,c]='abc';//['a','b','c']
// console.log(a)
// console.log(b)
// console.log(c)


let [one,two,three,four] =new Set([1,2,3,4]);
console.log(one);
console.log(two)

console.log(three)



// Assign to anything at the left-side:

let user={};
 [user.firstname,user.surname,user.title]='umar hayat biography'.split(' ');
 console.log(user.firstname)
 console.log(user.surname)
 console.log(user.title)





console.log(four)

