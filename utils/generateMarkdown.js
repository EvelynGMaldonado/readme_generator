let licenseBadge = "";
let licenseLink = "";
let licenseSection = "";


function mylicenseBadge(license) {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license === "GNU GPLv3") {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (license === "Apache License 2.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  return licenseBadge;
};

function mylicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === "GNU GPLv3") {
    licenseLink = `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "Apache License 2.0") {
    licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  return licenseLink;
};

function mylicenseSection(license) {
  let licenseSection = "";
  
  if (license === "MIT") {
    licenseSection = `This application is covered under the MIT License. \n
    Copyright © 2021 Chaitra Srinivasamurthy.`;
  }
  if (license === "GNU GPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "Apache License 2.0") {
    licenseSection = `Licensed under the Apache License, Version 2.0 (the "License"). \n
    Copyright © 2021 Chaitra Srinivasamurthy;
    `;
  }
  return licenseSection;
}




function generateMarkdown(responses) {

  return `
  
  ${licenseBadge}

  # Proyect Name is: ${responses.title}
  
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
  ${mylicenseLink(responses.license[0])}
  ${mylicenseSection(responses.license[0])}
  ${licenseLink}
  ${licenseSection}
  
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
  

  // licenses 
  // apache 2.0
  // [![Minimum node.js version](https://badgen.net/npm/node/express)](https://npmjs.com/package/express)


  // Mit 
  // [![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)

  // gplv3 license

  // [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)