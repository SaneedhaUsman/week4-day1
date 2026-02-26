//__________________.forEach()_______

// . used to print , update UI , or modify something outside

// const numbers = [1,2,3];
// numbers.forEach(function (num){

//     console.log(num);
// });


// const numbers = [10,20,30,40,50,60];

// numbers.forEach(function(number,index){

//     console.log(index,number);
// });

//  numbers.forEach((number,index) => console.log(index,number) );

// numbers.forEach((num) => console.log(num));

//_______.map()____

// const numbers = [1,2,3,4];

// const doubled = numbers.map(function (num){

//     return num * 2;

// })

// console.log (doubled);

//_____.filter()____

// const numbers = [1,2,3,4,5];

// const even = numbers.filter(function (num){

// return num % 2 === 0 ;

// })

// console.log (even);

//______.reduce______

// const numbers = [1,2,3,4,5]

// const total = numbers.reduce(function (acc , num){

//     return acc + num;
// },0);
// console.log(total);

//________ Sorting with Compare Functions in JavaScript_____

// const numbers = [10, 5, 100, 25]

// numbers.sort();
// console.log(numbers);
//_________ascending order__________
// let numbers = [10, 5, 100, 25];

// numbers.sort(function(a , b){

//     return a-b ;
// });
// console.log(numbers);

// let numbers = [20 ,3, 56, 78, 23, 54, 1, 0 ,100];

// numbers.sort((a ,b) => a-b);

//  console.log(numbers);
//____________descending order________
// let numbers = [10, 5, 100, 25];
// numbers.sort(function(a,b){

// return b-a ;

// });

// console.log(numbers);

// let numbers = [20 ,3, 56, 78, 23, 54, 1, 0 ,100];

// numbers.sort((a,b) => b-a);
// console.log(numbers);

// let names = ["amina" , "Aysha" , "hudha" , "Sulaikha"];

// names.sort();
// console.log(names);
//__________Case-Insensitive String Sorting__________

// let names = ["amina" , "Aysha" , "hudha" , "Sulaikha"];
// names.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()));

// console.log(names);
//  let students = [{ name: "Amina", age: 22 },
//   { name: "Hudha", age: 19 },
//   { name: "Ayesha", age: 25 }];

//  students.sort((a,b) => a.age - b.age);

//   students.sort(function(a,b){
//     return a.age - b.age ;
//   })

// students.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

//  console.log(students);

//________for...in_________

// const numbers = [10,20,30];

// for(let index in numbers){

//     console.log(index);
// }

// for(let index in numbers){

//     console.log(numbers[index]);
// }

// const person = {
//     name: "Amina",
//   age: 22
// }

// for(let key in person){

//     console.log(key,person[key]);
// }

//____for...of_________

// const numbers = [20,40,60,80,100];

// for(let value of numbers){

//     console.log(value);
// }

// let name = "javascript";

// for(let char of name){

//     console.log(char);
// }

//_________Method Chaining for Data Transformation (JavaScript)______

//__Without mehod Chaining__

// const numbers = [1,2,3,4,5,6];

// const even = numbers.filter((num) => num % 2 === 0);

// const doubled = even.map((num) => num * 2);

// console.log(doubled);

//___with method chaining___

// const numbers = [5,10,15,20,25,30];

// const result = numbers

// .filter((num) => num % 2 === 0)
// .map((num) => num * 2) ;

// console.log(result);


// const students = [{ name: "Amina", marks: 85 },
//   { name: "Aisha", marks: 45 },
//   { name: "Hudha", marks: 70 },
//   { name: "Sara", marks: 30 }];

//   const result = students
//   .filter((student) => student.marks >= 50)
//   .map((student) => student.name);

//   console.log(result);

// const students = [{ name: "Amina", marks: 85 },
//   { name: "Aisha", marks: 45 },
//   { name: "Hudha", marks: 70 },
//   { name: "Sara", marks: 30 }];

//   const total = students

//   .filter((student) => student.marks >= 50)
//   .reduce((sum , student) => sum + student.marks , 0);

//   console.log(total);

// const users = [{ name: "Ali", age: 17 },
//   { name: "Sara", age: 25 },
//   { name: "John", age: 30 },
//   { name: "Maya", age: 15 }];

//   const adultNames = users

//   .filter((user) => user.age >= 18)
//   .map((user) => user.name.toUpperCase())
//   .sort();

//   console.log(adultNames);
