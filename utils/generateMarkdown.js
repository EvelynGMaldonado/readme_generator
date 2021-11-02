function generateMarkdown(responses) {

  return `# Proyect Name is: ${responses.title}
  
  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Credits](#credits)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  <h2 id="description"> Project Description </h2>
  ${responses.description}
  
  ## Installation 
  ${responses.installation}
  
  ## Usage 
  ${responses.usage}
  
  ## License 
  ${responses.license}
  
  ## Credits 
  ${responses.credits}
  
  ## Tests 
  ${responses.tests}
  
  ## Questions 
  If you have any questions, please contact me to the information listed below.
  
  *Email: ${responses.email}
  *GitHub: [${responses.github}](https://github.com/${responses.github})
  
  `
  }
  module.exports = generateMarkdown;
  