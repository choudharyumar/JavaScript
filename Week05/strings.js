//sum of two numbers by using backticks
// function sum(a,b){
//     let num1=+prompt('the first number is ',a);
//     let num2=+prompt('the first number is ',b);

//     return num1+num2;

// }
// console.log(`the sum is  : ${sum()}`)



// use of back ticks
// let ru=`hun
// gin
// al`;
// console.log(ru)



/// special characters by using n:
// let list='guest\n ali\n haji\n';
// console.log(list);

// let list1='haji\numar';
// let list2=`haji
// umar`;
// console.log(list1===list2)

// console.log('here is ch\'umar')
// console.log( `My\n`.length ); // 3
// console.log('haji'.length);//4

///Accessing characters:

// let str= 'hy g sunoa'; // starting from zero
// console.log(str.at(9))//a
// console.log(str.at(-1))//a
// console.log(str.at(-4))//u
// console.log(str.at(3))//g
// console.log(str[-3])// undefined

//another method
// console.log(str[3])//g//this method is not app;icable for (-)


// for (let char of 'hello')
// {
//     console.log(char);
// }



//Strings are immutable:

// let str='Hi';
// str[0]='h';
// console.log(str[0])// does not change

// let str1='Hi';
// str1='h'+str1[1];
// console.log(str1)// hi


// let str2='hy g ali';
// str2='al'+str2[1];
// console.log(str2)// aly

// let str2='hy g ali';
// str2='al'+'gi'+str2[1];//algi
// console.log(str2)



///Changing the case:
// console.log('HOW ARE YOU'.toLocaleLowerCase())//how are you
// console.log('how are you'.toLocaleUpperCase())//HW ARE YOU
// console.log('HOW ARE YOU'[4].toLocaleLowerCase())//a
// console.log('how are you'.toLocaleUpperCase())//A




///str.indexOf:


// let str='widget';
// console.log(str.indexOf('widget'))
// console.log(str.indexOf('WIDGET'))
// console.log(str.indexOf('id'))


// let stri='helo how are you are';
// console.log(stri.indexOf('are',12))
// console.log(stri.indexOf('are'))



// another program:
// let str=' helo how are you, you are one';
// let target='are';
// let pos=-1;
// while((pos=str.indexOf(target,pos+1))!=-1){
//     console.log(pos)
// }

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }




// let str='helo g kasy ho jnab';
// if(str.indexOf('jnab')!=-1){
//     console.log('we find it')
// }


/////    includes, startsWith, endsWith:


// console.log('how are you?'.includes('you'))
// console.log('how are you?'.includes('yes'))

// console.log('umar hayat'.includes('mar'))
// console.log('umar hayat'.includes('mar',2))//F
// console.log('umar hayat'.includes('mar',1))//T



// console.log('helo jnab'.startsWith('hel'))
// console.log('helo jnab'.endsWith('nab'))



///Getting a substring
// let str='heavy raining';
// console.log(str.slice(2))
// console.log(str.slice(2,6))
// console.log(str.slice(-4,-1))


// console.log(str.substring(2,6))
// console.log(str.substring(6,2))
// console.log(str.substring(-5,-1))


// console.log(str.substr(2,6))
// console.log(str.substr(-5,3))



///Comparing strings


// console.log('z'>'Z')
// console.log('o****bchg'>'bsaisc')

// console.log( "Z".codePointAt(0) ); // 90
// console.log( "z".codePointAt(0) ); // 122
// console.log( "z".codePointAt(0).toString(16) );//7a

// console.log( String.fromCodePoint(90) ); // Z
// console.log( String.fromCodePoint(0x5a) )


/// program for all allphabets

// let str='';
// for(let i=0;i<=220;i++)
// {
//     str +=String.fromCodePoint(i);
// }
// console.log(str)


///Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// function checkSpam(str)
// {
//     let lowerstr= str.toLowerCase();
//     return lowerstr.includes('vaigra')||lowerstr.includes('xxxx');
// }
// console.log(checkSpam('buy vaigra now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam('this is innocent rabbit'))


// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

//   console.log(truncate("What I'd like to tell on this topic is:", 20));



// function extractCurrencyValue(str) 
// {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'))

let str = '$120';
console.log(str.slice(1))




