//Console log
console.log("Hello, World!");
console.log(123445)
console.log(18.23)
console.log(true)
console.log(false)
console.log(null)
console.log(undefined)
///////////////////////////////////////////////////////////////////////////////
console.log([1,2,3,4,5]) // Array
console.log("Hello" + " " + "World") // String concatenation
console.log({ name: "Ashwin", age: 16, city: "New York" }) // Object
console.table({ name: "Ashwin", age: 16, city: "New York" }) // Object in table format
console.error("This is an error message") // Error message
console.warn("This is a warning message") // Warning message
console.info("This is an info message") // Info message
 //console.clear() // Clears the console
console.time("Timer") // Starts a timer
for (let i = 0; i < 100000; i++) {
    // Some code to time
}
console.timeEnd("Timer") // Ends the timer and logs the time taken
///////////////////////////////////////////////////////////////////////////////////////
console.log("Hello".toUpperCase())
console.log("Hello".toLowerCase())
console.log("Hello".length)
console.log("Hello".charAt(0))
console.log("Hello".indexOf("e"))
console.log("Hello".substring(0, 2)) // from index 0 to 2 (not including 2)
console.log("Hello".slice(0, 2)) // from index 0 to 2 (not including 2)
console.log("Hello".includes("e")) // true
console.log("Hello".startsWith("H")) // true
console.log("Hello".endsWith("o")) // true
console.log(" Hello ".trim()) // removes whitespace from both ends
console.log("Hello".repeat(3)) // repeats the string 3 times
console.log("Hello".split("")) // splits the string into an array of characters
console.log("Hello World".split(" ")) // splits the string into an array of words   
console.log("Hello".replace("H", "J"))
///////////////////////////////////////////////////////////////////////////////////////
console.log(Math.PI) // prints the value of pi
console.log(Math.round(4.7)) // rounds to the nearest integer
console.log(Math.floor(4.7)) // rounds down
console.log(Math.ceil(4.3)) // rounds up
console.log(Math.sqrt(16)) // square root
console.log(Math.pow(2, 3)) // 2 raised to the power of 3
console.log(Math.abs(-5)) // absolute value
console.log(Math.min(1, 2, 3, 4, 5))
console.log(Math.max(1, 2, 3, 4, 5))
console.log(Math.random()) // generates a random number between 0 and 1
console.log([23,44,56,76,56,34])
console.log(123445)





//Conditional Statements
if (sum > 20) {
    console.log("Sum is greater than 20");
} else {
    console.log("Sum is 20 or less");
}

//Loops
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

//Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob"));

//Arrays
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log("Number:", num);
});

//Objects
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("Person:", person);
console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);

//Arrow Functions
const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(5, 4));

//Template Literals
let greeting = `Welcome, ${person.name}, to ${person.city}!`;
console.log(greeting);

//Try-Catch
try {
    let result = multiply(a, b);
    console.log("Result:", result);
} catch (error) {
    console.error("Error:", error);
}