
//_____Creating Object Using Object Literal___
// const person = {
//     name : "Amina" ,
//     age : 20 ,

//     greet : function(){
//         console.log("Hello, my name is  " + this.name);
//     }
// };

// console.log(person.name);
// person.greet();

//________Adding Methods After Object Creation_________

// const student ={

//     name: "Sara",
//   marks: 80
// };

// student.getResult = function(){

//     return this.marks >= 50 ? "pass" : "fail"
// };

// console.log(student.getResult());


//___ceating object using Constructor Function___

// function Person(name , age){

//     this.name = name;
//     this.age = age;
//    this.greet = function(){

//     console.log("Hi i am " + this.name);
//    };
// }

// const p1 = new Person("Diya" , 8);
// p1.greet();

//  console.log(p1);

//  const p2 = new Person("Nidha" , 13);
//  p2.greet();
//  console.log(p2);

//____ceating object using Class (Modern Way - ES6)___

// class User {

//     constructor(name , age){

//         this.name = name;
//         this.age = age;

//     }

//     greet(){

//         console.log("Hello " + this.name);
//     }
// }

// const user1 = new User ("Sanad" , 26);
// user1.greet();
// console.log(user1);

// let user2 = new User ("Mohamed" , 14);
// user2.greet();
// console.log(user2);
