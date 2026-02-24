// const add = function(a,b){

//     return a+b;
// }
// console.log(add(8,9));

// const subtract = (a,b) =>{

//     return a-b;
// }
// console.log(subtract(7,5));

// function person(){

//     this.age = 0;
//     setInterval(() => {

// this.age++;
// console.log(this.age);
//     },1000);
// }
// new person();

//___Anonymous Function as Callback___

// const numbers = [1,2,3,4,5];

// numbers.forEach(function(num){

//     console.log(num);
// });
//___Rest in Function Parameters__

// function sum(...numbers){

//     return numbers.reduce((total,num) => total + num ,0)
// }

// console.log(sum(1,2,3,4));

//_____Rest with Other Parameters_____

// function student(name, ...marks){

//     console.log(name);
//     console.log(marks);

// }

// student("Amina" , 95,87,100);

//___Spread with Arrays___

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];

// const combined = [...arr1,...arr2];

// console.log(combined);

//____Copying an Array__

// const fruits = ["apple","mango","strawberry"];

// const copy = [...fruits];

// console.log(copy);

//____Spread with Objects___

// const student = {name : "Ridha", age : 20};

// const updated = {...student , grade :"A"};
// console.log(updated);

// let name = "Amina"; //global scope, It can be accessed anywhere in the file.
// console.log(name)

// function greet(){

//     console.log(name);
// }
// greet();
// console.log(name);

// function test(){
//     let age = 20;
//     console.log(age);//function scope
// }

// test();
// console.log(age); //error





