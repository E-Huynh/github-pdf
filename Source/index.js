const inquirer = require("inquirer");
const axios = require("axios");
const puppeteer = require("puppeteer");
const generateHTML = require("../generateHTML.js")

//Declare variables 
let finalHTML, PDFname;

//Call functions
init();

//functions
async function init() {
    try {
        let { username } = await getUsername();
        let { color } = await getColor();
        let profile = await getProfile(username);
        let { avatar_url, name, company, bio, public_repos, followers, following, html_url, blog, location } = profile;
        let stars = await getStarred(username);
        profile.color = color;
        profile.stars = stars;
        const html = generateHTML(profile);
        finalHTML = html;
        PDFname = name;
        generatePDF();
    }
    catch (err) {
        console.log(err);
    }
};


function getUsername() {
    const username = inquirer.prompt([{
        type: "input",
        message: "Enter a Github username?",
        name: "username"
    }]);
    return username;
};
function getColor() {
    const color = inquirer.prompt([{
        type: 'list',
        name: 'color',
        message: 'What is your favorite color?',
        choices: ['Green', 'Blue', 'Pink', 'Red']
    }]);
    return color;
};
function getProfile(username) {
    return axios.get(`https://api.github.com/users/${username}`).then(res => {
        return res.data;
    });
};
function getStarred(username) {
    return axios.get(`https://api.github.com/users/${username}/starred`).then(res => {
        return res.data.length;
    });
};
async function generatePDF() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(`${finalHTML}`);
        await page.pdf({
            path: `${ PDFname }.pdf`,
            pageRanges: "1",
            format: "A4",
            printBackground: true
        });

        console.log("PDF created");
        await browser.close();
        process.exit();

    }
    catch (err) {
        console.log(err);
    }
};
