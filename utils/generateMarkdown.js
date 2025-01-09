// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    None: '',
  };
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    None: '',
  };
  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'This application does not use a license.';
  }
  return `This application is covered under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseSection = renderLicenseSection(data.License);

  return `# ${data.Title}

${licenseBadge}
  
## Description
${data.Description}
  
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
 ## Installation
${data.Installation}
  
## Usage
${data.Usage}
  
## License
${licenseSection}
  
## Contributing
${data.Contributing}
  
## Tests
${data.Tests}

## Credit
${data.Credit}

## Links
${data.Links}
  
## Questions
Reach me here for additional questions:
- GitHub: [${data.GitHub}](https://github.com/${data.GitHub})
- Email: [${data.Email}](mailto:${data.Email})
  `;
  
}

export default generateMarkdown;
