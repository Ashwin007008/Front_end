// ===========================================
// LESSON: JavaScript Event Handling
// ===========================================

console.log("🎉 Event Handling JavaScript Loaded!");

// ===========================================
// EXAMPLE 1: BUTTON CLICK EVENT
// ===========================================
console.log("Setting up Button Click Event...");

// Step 1: Get the button element
const button = document.getElementById('myButton'); 
const buttonMessage = document.getElementById('buttonMessage');

// Step 2: Add event listener
button.addEventListener('click', function() {
    console.log("Button was clicked!");
    buttonMessage.textContent = "🎉 Button clicked at " + new Date().toLocaleTimeString(); // Add timestamp
    buttonMessage.style.color = "green";
});

// ===========================================
// EXAMPLE 2: KEYBOARD EVENTS
// ===========================================
console.log("Setting up Keyboard Events...");

const input = document.getElementById('myInput');
const keyMessage = document.getElementById('keyMessage');

// Listen for keydown events
input.addEventListener('keydown', function(event) {
    console.log("Key pressed:", event.key);
    keyMessage.textContent = `You pressed: "${event.key}"`;
    keyMessage.style.color = "blue";
});

// Listen for input events (when text changes)
input.addEventListener('input', function(event) {
    const text = event.target.value;
    if (text.length > 0) {
        keyMessage.textContent = `You typed: "${text}" (${text.length} characters)`;
    }
});

// ===========================================
// EXAMPLE 3: MOUSE EVENTS
// ===========================================
console.log("Setting up Mouse Events...");

const hoverBox = document.getElementById('hoverBox');
const mouseMessage = document.getElementById('mouseMessage');

// Mouse enter event
hoverBox.addEventListener('mouseenter', function() {
    console.log("Mouse entered the box!");
    hoverBox.style.backgroundColor = 'yellow';
    hoverBox.textContent = 'Mouse is over me!';
    mouseMessage.textContent = "🐭 Mouse entered the box!";
    mouseMessage.style.color = "orange";
});

// Mouse leave event
hoverBox.addEventListener('mouseleave', function() {
    console.log("Mouse left the box!");
    hoverBox.style.backgroundColor = 'lightblue';
    hoverBox.textContent = 'Hover over me!';
    mouseMessage.textContent = "👋 Mouse left the box!";
    mouseMessage.style.color = "red";
});

// Click event on the box
hoverBox.addEventListener('click', function() {
    console.log("Box was clicked!");
    mouseMessage.textContent = "📦 Box was clicked!";
    mouseMessage.style.color = "purple";
});

// ===========================================
// EXAMPLE 4: FORM EVENTS
// ===========================================
console.log("Setting up Form Events...");

const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const formMessage = document.getElementById('formMessage');

// Form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from actually submitting
    
    const name = nameInput.value.trim();
    console.log("Form submitted with name:", name);
    
    if (name) {
        formMessage.textContent = `✅ Hello ${name}! Form submitted successfully!`;
        formMessage.style.color = "green";
        nameInput.value = ""; // Clear the input
    } else {
        formMessage.textContent = "❌ Please enter your name!";
        formMessage.style.color = "red";
    }
});


console.log(" All event listeners are set up and ready!");