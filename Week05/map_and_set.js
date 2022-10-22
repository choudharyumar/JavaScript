// simple program

// let map=new Map();
// map.set(1,'num1');
// map.set(2,'str');
// map.set(true,'boolean');
// console.log(map.get(1))
// console.log(map.get(2))
// console.log(map.get(true))
// console.log(map.size)



//Map can also use objects as keys.

// let obj=
// {name1:'umar',
// name2:'khizar'};

// let obj1=
// {name1:'uma',
// name2:'khizar'};

// let visits=new Map()

// visits.set(obj,12)
// visits.set(obj1,121)

// console.log(visits.get(obj))
// console.log(visits.get(obj1))

// console.log(obj.name1)


// let obj1={name:'umar'}
// let obj2={name:'khizar'}
// let visitsobj3={}
// visitsobj3[obj1]=123;
// visitsobj3[obj2]=1234;
// console.log(visitsobj3["[object Object]"])



// chaining


// let map=new Map();
// map.set(1,'num1')
// .set(2,'str')
// .set(true,'boolean')
// console.log(map.get(1))
// console.log(map.get(2))
// console.log(map.get(true))


// Iteration over Map:


// let fruitRecipe=new Map([['apple',123],
//     ['mango',1234],
//     ['orange',456]]);

//     for(let fruits of fruitRecipe.keys())
//     console.log(fruits)
//     for(let fruits of fruitRecipe.values())
//     console.log(fruits)
//     for(let fruits of fruitRecipe.entries())
//     console.log(fruits)

//     fruitRecipe.forEach((value,key,map)=>{console.log(`${value}: ${key}`)});



// Object.entries: Map from Object


// let map=new Map([['1','str'],
// [1,'num1'],
// [true,'boolean']]);
// console.log(map.get(1))
// console.log(map.get('1'))


// let obj={
//     name:'umar',
//     age:34
// };
// let map =new Map(Object.entries(obj));
// console.log(map.get('name'))
// console.log(map.get('age'))






// Object.fromEntries: Object from Map:

// let obj=Object.fromEntries([
//     ['name','umar'],
// ['name2','ali'],
// ['age',34],
// ]);
// console.log(obj.name)
// console.log(obj.name2)
// console.log(obj.age)



// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('age', 34);

// let obj=Object.fromEntries(map.entries());
// console.log(obj.banana)
// console.log(obj.age)


// Set

// let set=new Set();
// let obj1={name:'umar'};
// let obj2={name:'ali'};
// let obj3={name:'khi'};

// // vsitors visits and some object are use in muktiple times but not duplicate
// set.add(obj1);
// set.add(obj2);
// set.add(obj3);
// set.add(obj1);
// set.add(obj2);
// set.add(obj3);
// set.add(obj2);
// console.log(set.size)
// for (let key of set)
// {
//     console.log(key)
// }



// Iteration over Set



// let set=new Set(['orange','aPPLE','mango']);
// for (let key of set)
// console.log(key)
// set.forEach((value,valueagain,set) => {
// console.log(value);
// console.log(valueagain);


// });





//  different problems:
function unique(arr) {
    return Array.from( new Set(arr))
    /* your code */
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) );



















