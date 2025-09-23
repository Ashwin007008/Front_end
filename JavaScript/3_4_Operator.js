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

console.log("a:", a);
console.log("b:", b);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

////////////////////////////////////////////////////////////////


// pi = 3.14159; // This will cause an error because pi is a constant
// console.log("New value of pi:", pi); --- IGNORE ---
var c = 30; // var is function-scoped, avoid using it in modern JS
console.log("Value of c:", c);
c = 40; // reassigning var variable
console.log("New value of c:", c); //answer is 40