// let myage:string|number;
// myage=16;//narrowing
// console.log(myage)

// myage='dont know';
// console.log(myage)

// let newage=Math.random()>0.6?'khan':30;
// if (newage==='khan')
// {
// console.log(
//     newage.toUpperCase());
// }

// let a=5;
// console.log(typeof a)
// let age:number|'died'|string;
// age=90;
// age='died';
// age='unknown';
// age='living';
// console.log(age)


// // optional
// age?.toUpperCase();// thi check if its ok than it returns other wise its optional 


// class point{

//     x= 0;
// y=0;

// }
// const pt=new point()
// pt.x=9;
// pt.y=7;
// console.log(`${pt.x},${pt.y}`)



// class obj{
//     x:string;
//     constructor(){
//         this.x="hello"
//     }
// }
// let obj1 = new obj()
// console.log(obj1.x)



class Point {
    // s:string;
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string)
    constructor(xs: any, y?: any) {
      super(s)
    }
  }
  let obj=new Point("hello");
  console.log(obj.s)
  
