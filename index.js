// packages needed for this application
// imported files
const writeFile = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./src/readme-template");

// this function runs through questions prompted by using the inquierer package and returns answers
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your github user name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You need to enter a github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("You need to enter an email address!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAddCollab",
      message: "Would you like to add collaborations?",
      default: true,
    },
  ]);
};
// this function prompts project questions prompted by the inquerer package and returns answers
const promptProjectQuestions = (answersData) => {
 

  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your projects name? (Required)",
      validate: (projectNameInput) => {
        if (projectNameInput) {
          return true;
        } else {
          console.log("You need to enter a project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter an email address!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message:
        "WHat kind of license should your project have?(Check all that apply)",
      choices: ["MIT", "Apache 2.0", "GPL", "BSD", "None"],
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          console.log("You need to choose a license!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "dependenciesCommand",
      message: "What command should be run to install dependencies? (Required)",
      default: "npm i",
      validate: (commandInput) => {
        if (commandInput) {
          return true;
        } else {
          console.log("You chose npm i!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "testCommand",
      message: "What command should be run to run tests? (Required)",
      default: "npm test",
      validate: (testInput) => {
        if (testInput) {
          return true;
        } else {
          console.log("you chose npm test");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "repoInfo",
      message:
        "What does the user need to know about using this repo? (Required)",
      validate: (repoInput) => {
        if (repoInput) {
          return true;
        } else {
          console.log("You need to enter information on repo");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributionInfo",
      message:
        "What does the user need to know about contributing to the repo? (Required)",
      validate: (contributeInput) => {
        if (contributeInput) {
          return true;
        } else {
          console.log("You need to enter information on repo");
          return false;
        }
      },
    },
  ])
  .then((projectData) => {
    answersData.projects=projectData;
    console.log('answersData', answersData)
    return answersData
  });
  
};
// this function prompts collaboration questions by the inquerer package and returns answers
const promptCollaboration = (answersData) => {
  // console.log(answersData);
  if (!answersData.collaboration) {
    answersData.collaboration = [];
  }
  if (answersData.confirmAddCollab === false) {
    return answersData;
  } else
    return inquirer
      .prompt([
        {
          type: "input",
          name: "collaborator",
          message: "What is the name of a collaborator? ",
          validate: (collabInput) => {
            if (collabInput) {
              return true;
            } else {
              console.log("You need to enter a name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "link",
          message: "Enter the GitHub link to the collaborator. (Required)",
          validate: (link) => {
            if (link) {
              return true;
            } else {
              console.log("You need to enter a link!");
              return false;
            }
          },
        },
        {
          type: "confirm",
          name: "confirmAddCollabAgain",
          message: "Would you like to enter another collaborator?",
          default: false,
        },
      ])
      .then((confirmationData) => {
        answersData.collaboration.push(confirmationData);
        if (confirmationData.confirmAddCollabAgain) {
          return promptCollaboration(answersData);
        } else {
          return answersData;
        }
      });
};

// this fucntion sets up the initialization of the applicaiton
function init() {
  promptUser()
  .then(promptCollaboration)
  .then(promptProjectQuestions)
  .then((answersData) => {
    return generateMarkdown(answersData);
  })
  .then((pageMarkDown) => {
    console.log("pageMarkDown:", pageMarkDown);
    return writeFile(pageMarkDown);
  })
  .catch((err) => {
    console.log(err);
  });

    

} 
// this calls the init function
init();