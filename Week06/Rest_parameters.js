// rest parameters:
function ab(a,b){
   let sum=a+b;
   return sum;
}
console.log(ab(1,2,4,5,6))// it only gives the sum of first two



// For instance, to gather all arguments into array args:
function small(...args){
    let sum=0;
    for(let arg of args)
    sum+=arg;
    return sum
}
console.log(small(1))
console.log(small(1,2))
console.log(small(1,4))
console.log(small(1,5))



// Here the first two arguments go into variables and the rest go into titles array:
function s(firstname,lastname,...titles){
    console.log(firstname+' '+lastname)
    console.log(titles[0])
    console.log(titles[1])
    console.log(titles[2])


}
s('ali','hamza','class','school','friends')



// The “arguments” variable:


function abc()
{
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])

}
abc('hello','boy')
abc('he','was','jnab')



// Arrow functions do not have "arguments":

function f()
{
    let result=()=>console.log(arguments[0],arguments[1])
    result()
}
f(1234,2345);
f('ali')