// Arrow functions have no “this”"

// let group={
//     class:5,
//     list:["math","science","male"],
//     show(){
//         this.list.forEach(
//             li => console.log(this.class+" : "+li)
//         )
//     }
// }
// group.show()


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(function(student) {
        // Error: Cannot read property 'title' of undefined
        console.log(this.title + ': ' + student);
      });
    }
  };
  
  group.showList();// in this title = undefined