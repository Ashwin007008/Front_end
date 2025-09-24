// Helper function: multiply 4 × 5
function multiplyFourAndFive() { // Function to multiply 4 and 5
  return 4 * 5; // Returns the product of 4 and 5
}

// Helper function: sum from 1 to n using a loop
function calculateSum(n) { // Function to calculate sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) { // Loop from 1 to n
    sum += i; // Add i to sum
  }
  return sum; // Return the final sum
}

// Main function to process inputs
function processInputs() {  // Called when user clicks "Submit"
  const name = document.getElementById("name").value.trim();  // Step 1: Get user input, trim is to remove extra spaces
  const ageValue = document.getElementById("age").value.trim();
  const numberValue = document.getElementById("number").value.trim();
  const outputDiv = document.getElementById("output");

  let messages = []; // To store messages to show later

  // --- Input Validation ---
  if (!name || !ageValue || !numberValue) // Check if any field is empty
     {
    outputDiv.innerHTML = "Please fill in all fields correctly."; //outputDiv is the div where we show messages, we set its innerHTML to the error message
    return;
  }

  // Convert inputs to numbers
  const age = Number(ageValue); // Convert age to number
  const number = Number(numberValue); // Convert number to number

  // Check if age and number are valid numbers

  if (isNaN(age)) { // isNaN checks if the value is Not a Number
    outputDiv.innerHTML = "Please enter a valid age."; // Show error message for invalid age
    return; // Stop further processing
  }

  if (isNaN(number)) { // isNaN checks if the value is Not a Number
    outputDiv.innerHTML = "Please enter a valid number."; // Show error message for invalid number
    return; // Stop further processing
  }

  // --- Voting Eligibility ---
  if (age >= 18) {  // Check if age is 18 or older
    messages.push(`Hello ${name}, you are eligible to vote!`);  // Add eligibility message to messages array
  } else { // If age is less than 18
    messages.push(`Hello ${name}, you are not eligible to vote yet.`); // Add non-eligibility message to messages array
  }

  // --- Sum Calculation ---
  const sumResult = calculateSum(number); // Call the helper function to calculate sum
  messages.push(`Sum from 1 to ${number} is ${sumResult}`); // Add sum result message to messages array

  // --- Multiplication ---
  const multiplyResult = multiplyFourAndFive(); // Call the helper function to multiply 4 and 5
  messages.push(`Multiply 4 and 5 = ${multiplyResult}`); // Add multiplication result message to messages array

  // --- Display results ---
  outputDiv.innerHTML = messages.join("<br>"); // Join all messages with line breaks and display in outputDiv
}
