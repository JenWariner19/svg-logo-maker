const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/svg.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for your logo.',
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want to use for your text? (You may enter a color name or a hexadecimal number)',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want to use for your logo?',
        choices: ['Circle', 'Triangle', 'Square'],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want to use for your shape? (You may enter a color name or a hexadecimal number)',
    },

];

function writeToFile(data) {
    fs.writeFile('logo.svg', data, (err) => {
        if(err) {
            console.error('Please provide the correct information.', err);
        } else {
            console.log('Generated logo.svg')
        }
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateSVG(responses)));
}

init();