// This function will find the specific license badge and display it on the Readme file
function renderLicenseBadge(license) {
  if ( license !== "none" ) {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)` 
  } 
  //example 
//} else if (license == "LGPLv3") {
//licenseBadge += `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0`
//return ""
}


// In this function the license must be linked, if it is not, it will return an empty stringe
function renderLicenseLink(license) {
  if ( license !== "none ") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  return ""
}

// // In the README, using the answers provided, the license will be displayed, 
// if it is not displayed, it will not display anything by alerting the user with a message stating that .
function renderLicenseSection(license) {
  if ( license !== "none ") {
    return ` The project is licensed under: ${license} `;
  }
  return 'This project is not licensed ';
}

// Add the data shown to the user in the question group to the README sections.
//For example, other questions can be added such as title, usage, description, and ....
// The user will be taken to the corresponding README files when clicking on the links.

function generateMarkdown(Detail data) {
  return `
  
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Author](#author)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  The license link for ${data.license} ${renderLicenseLink(data.license)}
  
  ## Contributing
  
  To contribute to this project:
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Credits
  
  The following people/resources were consulted and/or utilized in the development of this application:
  ${data.credits}

//## Author
//${data.author}
  
  
  ## Questions
  Please contact us if you have any questions: 
  - ${data.questions} 
  - Email: ${data.email}
  - GitHub Username: ${data.username}
  - GitHub Profile: ${data.profile}
`;
}
module.exports = generateMarkdown;