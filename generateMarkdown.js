// Function to render license badge
function renderLicenseBadge(license) {
    if (license === "None") return "";
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  
  // Function to render license link
  function renderLicenseLink(license) {
    if (license === "None") return "";
    return `[License](#license)`;
  }
  
  // Function to render license section
  function renderLicenseSection(license) {
    if (license === "None") return "";
    return `## License
  This project is licensed under the ${license} license.`;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, you can reach me at:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  }
  
  export default generateMarkdown;