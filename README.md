# Github PDF Creator
[Github Repo](https://github.com/E-Huynh/github-pdf)

## Contact

Erik.W.Huynh@Gmail.com

[LinkedIn](https://www.linkedin.com/in/erik-huynh-228321196/)

[Portfolio](https://e-huynh.github.io/portfolio-gram/)
## Project Description
This project uses a username search and chosen favorite color to pull data from Github's API and generate a PDF.
## Functionality
User enters a github username. The application retrieves API data to generate information for a PDF. User can select a favorite color to customize the color scheme of the PDF.

Information gathered includes:
  * Bioimage
  * Name
  * Current Workplace
  * Location
  * Github profile
  * Blog
  * Bio
  * Number of public repos, followers, github stars, and followings
## Technology
The project was coded in Node.js with the use of:
  * [Axios](https://www.npmjs.com/package/axios)
  * [Puppeteer](https://www.npmjs.com/package/puppeteer)
  * [Inquirer](https://www.npmjs.com/package/inquirer)
## Installation and instructions
Download the files to your local machine. Using node, run "npm install" to install the required libraries. Open index.js with node and follow the command line prompts. A .PDF file titled after the name of the user will be created in the same directory.
## Example
![Gif of functionality](https://github.com/E-Huynh/github-pdf/blob/master/Github-pdf.gif?raw=true)
