const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is your gitHub repository?',
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
        type: 'checkbox',
        name: 'license',
        message: 'Choose your license:',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0',
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application? What modules are needed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of this application.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List the contributors for this project, if any.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Comment on testing here:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please list any questions here:',
    },
        
])