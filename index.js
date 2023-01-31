// the packages needed for this application 
// All at the bottom are packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Internal modules
const generateMarkdown = require("./Assets/generateMarkdown.js");

// Requirements Create a set of questions to enter user data consisting of questions about the description 
// and installation of the project, methods of use, with directions and special instructions, and this requires entering the e-mail address.
const questions = [
    {
        type: "input",
        name: "title",
        message: "Can you enter the title for your README document please"
    },
    {
        type: "input",
        name: "description",
        message: "Can you enter your project's description please"
    },
    {
        type: "input",
        name: "url",
        message: "Can you enter the url of your deployed project please"
    },
    {
        type: "input",
        name: "usage",
        message: "Can you provide examples for use",
    },
    {
        type: "input",
        name: "installation",
        message: "Can you enter instructions for installing your project please"
    },
//{
//type: "input",
//name: "usage",
//message: "can you enter instructions for using your project please"},
    
    //const questions = [
    {
        type: "list",
        name: "license",
        message: "Please choose the approprite license for this project",
        choices: [
            { 
                name: "None",
                value: "None",
            },
            {
                name: "Apache License 2.0",
                value: "Apache License 2.0",
            },
            
            {
                name:"Microsoft License",
                value:"Microsoft License",
            },
            
            {
                name: "Creative Commons Zero v1.0 Universal",
                value:"Creative Commons Zero v1.0 Universal",
            },
            {
                name: "GNU General Public License v2.0",
                value: "GNU General Public License v2.0",
            },
            {
                name: "MIT License",
                value: "MIT License",
            },

        ]},

//type: "checkbox",
//name: "license",
//message: "Select license.",
//choices: ["Apache-2.0", "BSD 3", "BSD 2", "MIT", "GPLv3", "LGPLv3", "MPL 2.0", "CDDL 1.0"]},
    {
        type: "input",
        name: "Participant",
        message: "Who is/are the participant of the project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Are there tests this project?",
    },
    {
        type: "input",
        name: "username",
        message: "Can you provide your github username please",
    },
    {
        type: "input",
        name: "email",
        message: "Can you provide your email address please",
    },
];


// file name and data passed 
// Create a function to write README 
function writeToFile(fileName, data) {
// this will write the file using 
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('All done Success file!'))
    };
    
//Add a specific question to the user to run the routing function by displaying a question to the operator
function init() {
    inquirer
    .prompt(questions)
    //Through the specified function at the bottom, the answers are added
    .then((answers) => {
        const readMedata = generateMarkdown(answers);
    // At the bottom, after writing and selecting the file, the specified function is called.
        writeToFile("./Assets/README.md", readMedata);
    });    
}

// Function call to initialize app
init();
