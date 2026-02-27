//____we attach methods to the constructor’s prototype____

// function Person(name){

//     this.name = name;
// }

// Person.prototype.greet = function(){

//     console.log("Hi, I'm " + this.name);
// }

// const p1 = new Person("Rimi");
// const p2 = new Person ("Mini");

//  console.log(p1);
//  console.log(p2);
// p1.greet();
// p2.greet();

// function Person(name){
//     this.name = name;
// }
// const p1 = new Person("Amina");

// console.log(p1.__proto__ === Person.prototype);

// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);

//___Classes Also Use Prototypes___

// class User{

//     constructor(name , age){

//     this.name = name;
// this.age = age;
// }
// greet(){

//     console.log(this.name , this.age);
// }
// }

// const user1 = new User("Rinu ", 19);
// console.log(user1);
// user1.greet();


//_____Inheritance using extends__

// class Person{
// constructor(name , age , grade){

//     this.name = name;
//     this.age = age;
    
// }

// greet(){

//     console.log("Hi, I'm " + this.name);
// }


// }

// class Student extends  Person{

//     constructor(name , age , grade){

//         super(name , age);// Calls parent constructor
//         this.grade = grade;
//     }

//     study(){
//     console.log(this.name + " is studying in grade " + this.grade);
//     }
// }

// const student1 = new Student("Adhi" , 9 ,"A");

// console.log(student1);
// student1.study();

// student1.greet();

//____Method Overriding__

//Child class can override parent methods

// class Student extends Person{
 
// greet(){

//     console.log("Hello, I'm student " + this.name);
// }
// }

// const student1 = new Student("Afi" , 4 );
// student1.greet();

// console.log(student1);

// class Animal{

//     speak(){

//         console.log("Animal makes sound");
//     }
// }

// class Dog extends Animal{
//     speak(){
//     console.log("Dog barks");}
// }

// const d1 = new Dog();

// console.log(d1);

// d1.speak();
//Dog overrides speak() from Animal

//____Local Storage___

// localStorage.setItem("name" , "Ridha");

// let value = localStorage.getItem("name");

// console.log(value);

//____Session Storage___

// sessionStorage.setItem("user" , "Admin");

// let value = sessionStorage.getItem("user");

// console.log(value);

//___JSON Handling___

// const user = {
//   name: "Amina",
//   age: 22
// };

// localStorage.setItem("userData" , JSON.stringify(user));

// Now the object is stored as a string.

// let data = localStorage.getItem("userData");

// let parsedData = JSON.parse(data);

// console.log(parsedData.name);

// console.log(parsedData.age);


// let numbers = [1,2,3,4,5,6];

// localStorage.setItem("nums",JSON.stringify(numbers));

// let storedNums = JSON.parse(localStorage.getItem("nums"));

// console.log(storedNums[2]);
