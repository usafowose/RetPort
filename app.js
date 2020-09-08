// Configuring dotenv to read env vars and requiring dependencies

require('dotenv').config();

const axios = require('axios');
const fs = require('fs');
const keys = require("./Config/keys");
const cTable = require('console.table');
const { encode } = require('punycode');
const quotes = require('./Model/quotes');
const inquire = require('inquirer');


// Importing API Keys from env for axios calls
const jobsKey = keys.jobsKey
const newsKey = keys.newsKey;

// Randomly selecting quotes to display to user 
let quoteNum = Math.floor(Math.random() * 31);
let thisQuote = `quote${quoteNum}`;

console.table(` \n --------------- \n ${quotes[thisQuote]} \n --------------- \n `);

// Sync File Read, JSON parsing,decoding and Assignment to Data Variable 
let data = JSON.parse(
    fs.readFileSync('./user.txt', { encoding: 'utf-8' })
);

let userName = data.name;
let userStatus = data.status;
let currentCity = data.current_city.toLowerCase();
let desiredMove = data.desiredMove.toLowerCase().split(",")[0];
// If city has two parts (i.e. Los Angeles, San Francisco, etc split and rejoin with hyphen "-")
if (desiredMove.split(" ")[1]) {
    desiredMove = `${desiredMove.split(" ").join('-')}`;
};
console.log(`Searching...${desiredMove}`);


// HTTP Get Requests via Axios Package to TeleportAPI (Qual of Life Ratings) 
axios.get(`https://api.teleport.org/api/urban_areas/slug:${desiredMove}/scores`).then(response => {
    let rawData = response.data.categories;
    for (i = 0; i < rawData.length; i++) {
        delete (rawData[i].color);
    };
    console.table(rawData);

    inquire.prompt({
        type: "checkbox",
        message: 'What is the most important quality of your retirement city?',
        choices: ['Housing', 'Cost of Living', 'Startups', 'Venture Capital', 'Travel Connectivity', 'Commute', 'Business Freedom', 'Safety', 'Healthcare', 'Education', 'Environmental Quality', 'Economy', 'Taxation', 'Internet Access', 'Leisure & Culture', 'Tolerance', 'Outdoors'],
        name: 'qualityOne'
    }).then(answers => {
        console.log(answers['qualityOne']);
        for (let x in rawData) {
            if (rawData[x].name === answers.qualityOne[0]) {
                console.log(`\n In ${desiredMove.toUpperCase()}, This Is The Score In The ${rawData[x].name} Category: \n-------------------\n`)
                console.table(rawData[x]);
                break;
            }
        }
    });
}).catch(err => console.log(err));


// HTTP Get Request for Local News
var getNews = () => {
    let query = desiredMove;
    let targetURL = `https://content.guardianapis.com/search?q=${query}&api-key=${newsKey}`; 

    axios.get(encodeURI(targetURL)).then(response => {
        var responseData = response.data.response.results;
        console.log(responseData);
    }).catch(err => {
        err ? console.log(err) : console.log(`no error`);
    })
};
// HTTP Get Req for Certain Jobs ***Use Inquirer?








