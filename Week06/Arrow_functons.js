// Arrow functions have no “this”"

let group={
    class:5,
    list:["math","science","male"],
    show(){
        this.list.forEach(
            li => console.log(this.class+" : "+li)
        )
    }
}
group.show()


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(function(student) {
//         // Error: Cannot read property 'title' of undefined
//         console.log(this.title + ': ' + student);
//       });
//     }
//   };
  
//   group.showList();// in this title = undefined



  // Arrow functions have no arguments:


  // function defer(f, ms) {
  //   return function() {
  //     setTimeout(() => f.apply(this, arguments), ms);
  //   };
  // }
  
  // function sayHi(who) {
  //   console.log('Hello, ' + who);
  // }
  
  // let sayHiDeferred = defer(sayHi, 2000);
  // sayHiDeferred("John"); // Hello, John after 2 seconds



  // function ab(a,ms){
  //   return function(){
  //     setTimeout(()=>a.apply(this,arguments),ms)
  //   }
  // }
  // function bc(who){
  //   console.log("hy "+who)
  // }
  // let cd=ab(bc,2000)
  // cd("khizar")


  console.log("hello")