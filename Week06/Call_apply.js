
// Call:

// let user={
//     Name:"umar",
//     Age:22,
//     Designation:"Computer Engineers",
//     Details:function(){
//         console.log(this.Name)
//     }
// }
// user.Details()


// let user2={
//     Name:"khizar",
//     Age:23,
//     Designation:"Doctor",
  
// }
// // function borrowing
// user.Details.call(user2)//We approch the properties of the the object user2 by calling the function of presernt in user 



// (2):

// let user={
//     Name:"umar",
//     Age:22,
//     Designation:"Computer Engineers",
//     Details:function(){
//         console.log(this.Name)
//     }
// }
// let Details=function(){//this function is present outside the objecct user
//     console.log(this.Name)
// }
// // Details.call(user)// we use this by call



// let user2={
//     Name:"khizar",
//     Age:23,
//     Designation:"Doctor",
  
// }
// Details.call(user2)//we also use this by call


// (3)

// we also use parameter in function:

// let user={
//     Name:"umar",
//     Age:22,
//     Designation:"Computer Engineers",
    
// }
// let Details=function(city,country){//this function is present outside the objecct user
//     console.log(this.Name+" "+city+" "+country)
// }
// Details.call(user,"chowkazam","Pakistan")// we use this by call


// Apply:

// let user={
//     Name:"umar",
//     Age:22,
//     Designation:"Computer Engineers",
    
// }
// let Details=function(a,b,c){//this function is present outside the objecct user
//      console.log(this.Name+" "+a+" "+b+" "+c+1)

// }
// Details.apply(user,["janb","good","heavy"])



// we use call

// let user={
//     Name:"umar",
//     Age:22,
//     Designation:"Computer Engineers",
    
// }
// let Details=function(a,b,c){//this function is present outside the objecct user
//     // console.log(this.Name+" "+a+" "+b)
//      console.log(this.Name+" "+a +" "+b+c+1)

// }
// Details.call(user,["janb","good","heavy"])




// bind:

// let user={
//     Name:"umar",
//     Age:22,
//     Designation:"Computer Engineers",
    
// }
// let Details=function(a){//this function is present outside the objecct user
//      console.log(this.Name+" "+a)

// }
// let c=Details.bind(user,["janb","good","heavy"])
//  c()// in this we make a copy of a function by using the bind  we use it in future 


