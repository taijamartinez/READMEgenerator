// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {   type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {   type: 'input',
        name: 'Description',
        message: 'Describe your project: '
    },
    {   type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?'
    },
    {   type: 'input',
        name: 'Usage',
        message: 'How do you use your project?'
    },
    {   type: 'input',
        name: 'Contributing',
        message: 'How can others contribute?'
    },
    {   type: 'input',
        name: 'Tests',
        message: 'What are the test instructions?'
    },
    {   type: 'input',
        name: 'Credit',
        message: 'Who and/or what sites helped you?'
    },
    {   type: 'input',
        name: 'Links',
        message: 'Add url information pertaining to this project: '
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache', 'None'],
    },
    {   type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username:' },

    {   type: 'input',
        name: 'Email',
        message: 'Enter your email address:' },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else { 
        console.log('README.md successfully generated!');
    }
});
    
}
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
      });
}

// Function call to initialize app
init();
