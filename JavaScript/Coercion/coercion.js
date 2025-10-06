//Coercion
// It means converting a value from one type to another (like string to number)
// There are two types of type conversion in JavaScript:
// 1. Implicit (Coercion) - done automatically by JavaScript
// 2. Explicit (Casting) - done manually by the programmer

//////////////////////////////////////////////////////////////
//Type Coercion
let x = "100"; // string
let y = 50;    // number
// Implicit Type Conversion (Coercion)
let result1 = x + y; // "100" + 50 results in "10050" (string) , because + operator concatenates if one operand is string
console.log("Implicit Coercion (String + Number):", result1); // "10050"
console.log("Type of result1:", typeof result1); // string, because + operator concatenates if one operand is string

let result2 = x * y; // "100" * 50 results in 5000 (number) , because * operator converts string to number
console.log("Implicit Coercion (String * Number):", result2); // 5000
console.log("Type of result2:", typeof result2); // number, because * operator converts string to number

//////////////////////////////////////////////////////////////

// Explicit Type Conversion (Casting)
let a = "200";
let b = 30;

// String to Number
let explicitNum = Number(a);
let result3 = explicitNum + b; // 200 + 30 results in 230 (number)
console.log("Explicit Casting (String to Number):", result3); // 230
console.log("Type of result3:", typeof result3); // number