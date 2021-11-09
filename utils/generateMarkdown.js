function generateMarkdown(title, description, installation, usage, license, credits, tests, github, email, selectedLicense) {

  return `
  
  ${selectedLicense}


  # Proyect Name is: ${title}
  
  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Credits](#credits)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  <h2 id="description"> Project Description </h2>
  ${description}
  
  ## Installation 
  ${installation}
  
  ## Usage 
  ${usage}
  
  ## License 
  This application is covered under the ${license}.

  ## Credits 
  ${credits}
  
  ## Tests 
  ${tests}
  
  ## Questions 
  If you have any questions, please contact me to the information listed below.
  
  * Email: ${email}
  * GitHub: [${github}](https://github.com/${github})
  
  `
  }
  module.exports = generateMarkdown;

  // let licenseBadge = "";
// let licenseLink = "";
// let licenseSection = "";



// function mylicenseBadge(license) {
//   let licenseBadge = "";
//   if (license === "MIT") {
//     licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
//   }
//   if (license === "GNU GPLv3") {
//     licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
//   }
//   if (license === "Apache License 2.0") {
//     licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
//   }
//   return licenseBadge;
// };

// function mylicenseLink(license) {
//   let licenseLink = "";
//   if (license === "MIT") {
//     licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
//   }
//   if (license === "GNU GPLv3") {
//     licenseLink = `[GNU GPL v3](https://opensource.org/licenses/gpl-3.0)`;
//   }
//   if (license === "Apache License 2.0") {
//     licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
//   }
//   return licenseLink;
// };

// function mylicenseSection(license) {
//   let licenseSection = "";
  
//   if (license === "MIT") {
//     licenseSection = `This application is covered under the MIT License. \n
//     Copyright © 2021 Chaitra Srinivasamurthy.`;
//   }
//   if (license === "GNU GPLv3") {
//     licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
//     Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
//   }
//   if (license === "Apache License 2.0") {
//     licenseSection = `Licensed under the Apache License, Version 2.0 (the "License"). \n
//     Copyright © 2021 Chaitra Srinivasamurthy;
//     `;
//   }
//   return licenseSection;
// }

