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
// constructor(name , age){

//     this.name = name;
//     this.age = age;
// }

// greet(){

//     console.log("Hi, I'm " + this.name);
// }


// }

// class Student extends  Person{

//     constructor(name , age , grade){

//         super(name , age);
//         this.grade = grade;
//     }

//     study(){
//     console.log(this.name + " is studying in grade " + this.grade);
//     }
// }

// const student1 = new Student("Adhi" , 9 ,"A");

// console.log(student1);
// student1.study();