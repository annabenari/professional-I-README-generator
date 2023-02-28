// Function to generate markdown for README
const renderLicenseBadge = (license) => {
  // Check if a license is specified
  if (license !== "None") {
    // Return a badge with the license name
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // If no license is specified, return an empty string
  return "";
};

const renderLicenseLink = (license) => {
  // Check if a license is specified
  if (license !== "None") {
    // Return a link to the license section in the table of contents
    return `\n* [License](#license)\n`;
  }
  // If no license is specified, return an empty string
  return "";
};

// Function to generate markdown using data from the user
function generateMarkdown(data) {
  // Return the formatted markdown
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.description}

  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
 
  ## Installation
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installations}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ##License
  ${data.license}

  ##Contributing
  ${data.contributing}

  ##Tests

  To run tests, write teh following command...

  \`\`\`
  ${data.test}
  \`\`\`

  ##Questions

  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }.
  You can find my Github at ${data.github}
`;
}

// Export the generateMarkdown function for use in other files
module.exports = generateMarkdown;
