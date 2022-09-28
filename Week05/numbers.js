// let billion = 17e9; 
// console.log(billion)   // 17000000000
// console.log(7.3e9)  //7300000000


// let mcs=1e-6
// console.log(mcs)

// console.log(1.23e-3===1.23/1000)// true


// ///Hex, binary and octal numbers

// console.log(0xff)
// let a= 0b1111;
// console.log(0b1111)//15
// let b=0o244;
// console.log(b)//164

// ///toString(base)
// let num=235;
// console.log(num.toString(16))
// console.log(num.toString(2))
// console.log(num.toString(36))
// console.log(123457..toString(36))


///Rounding

// let n=1.23456;
// console.log(Math.round(n*10000/10000))
// console.log(n.toFixed(4))


// let num = 1.23456;

// console.log( Math.round(num * 100) / 100 );


// ///Imprecise calculations:
// console.log(1e405)// so big value
// console.log(0.1+0.2===0.3)//false


// console.log(0.1+0.2)//0.30000000000000004

// let a=0.1;
// let b=0.2;
// let sum=a+b;

// console.log(sum)//0.30000000000000004

// console.log(sum.toFixed(2))//0.30
// console.log(+sum.toFixed(2))//0.3


// //another solution for some cases but not for all
// console.log( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
// console.log( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

///Tests: isFinite and isNaN:
// console.log(isNaN(NaN))//true
// console.log(isNaN('dshergr  '))//true
// console.log(isNaN('1234'))//false
// console.log(NaN===NaN)//false


// console.log( isFinite("15") ); // true
// console.log( isFinite("str") ); // false, because a special value: NaN
// console.log( isFinite(Infinity) ); // false, because a special value: Infinity
// console.log( isFinite(1234) ); // true



let num=+prompt('enter a number','');
console.log(isFinite(num))