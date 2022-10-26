
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


// let [one,two,three,four] =new Set([1,2,3,4]);
// console.log(one);
// console.log(two)

// console.log(three)
//console.log(four)
//


// Assign to anything at the left-side:

// let user={};
//  [user.firstname,user.surname,user.title]='umar hayat biography'.split(' ');
//  console.log(user.firstname)
//  console.log(user.surname)
//  console.log(user.title)


//  Looping with .entries():

let obj={name:'umar',age:34};

for (let [key,value] of Object.entries(obj))

console.log(`${key}:${value}`)



// another method:

// let user=new Map();
// user.set('name','umar')
// .set('age','34')
// for (let [key ,value] of user)
// {
//     console.log(`${key}:${value}`)
// }


// // Swap variables trick:
// let guest='ali';
// let admin='umar';
// [guest,admin]=[admin,guest];
// console.log(`${guest}:${admin}`);// swaping varialbles



// The rest ‘…’:


// let [name,age,...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name)
// console.log(age)
// console.log(rest[0])
// console.log(rest[1])
//console.log(rest.length)


// using  ...title

let [name,age,...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name)
console.log(age)
console.log(...titles)








