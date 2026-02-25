
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

// const bankAccount = {

//     balance : 1000,
//     deposit : function(amount){

//         this.balance += amount ;
//     },

//     withdraw : function(amount){
     
//         this.balance -= amount ;
//     }

// };

// bankAccount.deposit(500);

// console.log(bankAccount.balance);

// bankAccount.deposit(1000);
//  console.log(bankAccount.balance);

//  bankAccount.withdraw(500);
//  console.log(bankAccount.balance);

//  console.log(bankAccount);

// const numbers = [10, 20, 30];
 
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];

// console.log(a ,b, c);
// console.log(a );
// console.log(b);
// console.log( c);

//______destructuring____

// const numbers = [10, 20, 30];
//  const [a , b, c] = numbers;
//  console.log(a,b,c);
// const numbers = [10, 20, 30];
// const[a , ,c] = numbers;

// console.log(a,c);

//____Default Values___

// const numbers = [10];
// const[a , b = 40] = numbers;

// console.log(a,b);


//______Rest Operator with Array__

// const numbers = [1,2,3,4,5,6];

// const [first , ... rest] = numbers;

// console.log(first);

// console.log(rest);











