// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projects) {
    return `![badge](https://img.shields.io/badge/license-${projects.license[0]}-brightgreen)`;
  }
  
  
  function generateMarkDown(templateData) {
      const { userName, email, collaboration, projects } = templateData;
      return `
  <h1> ${projects.projectName}</h1> \n
  ${renderLicenseBadge(projects)}
  # Description 
  ${projects.description}
  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  To install dependencies run the following command <br>
  <code>${projects.dependenciesCommand}</code>
  <br>
  ## Usage
  ${projects.repoInfo}
  ## Contributing
  ${collaboration[0].collaborator} Github: [${collaboration[0].link}](https://github.com/${collaboration[0].link})
  <br>
  ## License
  This project is protected under the ${projects.license[0]} license
  <br>
  ## Tests
  To run tests on application run the following command <br>
  <code>${projects.testCommand}</code>
  ## Questions
  ✉️ If you have any questions feel free to contact me at : ${email}<br>
  Or you can find more of my work at my Github : [${userName}](https://github.com/${userName})<br />
  <br />`
  }
  module.exports = generateMarkDown;
  
  // function renderLicenseSection(license) {
  //     if (!license) {
  //         return '';
  //       }
  //     return` #License: ${renderLicenseBadge}${}`
  // }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // function renderLicenseLink(license) {
  //     if (!license) {
  //         return '';
  //       }
  //       return
  // }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // function renderLicenseLink(license) {
  //     if (!license) {
  //         return '';
  //       }
  //       return
  // }


  