///////Function Declaration////////
function add(a, b) {
    return a + b;
}

///////Function Invocation////////
console.log(add(5, 10)); // Outputs: 15
console.log(add("Hello, ", "Squad 134")); // Outputs: Hello, Squad 134
console.log(add(5, " apples")); // Outputs: 5 apples

////////Calling function/////////
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

/////////Parameters and Arguments////////
function introduce(firstName, lastName) {
    return `My name is ${firstName} ${lastName}.`;
}
console.log(introduce("John", "Doe"));

/////////Returning Values////////
function square(num) {
    return num * num;
}
console.log(square(4)); // Outputs: 16

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Outputs: true
console.log(isEven(7)); // Outputs: false

/////////Function Expressions////////
const divide = function (a, b) {
    return a / b;
};
console.log(divide(20, 4)); // Outputs: 5

//////////////////////////////////////////////////////////// 
// Example of Function Expression assigned to a variable///
////////////////////////////////////////////////////////////

let square = function(number) {
  return number * number;
};

let result = square(5); // result will be 25

console.log(result); // Outputs: 25

///////Function Expression////////
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 10)); // Outputs: 50

///////Arrow Function////////
const subtract = (a, b) => a - b;

console.log(subtract(10, 5)); // Outputs: 5
