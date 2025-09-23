//Arithmetic operators
let a = 10;
let b = 3;

console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

//Comparison operators
console.log("a > b:", a > b); // Greater than
console.log("a < b:", a < b); // Less than
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to

//Logical operators
let x = true;
let y = false;

console.log("x && y:", x && y); // Logical AND
console.log("x || y:", x || y); // Logical OR
console.log("!x:", !x); // Logical NOT

//Increment and Decrement operators
let count = 5;

console.log("count++:", count++); // Post-increment
console.log("After post-increment, count:", count);
console.log("++count:", ++count); // Pre-increment
console.log("After pre-increment, count:", count);

//Assignment operators
let num = 10;

num += 5; // Equivalent to num = num + 5
console.log("num after += 5:", num);

num -= 3; // Equivalent to num = num - 3
console.log("num after -= 3:", num);

num *= 2; // Equivalent to num = num * 2
console.log("num after *= 2:", num);

num /= 4; // Equivalent to num = num / 4
console.log("num after /= 4:", num);

//conditional (ternary) operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote); // Error: Identifier 'j' has already been declared
console.log("j:", j);

//const k = 80;
//console.log(k); // 80
//k = 90; // Error: Assignment to constant variable

//exprIfTrue : exprIfFalse
let access = (age < 18) ? "No, cannot access" : "Yes, can access";
console.log("Access:", access); // Yes, can access

//typeof x
console.log("Type of a:", typeof a); // number
console.log("Type of x:", typeof x); // boolean
console.log("Type of 'Hello':", typeof "Hello"); // string
console.log("Type of {}:", typeof {}); // object
console.log("Type of undefined:", typeof undefined); // undefined
console.log("Type of null:", typeof null); // object (this is a known quirk in JavaScript)

// x instanceof Constructor
let date = new Date();
console.log("date instanceof Date:", date instanceof Date); // true, because date is an instance of Date
console.log("date instanceof Object:", date instanceof Object); // true, because all objects are instances of Object