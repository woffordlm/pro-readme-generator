function generateMarkDown(templateData) {
    // destructure page data by section
//    console.log('templatedata:', templatedata)
// const { projects, about, ...header } = templateData;
    return 
    `  ## ${templateData.projectName}
       # Description
        ${templateData.description}
       # Table of Contents
       #Installation
       #Usage
       #Credits
       ${templateData.userName}
       ${templateData.email}
       ${templateData.projectName}
       ${templateData.description}
       ${templateData.license}
       ${templateData.dependenciesCommand}
       ${templateData.testCommand}
       ${templateData.repoInfo}
       ${templateData.contributionInfo}
       `
}
module.exports = generateMarkDown