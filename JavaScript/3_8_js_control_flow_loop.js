//what is loop in js
//loop is used to repeat a block of code multiple times until a certain condition is met.
//It will use in website development
//eg: image slider, form validation, data fetching, etc
//Loops help to automate repetitive tasks and make the code more efficient and concise.
//Types of loops in JavaScript
//1.for loop
//2.while loop
//3.do...while loop
//4.for...in loop
//5.for...of loop


//for loop
for(let i=0;i<5;i++){
    console.log("for loop iteration:",i);
}

//while loop
let j=0;
while(j<5){
    console.log("while loop iteration:",j);
    j++;
}

//do...while loop
let k=0;
do{
    console.log("do...while loop iteration:",k);
    k++;
}while(k<5);



////////Additional Examples////////

//for...in loop
let person={
    name:"John",
    age:30,
    city:"New York"
};
for(let key in person){
    console.log(key+":",person[key]);
}

//for...of loop
let colors=["red","green","blue"];
for(let color of colors){
    console.log("color:",color);
}

//break and continue statements
//break statement is used to exit a loop or switch statement before it has completed all its iterations.
//continue statement is used to skip the current iteration of a loop and move on to the next iteration.

//break statement
for(let i=0;i<10;i++){
    if(i===5){
        break; //exit the loop when i is 5
    }
    console.log("break statement iteration:",i);
}

//continue statement
for(let i=0;i<10;i++){
    if(i%2===0){
        continue; //skip even numbers
    }
    console.log("continue statement iteration:",i);
}

//Nested loops
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(`Nested loop iteration: i=${i}, j=${j}`);
    }
}

//Looping through arrays
let fruits=["apple","banana","cherry"];
for(let fruit of fruits){
    console.log("fruit:",fruit);
}

//Looping through strings
let str="Hello";
for(let char of str){
    console.log("char:",char);
}

//Looping through numbers with forEach
let numbers=[1,2,3,4,5];
numbers.forEach(num=>{
    console.log("number:",num);
});

//Using map to create a new array
let squaredNumbers=numbers.map(num=>num*num);
console.log("squaredNumbers:",squaredNumbers);

//Using filter to create a new array with even numbers
let evenNumbers=numbers.filter(num=>num%2===0);
console.log("evenNumbers:",evenNumbers);

//Using reduce to sum all numbers
let sum=numbers.reduce((acc,num)=>acc+num,0);
console.log("sum:",sum);

//Using for...of with entries() to get index and value
for(let [index,value] of fruits.entries()){
    console.log(`Index: ${index}, Value: ${value}`);
}

//Using for...in with arrays (not recommended)
for(let index in fruits){
    console.log(`Index: ${index}, Value: ${fruits[index]}`);
}

//Using while loop to iterate until a condition is met
let count=0;
while(count<3){
    console.log("while loop count:",count);
    count++;
}

//Using do...while loop to ensure the loop runs at least once
let num=0;
do{
    console.log("do...while loop num:",num);
    num++;
}while(num<3);

//Using break in nested loops
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        if(j===2){
            break; //exit inner loop when j is 2
        }
        console.log(`Nested loop with break: i=${i}, j=${j}`);
    }
}

//Using continue in nested loops
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        if(j===2){
            continue; //skip when j is 2
        }
        console.log(`Nested loop with continue: i=${i}, j=${j}`);
    }
}

//Using loops with objects
let car={
    make:"Toyota",
    model:"Camry",
    year:2020
};
for(let key in car){
    console.log(`${key}: ${car[key]}`);
}

//Using loops with Sets
let mySet=new Set(["a","b","c"]);
for(let item of mySet){
    console.log("Set item:",item);
}

//Using loops with Maps
let myMap=new Map();
myMap.set("name","Alice");
myMap.set("age",25);
for(let [key,value] of myMap){
    console.log(`${key}: ${value}`);
}

//Using loops with generators
function* idGenerator(){
    let id=1;
    while(true){
        yield id++;
    }
}
let gen=idGenerator();
console.log("Generator id:",gen.next().value); //1
console.log("Generator id:",gen.next().value); //2
console.log("Generator id:",gen.next().value); //3

//Using loops with async/await (ES8)
async function fetchData(){
    let urls=[
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3"
    ];
    for(let url of urls){
        let response=await fetch(url);
        let data=await response.json();
        console.log("Fetched data:",data);
    }
}
fetchData();

//Using loops with Promises
let promiseUrls=[
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5",
    "https://jsonplaceholder.typicode.com/posts/6"
];
promiseUrls.forEach(url=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>console.log("Promise fetched data:",data))
    .catch(error=>console.error("Error fetching data:",error));
});

//Using loops with recursion
function recursiveLoop(n){
    if(n<=0) return;
    console.log("Recursive loop n:",n);
    recursiveLoop(n-1);
}
recursiveLoop(3);

//Using loops with array methods
let mixedNumbers=[1,2,3,4,5];
let doubledNumbers=mixedNumbers.map(num=>num*2);
console.log("Doubled numbers:",doubledNumbers);

let filteredNumbers=mixedNumbers.filter(num=>num>2);
console.log("Filtered numbers:",filteredNumbers);

let total=mixedNumbers.reduce((acc,num)=>acc+num,0);
console.log("Total of mixed numbers:",total);

//Using loops with destructuring
let points=[
    [1,2],
    [3,4],
    [5,6]
];
for(let [x,y] of points){
    console.log(`Point x: ${x}, y: ${y}`);
}

//Using loops with default parameters
function logMessages(messages=["Hello","World"]){
    for(let message of messages){
        console.log("Log message:",message);
    }
}
logMessages();
logMessages(["Hi","There"]);

//Using loops with rest parameters
function sumAll(...nums){
    let total=0;
    for(let num of nums){
        total+=num;
    }
    return total;
}
console.log("Sum all numbers:",sumAll(1,2,3,4,5));

//Using loops with spread operator
let arr1=[1,2,3];
let arr2=[4,5,6];
let combined=[...arr1,...arr2];
console.log("Combined array:",combined);

//Using loops with conditional statements
if(sum>20){
    console.log("Sum is greater than 20");
}else{
    console.log("Sum is 20 or less");
}
