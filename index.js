// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import fs from 'fs';

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
    {   type: 'editor',
        name: 'Installation',
        message: 'What are the installation instructions?'
    },
    {   type: 'editor',
        name: 'Usage',
        message: 'How do you use your project?'
    },
    {   type: 'editor',
        name: 'Contributing',
        message: 'How can others contribute?'
    },
    {   type: 'editor',
        name: 'Tests',
        message: 'What are the test instructions?'
    },
    {   type: 'editor',
        name: 'Credit',
        message: 'Who and/or what sites helped you?'
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

const licenses = {
    MIT: {
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        notice: 'This application is covered under the MIT license.',
      },
      Apache: {
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        notice: 'This application is covered under the Apache 2.0 license.',
      },
      None: {
        badge: '',
        notice: 'This application does not use a license.',
      },
}


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

function generateREADME(answers) {
    const licenseBadge = licenses[answers.License].badge;
    const licenseNotice = licenses[answers.License].notice;
  
    return `
  # ${answers.Title}
  
  ${licenseBadge}
  
  ## Description
  ${answers.Description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.Installation}
  
  ## Usage
  ${answers.Usage}
  
  ## License
  ${licenseNotice}
  
  ## Contributing
  ${answers.Contributing}
  
  ## Tests
  ${answers.Tests}

  ## Credit
  ${answers.Credit}
  
  ## Questions
  Reach me here for additional questions:
  - GitHub: [${answers.GitHub}](https://github.com/${answers.GitHub})
  - Email: [${answers.Email}](mailto:${answers.Email})
    `;
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile('README.md', readmeContent);
      });
}

// Function call to initialize app
init();
