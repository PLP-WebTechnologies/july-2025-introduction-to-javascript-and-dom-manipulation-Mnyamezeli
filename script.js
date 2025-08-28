// Variable declarations
let visitorName = "Guest";
const year = new Date().getFullYear();
let messages = ["Enjoy exploring.", "If you have any questions", "Feel free to contact me."];

// Conditionals
if (year > 2023) {
    document.querySelector("footer p").textContent = `© ${year} My First Project`;
} else {
    document.querySelector("footer p").textContent = `© 2023 My First Project`;
}

// Greet visitor
function greetVisitor(name) {
    const heading = document.querySelector("h1");
    heading.textContent = `Hello, ${name}!`;
}

// Add message to About section
function addMessageToAbout(message) {
    const aboutSection = document.querySelector("#about");
    const msgElem = document.createElement("p");
    msgElem.textContent = message;
    aboutSection.appendChild(msgElem);
}

// Display all messages in About section
for (let i = 0; i < messages.length; i++) {
    addMessageToAbout(messages[i]);
}

// Highlight all section headers
const sectionHeaders = document.querySelectorAll("section h2");
sectionHeaders.forEach(function(header) {
    header.style.color = "blue";
    header.style.backgroundColor = "#e0f7fa";
});

// Prompt for visitor name and greet
visitorName = prompt("What is your name?") || visitorName;
greetVisitor(visitorName);
