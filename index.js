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
            choices: ['GNU GPLv3 License', 'MIT License', 'Apache License 2.0', 'N/A'],
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

// const collectLicenceData =  async (licenceType) => {
//     if (licenceType.license === 'Apache License 2.0') {
//         licenseDescription.push(`Licensed under the Apache License, Version 2.0 (the "License");
//         you may not use this file except in compliance with the License.`);
//     } if (licenceType.license === 'MIT License') {
//         licenseDescription.push(`Permission is hereby granted, free of charge, to any person obtaining a copy
//         of this software and associated documentation files (the "Software"), to deal
//         in the Software without restriction, including without limitation the rights
//         to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//         copies of the Software, and to permit persons to whom the Software is
//         furnished to do so, subject to the following conditions:
        
//         The above copyright notice and this permission notice shall be included in all
//         copies or substantial portions of the Software.`);
//     } if (licenceType === 'GNU GPLv3 License') {
//         licenseDescription.push(`Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
//         Everyone is permitted to copy and distribute verbatim copies
//         of this license document, but changing it is not allowed.`);
//     } else {
//         licenseDescription.push(`N/A`);
//     }

// }

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
        inquirer.prompt(questions).then((responses) => {
            console.log("List of responses: ", responses);
            // collectLicenceData(licenceType);

            fs.writeFile('SampleREADME.md', generateMarkdown(responses), (err) => {
                if(err) throw err
            });
        });

};




init();
