// 1. Variables & Constants

var oldVar = "I am BGM";
let name = "BGM"; // block-scoped, reassignable
const pi = 3.14159; // constant, cannot be reassigned

console.log("Name:", name, "Pi:", pi);

// 2. Data Types
let age = 21;             // number
let isStudent = true;     // boolean
let user = null;          // null
let notDefined;           // undefined
let bigNumber = 12345678901234567890n; // BigInt
let symbol = Symbol("id"); // Symbol
let person = { name: "BGM", age: 19 }; // object

console.log(typeof age, typeof name, typeof person);

// 3. Strings
let str1 = "Hello";
let str2 = 'World';
let str3 = `${str1} ${str2}!`; // Template literals
console.log(str3, str3.length, str3.toUpperCase());

// 4. Operators
let x = 10, y = 3;
console.log("Add:", x + y);
console.log("Subtract:", x - y);
console.log("Multiply:", x * y);
console.log("Divide:", x / y);
console.log("Modulus:", x % y);
console.log("Exponent:", x ** y);
console.log("Comparison:", x > y, x === 10);

// 5. Control Flow
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// Ternary
let vote = age >= 18 ? "Can vote" : "Cannot vote";
console.log(vote);

// 6. Loops
for (let i = 0; i < 3; i++) {
    console.log("For loop:", i);
}

let j = 0;
while (j < 3) {
    console.log("While loop:", j);
    j++;
}

let k = 0;
do {
    console.log("Do-While loop:", k);
    k++;
} while (k < 3);

// 7. Functions

function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("BGM"));

// Arrow Function
const add = (a, b) => a + b;
console.log("Sum:", add(5, 7));

// Default Parameter
function multiply(a, b = 2) {
    return a * b;
}
console.log("Multiply:", multiply(5));

// 8. Arrays

let nums = [1, 2, 3, 4, 5];
nums.push(6); // add at end
nums.pop();   // remove last
nums.unshift(0); // add at start
nums.shift(); // remove first
console.log("Array:", nums);

nums.forEach(n => console.log("ForEach:", n));
let squared = nums.map(n => n * n);
console.log("Squared:", squared);

// 9. Objects

let student = {
    name: "BGM",
    age: 21,
    greet: function() {
        console.log("Hi, I’m", this.name);
    }
};
student.greet();
console.log(student.name, student["age"]);

// 10. ES6 Features

// Destructuring
let { name: studentName, age: studentAge } = student;
console.log("Destructured:", studentName, studentAge);

// Spread operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("Spread:", arr2);

// Rest operator

function sumAll(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("SumAll:", sumAll(1,2,3,4,5));

// 11. Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I’m ${this.name}, age ${this.age}`);
    }
}
let p1 = new Person("BGM", 21);
p1.introduce();

// 12. Error Handling

try {
    let result = 10 / 0;
    if (!isFinite(result)) throw new Error("Division by zero");
} catch (error) {
    console.error("Caught Error:", error.message);
} finally {
    console.log("Finally block always runs");
}

// 13. Asynchronous JS

// setTimeout
setTimeout(() => console.log("This runs after 1 second"), 1000);

// Promise

let promise = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Promise resolved!") : reject("Promise rejected!");
});

promise.then(msg => console.log(msg))
       .catch(err => console.error(err));

// Async/Await

async function fetchData() {
    return "Data fetched!";
}
fetchData().then(console.log);

