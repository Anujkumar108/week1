// async/await syntax
function kiratAsyncFunction () {
    let p = new Promise(function(resolve) {
        resolve('hi there!');
    });
    return p;
}

async function main() {
    const value = await kiratAsyncFunction();
    console.log(value);
}

main();


// console.log("hi there");

// setTimeout(function() {
//     console.log("from inside async fn")
// }, 5000);

// let a = 0; 
// for(let i= 0; i<10; i++) {
//     a = a + 1;
// }
// console.log(a);



// console.log("hi there");

// setTimeout(function() {
//     console.log("from inside async fn")
// }, 5000);

// let a = 0; for(let i= 0; i<10; i++) {
//     a = a + 1;
// }
// console.log(a);

// fs.readfile - to read a file from your filesystem
// Fetch = to fetch some data from an API endpoint

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
});

console.log("hi there");


//even if you are single threaded (brain can do only one thing at a time),
//  you can do things parallely by Deligating you can also context switch between tasks if need be (the net time to do both the things would still be the same)
// net amount of time task to do a task can be decreased by doing these two things (deligating and context switching)
// can js deligate ? can js context switch ?

//Untill now, we,ve only seen synchronus functions

// asynchronus func --- 
// function findSum(n) {
//     let ans = 0;
//     for(let i = 0; i<n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100() {
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000) // calling an async func
// console.log("hello world");


// function findIndexOf(str, target) {
//     console.log("Orginal String:", str);
//     console.log("Index:", str.indexOf(target));   
// }

// findIndexOf("hello World", "World");


//callback is a function to passed as an arguement to another function
// function square(a) {
//     return a * a
// }

// function sumOfSomething(a, b, fn) {
//     const val1 = fn(a);
//     const val2 = fn(b);
//     return val1 + val2;
// }

// sumOfSomething(a, b, square)




// function square(n) {
//     return n * n;
// }

// function cube(n) {
//     return n * n * n;
// }

// function sumofSquares(a,b) {
//     const val1 = square(a);
//     const val2 = square(b);

//     return val1 + val2;
// }

// function sumofcube(a,b) {
//     const val1 = cube(a);
//     const val2 = cube(b);

//     return val1 + val2
// }

// console.log(sumofcube(2,2));