/*
var, let, const
1995 - JavaScript was created by Brendan Eich in just 10 days.
1997 - variable declaration using var
2015 - variable declaration using let and const (ES6)
ES6 - ECMAScript 2015 (6th edition of the ECMAScript Language Specification)
ES - ECMAScript
ES6 introduced many new features like arrow functions, template literals, destructuring, default parameters, classes, modules, promises, etc.
ES6 is widely supported in modern browsers and environments like Node.js.
ES6 made JavaScript more powerful and easier to work with, especially for large-scale applications.

*/
var x = 5; // function-scoped variable
var y = 10;
console.log(x + y); // 15
        //var means global variable
        //var is function-scoped
        //Avoid using var in modern JavaScript, prefer let and const instead

        //let and const are block-scoped
    //Scope
if (true) {
    var z = 20; // z is still accessible outside this block
}
console.log(z); // 20

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
const student = { name: "Alice", age: 25 };
console.table(student);
console.log(student.name);
student.name = "Bob"; // modifying property is allowed


                             ///
    // var and let can be updated (reassigned)
var m = 80;
console.log(m);     // 80
m = 90;     // reassigning var is allowed
console.log(m);     // 90
    // this can do it in Var & let

let n = 100;
console.log(n);     // 100
n = 110;    // reassigning let is allowed
console.log(n);     // 110

                             ///
            // const cannot be updated or re-declared
const p = 120;
console.log(p); // 120
//p = 130;      // Error: Assignment to constant variable
        // this cannot do it in const

//const p = 130; // Error: Identifier 'p' has already been declared
// this cannot do it in const

                             ///


////////////////////////////////////////////////////
let fname = "Ashwin";
const pi = 3.14; // constant variable
console.log("Name:", fname);
console.log("Value of pi:", pi);
//Variables         shift + alt + (Down arrow) to duplicate the line & total code
let a = 10;
let b = 20;
let sum = a + b;
let difference = b - a;
let product = a * b;
let quotient = b / a;
let remainder = b % a;
a++; // increment a by 1
b--; // decrement b by 1

// Output the results

console.log("a:", a);
console.log("b:", b);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Incremented a:", a);
console.log("Decremented b:", b);

////////////////////////////////////////////////////////////////


// pi = 3.14159; // This will cause an error because pi is a constant
// console.log("New value of pi:", pi); --- IGNORE ---
var c = 30; // var is function-scoped, avoid using it in modern JS
console.log("Value of c:", c);
c = 40; // reassigning var variable
console.log("New value of c:", c); //answer is 40

//Relational operators

console.log("a > b:", a > b); // Greater than
console.log("a < b:", a < b); // Less than
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to
console.log("a == b:", a == b); // Equality
console.log("a === b:", a === b); // Strict Equality
console.log("a != b:", a != b); // Inequality
console.log("a !== b:", a !== b); // Strict Inequality

//////////////////////////////////////////////////////////////////////
//Equality vs Strict Equality

//strict equality checks both value and type
//equality checks only value, performs type coercion if types are different

//Example:
let strNum = "100"; // string
let num = 100;      // number

console.log("strNum == num:", strNum == num); // true, because == checks only value
console.log("strNum === num:", strNum === num); // false, because === checks both value and type

//Example:
let boolTrue = true; // boolean
let numOne = 1;     // number

console.log("boolTrue == numOne:", boolTrue == numOne); // true, because == checks only value (true is coerced to 1)
console.log("boolTrue === numOne:", boolTrue === numOne); // false, because === checks both value and type

//Example:
let boolFalse = false; // boolean
let numZero = 0;      // number

console.log("boolFalse == numZero:", boolFalse == numZero); // true, because == checks only value (false is coerced to 0)
console.log("boolFalse === numZero:", boolFalse === numZero); // false, because === checks both value and type

let emptyStr = ""; // empty string
let numZero2 = 0;  // number
let falseBool = false; // boolean

console.log("emptyStr == numZero2:", emptyStr == numZero2); // true, because == checks only value ("" is coerced to 0)
console.log("emptyStr === numZero2:", emptyStr === numZero2); // false, because === checks both value and type

console.log("falseBool == numZero2:", falseBool == numZero2); // true, because == checks only value (false is coerced to 0)
console.log("falseBool === numZero2:", falseBool === numZero2); // false, because === checks both value and type
console.log("emptyStr == falseBool:", emptyStr == falseBool); // true, because == checks only value ("" is coerced to false)
console.log("emptyStr === falseBool:", emptyStr === falseBool); // false, because === checks both value and type

////////////////////////////////////////////////////////////////
//Special cases with null and undefined
//Example:
let nullVar = null;   // null
let undefinedVar;     // undefined

console.log("nullVar == undefinedVar:", nullVar == undefinedVar); // true, because == considers null and undefined equal
console.log("nullVar === undefinedVar:", nullVar === undefinedVar); // false, because === checks both value and type

//Example:
let str = "hello"; // string
let numVal = 0;   // number

console.log("str == numVal:", str == numVal); // false, because "hello" is not coerced to a number
console.log("str === numVal:", str === numVal); // false, because === checks both value and type

//Example:
let arr1 = [1, 2, 3]; // array
let arr2 = [1, 2, 3]; // another array with same elements

console.log("arr1 == arr2:", arr1 == arr2); // false, because arrays are reference types and have different references
console.log("arr1 === arr2:", arr1 === arr2); // false, because arrays are reference types and have different references

//Example:
let obj1 = { key: "value" }; // object
let obj2 = { key: "value" }; // another object with same properties

console.log("obj1 == obj2:", obj1 == obj2); // false, because objects are reference types and have different references
console.log("obj1 === obj2:", obj1 === obj2); // false, because objects are reference types and have different references

////////////////////////////////////////////////////////////////