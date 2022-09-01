//or operator:
/*
console.log(true||true);

console.log(true||false);
console.log(false||false);



//or operator:
let age=14;
let name= 'ali';
let name2='khizar';
let year = 2022;
if(age < 14|| name== 'khizar'||year==2023)
{
    console.log('ali is palying cric');
}

else 
{
    console.log('name is khizar but not playing cricket');
}



//and operator:
let age=14;
let name= 'ali';
let name2='khizar';
let year = 2022;
if((age== 14&& name== 'khizar')&&(year==2012))
{
    console.log('ali is palying cric');
}

else 
{
    console.log('name is khizar but not playing cricket');
}



// not operator

//console.log( Boolean("non-empty string") );

//console.log( console.log(1) && console.log(2) );
//console.log(2);

//console.log(1 && 2 && console.log(3));

//Write an if condition to check that age is NOT between 14 and 90 inclusively.

let age =13;
if(age >14  && age <90)
{
    console.log('age is  between the 14 and 90')
}
else
{
    console.log('age is not between the 14 and 90')
}
*/

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    console.log( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    console.log( 'Canceled' );
  } else {
    console.log( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
    console.log( 'Canceled' );
} else {
    console.log( "I don't know you" );
}










