'use strict';
const inquirer = require('inquirer');
const fs = require('fs');
// const axios = require('axios');
const generateMarkDown = require('./utils/generateMarkDown.js');

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project.',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Choose your license:',
        choices: [
            'Apache 2.0', 
            'BSD 2-Clause', 
            'BSD 3-Clause', 
            'GNU AGPLv3.0', 
            'GNU GPLv2.0', 
            'GNU GPLv3.0', 
            'MIT', 
            'Mozilla Public 2.0'
        ]
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Do you want to include notes for installation?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Include installation notes here:',
        when: function (answers) {
            return answers.confirmInstall;
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Do you want to include notes for usage?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Include usage notes here:',
        when: function (answers) {
            return answers.confirmUsage;
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Do you want to include any contribution notes?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Include contribution notes here:',
        when: function (answers) {
            return answers.confirmContribution;
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Do you want to include notes for testing?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Notes on testing here:',
        when: function (answers) {
            return answers.confirmTests;
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please list any questions here:',
    },
        
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Success!')
    );
}

const init = async () => {
    try {
        const data = await inquirer.prompt(questions);
        writeToFile('./output/README.md', generateMarkDown(data));
    } catch (err) {
        console.log(err);
    }
}

init();
