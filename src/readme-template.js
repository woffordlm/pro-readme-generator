// this section creates the badge at the top of the readme
function renderLicenseBadge(projects) {
    if (!projects) {
        return '';
    } else
            return  `![badge](https://img.shields.io/badge/license-${projects.license[0]}-brightgreen)`;
}
    
// this section generates the markdown page with destructured data
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
//   this exports the page data
  module.exports = generateMarkDown;
  

  