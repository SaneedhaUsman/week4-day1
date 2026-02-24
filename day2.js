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

function sum(...numbers){

    return numbers.reduce((total,num) => total + num ,0)
}

console.log(sum(1,2,3,4));