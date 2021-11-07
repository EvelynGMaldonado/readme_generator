// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
const util = require('util');
const path = require('path');
// const licenseDescription = [];


// TODO: Create an array of questions for user input
const questions = [

        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Give a brief description about your application',
            name: 'description',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Write the steps to install the application',
            name: 'installation',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Write the instructions and examples for the correct use of your application',
            name: 'usage',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'list',
            message: 'Select the license of your application',
            choices: ['GNU GPLv3.0 License', 'MIT License', 'Apache-2.0 License', 'N/A'],
            name: 'license',
            validate: (value) => { if (value) { return true; } else { return "Select one to continue"; } },
        },
        {
            type: 'input',
            message: 'Mention the collaborators of this application or who are the creidts of this application for',
            name: 'credits',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Have you done any test to this applicaton? If yes, mention them and give example of how to run them',
            name: 'tests',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Enter you GitHub username',
            name: 'github',
            validate: (value) => { if (value) { return true; } else { return "Enter your github username to continue"; } },
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email',
            validate: (value) => { if (value) { return true; } else { return "Enter email to continue"; } },
        },
    ]



// TODO: Create a function to write README file
function writeInFile (fileName, data){
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(error);
        } else {
            console.log("Your README is being generated")
        }
    });
}
const writeFileAsync = util.promisify(writeInFile);

// TODO: Create a function to initialize app

const init = async() => {
    // try{
        inquirer.prompt(questions).then(({title, description, installation, usage, license, credits, tests, github, email}) => {
            // console.log("List of responses: ", responses);
            // collectLicenceData(licenceType);
            switch(license){
                case 'GNU GPLv3.0 License':
                    selectedLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)`;
                    break;
                case 'MIT License':
                    selectedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`;
                    break;
                case 'Apache-2.0 License':
                    selectedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
                    break;
                case 'N/A':
                    selectedLicense = `N/A`
                break;
            }
                    


            fs.writeFile('SampleREADME.md', generateMarkdown(title, description, installation, usage, license, credits, tests, github, email, selectedLicense), (err) => {
                if(err) throw err
            });
        });

};




init();
