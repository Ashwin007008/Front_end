//Data Types in JavaScript

// c,c++, java are static priority language
//JavaScript is a dynamic priority language

//In JavaScript, data types are divided into two main categories:
    //1. Primitive Data Types
    //2. Non-Primitive Data Types (also known as Reference Data Types)


//1. Primitive Data Types
//String
let aname = "Ashwin Samuel"; // String data type
console.log("Name:", aname);
console.log("Type of aname:", typeof aname); // typeof operator to check data type

//Number
let age = 18; // Number data type
console.log("Age:", age);
console.log("Type of age:", typeof age);

//Boolean
let isStudent = true; // Boolean data type
console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

//Undefined
let address; // Undefined data type (variable declared but not assigned)
console.log("Address:", address);
console.log("Type of address:", typeof address);

//Null
let phoneNumber = null; // Null data type (explicitly set to no value)
console.log("Phone Number:", phoneNumber);
console.log("Type of phoneNumber:", typeof phoneNumber); // Note: typeof null returns 'object' due to a quirk in JavaScript

//Symbol (ES6) since 2015
let uniqueId = Symbol("id"); // Symbol data type
console.log("Unique ID:", uniqueId);
console.log("Type of uniqueId:", typeof uniqueId);

/// Example for Symbol
const s1=Symbol(); //each symbol is unique, even if they have the same description
console.log(s1);
const s2=Symbol(); 
console.log(s2);
console.log(s1===s2); //false because each symbol is unique 

//BigInt (ES2020)
let bigNumber = BigInt(123456789012345678901234567890); // BigInt data type
console.log("Big Number:", bigNumber);
console.log("Type of bigNumber:", typeof bigNumber);

///////////////////////////////////////////////////////////////

//2. Non-Primitive Data Types
//Object
let student = {
    name: "Ashwin",
    age: 18,
    isEnrolled: true
};
console.log("Student Object:", student);
console.log("Type of student:", typeof student);

//Array
let scores = [95, 85, 76, 88, 92]; // Array is a special type of object
console.log("Scores Array:", scores);
console.log("Type of scores:", typeof scores);

//Function
function greet() {
    return "Hello, World!";
}
console.log("Greet Function:", greet());
console.log("Type of greet:", typeof greet);

//Demonstrating dynamic typing
let dynamicVar = "I am a string";
console.log("Dynamic Var:", dynamicVar);
console.log("Type of dynamicVar:", typeof dynamicVar);

dynamicVar = 42; // Now assigning a number
console.log("Dynamic Var:", dynamicVar);
console.log("Type of dynamicVar:", typeof dynamicVar);

dynamicVar = true; // Now assigning a boolean
console.log("Dynamic Var:", dynamicVar);
console.log("Type of dynamicVar:", typeof dynamicVar);

//Type Coercion
let result;

// String + Number = String
result = "The answer is " + 42;
console.log(result); // "The answer is 42"
console.log("Type of result:", typeof result);

// Number + Boolean = Number (true is coerced to 1)
result = 10 + true;
console.log(result); // 11
console.log("Type of result:", typeof result);

// String * Number = Number (string is coerced to number if possible)
result = "5" * 2;
console.log(result); // 10
console.log("Type of result:", typeof result);

// String - Number = Number (string is coerced to number if possible)
result = "10" - 3;
console.log(result); // 7
console.log("Type of result:", typeof result);

// Boolean + Boolean = Number (true is 1, false is 0)
result = true + false;
console.log(result); // 1
console.log("Type of result:", typeof result);

// Equality vs. Strict Equality
let a = 5; // Number
let b = "5"; // String

console.log("a == b:", a == b); // true (type coercion)
console.log("a === b:", a === b); // false (no type coercion)

console.log("a != b:", a != b); // false (type coercion)
console.log("a !== b:", a !== b); // true (no type coercion)

//Comparison Operators
console.log("a > 3:", a > 3); // true
console.log("a < 10:", a < 10); // true
console.log("a >= 5:", a >= 5); // true
console.log("a <= 4:", a <= 4); // false
console.log(a==b); //true, because == checks only value
console.log(a===b); //false, because === checks both value and type

//let and const are block-scoped
if (true) {
    let a = 30; // a is block-scoped
    const b = 40; // b is block-scoped
    console.log(a + b); // 70
}

    //Different from var, let and const are not accessible 
    // outside the block they are defined in
var i = 50;
console.log(i); // 50

var i = 60; // re-declaring var is allowed
console.log(i); // 60
    // this only can do it in Var
                               ///
    //let  & const cannot be re-declared in the same scope
let j = 70;
console.log(j); // 70

    //let j =70;
console.log(j); // Error: Identifier 'j' has already been declared
    // this cannot do it in let
            //we can change the const value inside the object or array
const student1 = { name: "Alice", age: 25 };
console.table(student1);
console.log(student1.name);
student1.name = "Bob"; // modifying property is allowed 






//////////////////////////////////////////////////////////////
//Type Conversion
let value = "123";
console.log("Original value:", value); // "123"

// String to Number
let numValue = Number(value);
console.log("String to Number:", numValue); // 123
console.log("Type of numValue:", typeof numValue); // number

let g = [1,2,3,4,5,6];
console.log(g);
console.log(typeof g); //object
let h=String(g);
console.log(h);
console.log(typeof h); //string

// Number to String
let strValue = String(numValue);
console.log("Number to String:", strValue); // "123"
console.log("Type of strValue:", typeof strValue); // string

// Boolean to Number
let boolValue = true;
let boolToNum = Number(boolValue);
console.log("Boolean to Number:", boolToNum); // 1
console.log("Type of boolToNum:", typeof boolToNum); // number

// Number to Boolean
let zeroValue = 0;
let numToBool = Boolean(zeroValue);
console.log("Number to Boolean:", numToBool); // false
console.log("Type of numToBool:", typeof numToBool); // boolean

// String to Boolean
let emptyString = "";
let strToBool = Boolean(emptyString);
console.log("String to Boolean:", strToBool); // false
console.log("Type of strToBool:", typeof strToBool); // boolean

// Boolean to String
let boolToStr = String(boolValue);
console.log("Boolean to String:", boolToStr); // "true"
console.log("Type of boolToStr:", typeof boolToStr); // string

h="Ashwin Samuel"
console.log(h.typeof); //undefined
console.log(typeof h); //string

//////////////////////////////////////////////////////////////
//Type Casting
let x = "100"; // string
let y = 50;    // number

// Implicit Type Conversion (Coercion)
let implicitResult = x + y; // '100' + 50 results in '10050' (string)
console.log("Implicit Result:", implicitResult);
console.log("Type of implicitResult:", typeof implicitResult); // string

// Explicit Type Conversion (Casting)
let explicitResult = Number(x) + y; // 100 + 50 results in 150 (number)
console.log("Explicit Result:", explicitResult);
console.log("Type of explicitResult:", typeof explicitResult); // number

//Another Example
let strNum = "200"; // string
let num = 100; // number

// Implicit Conversion
let implicitSum = strNum - num; // '200' - 100 results in 100 (number)
console.log("Implicit Sum:", implicitSum);
console.log("Type of implicitSum:", typeof implicitSum); // number  