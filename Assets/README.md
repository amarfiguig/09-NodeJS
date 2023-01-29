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
