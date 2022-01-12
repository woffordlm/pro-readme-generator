// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
    inquirer.prompt([
     
       {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a project description!");
            return false;
          }
        },
      },
      {
          type: "input",
          name: "installation",
          message: "Provide a description of how to install the project (Required)",
          validate: (installationInput) => {
            if (installationInput) {
              return true;
            } else {
              console.log("You need to enter a project description!");
              return false;
            }
          },
        },  
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




promptUser()
    // .then(readMeData => {
    //     return generateReadMe(readMeData)
    // })


// once data is collected  a readme fild shoudld be generated with the following sections
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHen i choose a license a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
