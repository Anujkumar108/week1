// String,num,booleans
let firstName = "anuj";
let age = 19;
let isAdult = true;

console.log("the name of the man is" + firstName + " and his age is " + age + " and he is an adult" + isAdult)

// if/else
let firstName = "anuj";
let age = 19;
let isMarried = false;

if(isMarried == true) {
  console.log(firstName + " is not married");
} else {
  console.log(firstName + " is married");
}

// Loops
for (let i = 0; i <= 1000; i++) {
  console.log(i);
}

1.	Arrays
2.	Objects

// Write a program prints all the even numbers in an array ??

const ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

for(let i = 0; i < ages.length; i++) {
  if(ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

// Write a program to print the biggest number in an arrays ??

let numbers = [3, 7, 2, 9, 5];
console.log(Math.max(...numbers));
// •	Math.max() finds the largest number from a list of numbers.
// •	The spread operator ... expands the array numbers so that each element is passed to Math.max as an individual argument.
// •	console.log then prints the largest number in the array.


// write a program that prints all the male people’s first name given a complex object ??

const allUsers = [{
  firstName: "ANUJ",
  gender: "male"
}, {
  firstName: "akshay",
  gender: "male",
}, {
  firstName: "amrit",
  gender: "female"
}]

for(let i = 0; i < allUsers.length; i++){
  if(allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstName"])
  }
}

// Write a program that reverses all the elements of an array ??

let array = [1, 2, 3, 4, 5];
array.reverse();

console.log(array);  // Output: [5, 4, 3, 2, 1]
  
// Functions let you :- 
// 1.	Abstract out logic in your program
// 2.	Take arguments as an input
// 3.	Return a value as an output
// 4.	You can think of them as an independent program that is supposed to do something given an input
// 5.	Functions CAN take other functions as input – this will confuse you (callbacks).

// Function 
function sum(a,b) {
return a+b;  
}	

console.log(sum(2,7));

// lets write some code :-
// 1)	Write a function that finds the sum of two numbers ?

function findSum(a,b) {
  return  a + b;
}

const value = findSum(91, 12)
const value2 = findSum(12, 12)

console.log(value);
console.log(value2);

// 2)	Write another function displays the result in a pretty format ?

function calculateArithmetic(a,b, type) {
  if(type == "sum") {
    return a+b;
  }
  if(type == "minus") {
    return a-b;
  }
}
const value = calculateArithmetic(1,2,"sum");
console.log(value);
//callbacks
function calculateArithmetic(a,b,arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a,b);
  return ans;
}
function sum(a,b) {
  return a + b;
}
const value = calculateArithmetic(18, 70, sum);
console.log(value);

// set time out
function om () {
console.log("jai shri ram");
}
setTimeout(om, 3000);
// set interval
function sayHello() {
  console.log("Hello, world!");
}
// Run `sayHello` every 1000 milliseconds (1 second)
const intervalId = setInterval(sayHello, 1000);
// Stops the interval after 5 seconds
setTimeout(() => clearInterval(intervalId), 5000);

// another program
function calculateArithmetic(a,b, arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a,b)
  return ans;
}
function sum(a,b) {
  return a + b;
}
const value = calculateArithmetic(2,3,sum);
console.log(value);
