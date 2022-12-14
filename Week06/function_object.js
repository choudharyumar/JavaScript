// function abc(){
//     console.log('hello ')

// }
// abc.lastname='ali'
// console.log(abc)
// console.log(abc.name)



// let user={
//      abc(){
//         console.log('hello ')
    
//     },
//     def(){
//         console.log('janab')
//     }
// }
// console.log(user.abc.name)
// console.log(user.def.name)
// user.abc.lastname='ali'
// console.log(user.abc.lastname)




// The “length” property:
// function a(a){}
// function b(a,b){}

// function c(a,b,c,...more){}
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)



// handler program:


// function ask(question,...hanndlers){
//     let isYes=confirm(question);
//     for (let handler of hanndlers){
//         if(handler.length==0){
//             if (isYes)handler()

           
//         }
//         else{
//             handler(isYes)
                
//         }
//     }
// }

// ask("Question?", () => console.log('You said yes'), result => console.log(result));



// Custom properties:


// function abc(){
//     abc.counter++;
// }
// abc.counter=0
// abc();
// abc();
// console.log(`${abc.counter} times`)



function makeCounter(){
    function counter(){
        return counter.count++
    }
     counter.count=0
    return counter;
}
let counter=makeCounter();
console.log(counter)
console.log(counter)
console.log(counter())
console.log(counter())








