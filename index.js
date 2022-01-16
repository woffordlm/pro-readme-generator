// TODO: Include packages needed for this application
const  writeFile = require('./utils/generateMarkdown');
const copyFile = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs  = require("fs");
const generateMarkdown = require("./src/readme-template");

// TODO: Create an array of questions for user input
const questions = [
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

]
const projectQuestions =
[{

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
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL",
      "BSD",
      "Node",
    ],
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
    message: "What does the user need to know about using this repo? (Required)",
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
    message: "What does the user need to know about contributing to the repo? (Required)",
    validate: (contributeInput) => {
      if (contributeInput) {
        return true;
      } else {
        console.log("You need to enter information on repo");
        return false;
      }
    },
  },
];
const collaboratorQuestions = [
  {
    type: "input",
    name: "collaborator",
    message: "What is the name of a collaborator? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a collaborator!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "link",
    message: "Enter the GitHub link to the collaborator. (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("You need to enter a  GitHub link!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmAddCollab",
    message: "Would you like to enter another collaborator?",
    default: false,
  },
];
const promptUser = () => {
  return inquirer.prompt(questions);
};

const projectQuestions = () => {
  return inquirer
}
const promptCollaboration = (answersData) => {

  console.log(`
=================
Add another Collaborator!
=================
`);
  
  // If there's no 'collaborator' array property, create one
  if (!answersData.collaborator) {
    answersData.collaborator = [];
   
  }
  return inquirer.prompt(collaboratorQuestions).then((collabData) => {
    answersData.collaborator.push(collabData);
    if (collabData.confirmAddCollab) {
      return promptCollaboration(answersData);
    } else {
      return answersData;
    }
  });
};

promptUser()
  .then(promptCollaboration)
  .then (answersData => {
    // console.log('answersData:', answersData)
    return generateMarkdown(answersData)
    
  })
  .then(pageMarkDown => {
    console.log('pageMarkDown:', pageMarkDown)

    return writeFile(pageMarkDown);
  })
  .catch((err) => {
    console.log(err);
  });

  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // // .then(copyFileResponse => {
  // //   console.log(copyFileResponse);
  // // })