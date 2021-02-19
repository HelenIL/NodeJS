const generateMarkDown = (data) => {

    switch (data.license) {
        case 'Apache 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 2-Clause':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'GNU AGPLv3.0':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU GPLv2.0':
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU GPLv3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
        return "Badge unavailable";
  }

  let table = `\n## Table of Contents\n`
  if (data.confirmInstall) { table += `* [Installation](#installation)\n`; }
  if (data.confirmUsage) { table += `* [Usage](#usage)\n`};
  if (data.confirmContribution) { table += `* [Contributors](#contributors)\n`};
  if (data.confirmTests) { table += `* [Tests](#tests)\n`};
  table += `* [License](#license)\n`;
  table += `* [Questions](#questions)\n`;

  let year = new Date();

  let readMeTemplate = `# ${data.title}\n`;

  readMeTemplate += `\n${licenseBadge}\n\n---\n`;

  readMeTemplate += `\n## Description\n${data.description}\n`;

  readMeTemplate += table;

  if (data.confirmInstall) {
    readMeTemplate += `\n## Installation\n${data.installation}\n`;
  }

  if (data.confirmUsage) {
    readMeTemplate += `\n## Usage\n${data.usage}`;
  }

  if (data.confirContribution) {
    readMeTemplate += `\n## Contributions\n${data.contributors}`;
  }

  if (data.confirmTests) {
    readMeTemplate += `\n## Testing\n${data.test}\n`;
  }

  readMeTemplate += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`;

  readMeTemplate += `\n## Questions\nFor additional information contact me at: \n\nGitHub: [@${data.username}](https://github.com/${data.username}/)\n\nEmail: [${data.email}](mailto:${data.email})\n`;
  
  return readMeTemplate;

}

module.exports = generateMarkDown;
