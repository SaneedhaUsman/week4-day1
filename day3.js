
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

// const student = {

//     name: "Amina",
//   age: 20
// }

//  console.log(student.name);
//  console.log(student.age);

// const name = student.name;
// const age = student.age;
// console.log(name);
// console.log(age);

//____Using Destructuring__

// const student = {
//   name: "Ameen",
//   age: 22
// };
// const {name , age} = student;

// console.log(name , age);

// const { name: studentName, age: studentAge } = student;

// console.log(studentAge);
// console.log(studentName);

//______default value___

// const student = {
//    name: "Ameen",
//    age: 22
//  };

//  const{ name , age , marks = 100} = student;

//  console.log(marks);

//  console.log(name , age , marks);

//____Rest Operator with Object___

// const student = {
//   name: "Amina",
//   age: 20,
//   marks: 85
// };

// const {name , ...others} = student;

// console.log(name);
// console.log(others);
// function greet({ name, age }) {
//   console.log("Hello " + name + ", age " + age);
// }

// const student = { name: "Amina", age: 20 };

// greet(student);

// function greet({name , age}){

//     console.log("Hello " + name + " , age " + age);

// }

// const student = {name : "Anu" , age : 24 , city : "Delhi" , marks : 95 , grade : "A"};

// greet(student);

// function createAccount(){

//     let balance = 0;

//     return function deposit(amount){

//         balance += amount;
//         console.log("Balance : " , balance );
//     };
// }

// const myAccount = createAccount();
// myAccount(500);
// myAccount(2000);

// function createCounter(){

//     let count = 0;

//     return function(){
//      count++;
//      console.log(count);

//     };
// }

// const counter = createCounter();

// counter();
// counter();
// counter();
// counter();
// counter();

//____data privacy using closures___

// Password is hidden.
// Nobody can access it directly.
// Only allowed functions can use it.


// function createUser(name){

//     let password = "12345";
//     return {

//         getName : function(){

//             return name;
//         }
//     };
// }

// const user = createUser("Arun");

// console.log(user.getName());
// console.log(user.password);

// function clickTracker(){

// let clicks = 0;

// return function(){

//     clicks++;
//     console.log("Clicked " , clicks ," times" );
// };

// }

// const tracker = clickTracker();

// tracker();
// tracker();
// tracker();
// tracker();



