//___Set___

// const mySet = new Set();

// mySet.add(10);
// mySet.add(20);
// mySet.add(10);
// mySet.add(10);
// mySet.add(30);
// mySet.add(40);
// console.log(mySet);
// console.log(mySet.has(10));
// console.log(mySet.has(20));
// console.log(mySet.has(50));
// console.log(mySet.has(40));
// mySet.delete(40);
// console.log(mySet);
// console.log(mySet.size);
// console.log(mySet.clear);

// ___Loop through Set___

// for(let value of mySet){

//     console.log(value);
// }

// const numbers = [1, 2, 2, 3, 4, 4];
// const uniqueNumbers = [...new Set (numbers)];

// console.log(uniqueNumbers);

//__Track unique visitors___

// const visitors = new Set();

// visitors.add("user1");
// visitors.add("user2");
// visitors.add("user3");
// visitors.add("user4");

// console.log(visitors);

//___Map__

//  const myMap = new Map();

//  myMap.set("name" , "Amina");

//  myMap.set(1 , "Number key");

//  myMap.delete(1);
// console.log(myMap.size);
//  console.log(myMap.clear);

//  console.log(myMap);

// console.log(myMap.get(1));
// console.log(myMap.get("name"));

// console.log(myMap.has(1));
// console.log(myMap.has("name"));

// Loop through Map

// for (let [key,value] of myMap){

//     console.log(key , value);
// }

//___Real-World Use Cases of Map__
//Storing user data
// const users = new Map();

// users.set(101, {name : "Ali" , age : 22});

// console.log(users);

//Counting occurrences

// const words = ["Apple" , "Banana" , "orange", "Apple"];

// const count = new Map();

// for(let word of words){

//     count.set(word ,(count.get(word) || 0 ) + 1);
// }

// console.log(count);
// const numbers = [1,1,3,1,4,4,6,5,6,9,8,7,9];

// const uniqueNumbers = [...new Set(numbers)];



// const uniqueArray = Array.from(uniqueNumbers);

// console.log(uniqueArray);

// const numbers = [1, 2, 2, 3];

// const set = new Set(numbers); 
// const uniqueArray = Array.from(set);  // convert back to array

// console.log(uniqueArray);

// let arr = [{a:1} , {a:2} ,{a:1}];

// const set = [... new Set (arr)];

// console.log(set);

// Both objects remain!
// Because objects are compared by reference, not value.

// console.log(Math.random());

// let num = Math.random() * 10

// console.log(num);

// Random integer between 1 and 10

// let num = Math.floor(Math.random()*10) + 1;

// console.log(num);


//____Math.round()

//Rounds to nearest integer.

// console.log(Math.round(8.6));

// console.log(Math.round(45.4));

// console.log(Math.round(100.9));

//Math.floor()
//Always rounds down.

// console.log(Math.floor(5.9));
// console.log(Math.floor(9.7));
// console.log(Math.floor(4.3));
// console.log(Math.floor(6.2));

//Math.ceil()

//Always rounds up.

// console.log(Math.ceil(9.2));
// console.log(Math.ceil(12.1));
// console.log(Math.ceil(13.6));
// console.log(Math.ceil(14.9));

//Math.trunc()

//Removes decimal part (no rounding).

// console.log(Math.trunc(8.4));
// console.log(Math.trunc(8.6));
// console.log(Math.trunc(9.2));
// console.log(Math.trunc(9.9));

// console.log(Math.min(2,3,4,1,0,9));

// console.log(Math.max(2,3,4,1,0,9));

//With Arrays

//You must use spread operator:
// let numbers = [2,3,4,1,0,9,13,-9];
// console.log(Math.min(...numbers));

// console.log(Math.max(...numbers));

// const greet = function(name){

//     return "Hello " + name ;
// }

// console.log(greet("Amina"));

//____Passing a Function as an Argument (Callback)___

//Very common in real-world JavaScript.

// function processUserInput(name,callback){

//     return callback(name);
// }

// function greet(name){

//     return "Hi " + name;
// }

// console.log(processUserInput("Diya" , greet));

