function generateMarkDown(templateData) {
    console.log('templateData:', templateData)
    return`

    ## ${templateData.projectName}
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


   