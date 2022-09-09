// //switch
// const age=19;
// switch (age) {
//     case 18:
//         console.log('you are 18')
//         break;
//         case 20:
//             console.log('you are 20')
//             break;
//             case 19:
//         console.log('you are 19')
//         break;
//     default:
//         console.log('none of your bussiness')
//        break;
// }


// // with pout break
// const age=19;
// switch (age) {
//     case 18:
//         console.log('you are 18')
//         //break;
//         case 20:
//             console.log('you are 20')
//             //break;
//             case 19:
//         console.log('you are 19')
//         //break;
//         case 191:
//             console.log('you are  not 19')

//     default:
//         console.log('none of your bussiness')
//       // break;
// }



// let a=3;
// let b=4;
// switch (+a) {
//     case b-1:
//         console.log("it works")
//         break;

//     default:
//         console.log("it does not work")
//         break;
// }

// let a=3;
// let b=4;
// switch (+b) {
//     case a+1:
//         console.log("it works")
//         break;

//     default:
//         console.log("it does not work")
//         break;
// }




// grouping the case:
let a=3;
let b=4;
switch (+b) {
    case 2:
    case a+1:
        console.log("gouping the case")

        console.log("it works")
        break;

    default:
        console.log("it does not work")
        break;
}