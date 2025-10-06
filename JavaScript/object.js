const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
//Accessing Values
console.log(person.name);     // John
console.log(person['age']);   // 
//Adding Properties
person.job = 'Engineer';
console.log(person); // { name: 'John', age: 30, city: 'New York', job: 'Engineer' }
//Modifying Properties or updating Values
person.age = 31;
console.log(person.age); // 31
//Deleting Properties
delete person.city;
console.log(person); // { name: 'John', age: 31, job: 'Engineer' }
//Checking Property Existence
console.log('name' in person); // true
console.log('city' in person); // false


// Output:
// name: John
// age: 31
// job: Engineer

