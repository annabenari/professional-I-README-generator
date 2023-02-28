const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?🎩",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?📧",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?📽️",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.📝",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?🪪",
    choices: ["MIT", "APACHE 2", "GPL", "None"],
  },
  {
    type: "input",
    name: "installations",
    message: "What command should be run to install dependencies?💻",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?🧑🏽‍💻",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for using this application?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize program
function init() {
  // Prompt the user for input using the inquirer package
  inquirer.prompt(questions).then((response) => {
    console.log("Generating README...");
    // Write the user's input to a README file using the generateMarkdown function
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

// Call the init function to start the program
init();
