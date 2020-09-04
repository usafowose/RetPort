// Requiring dependencies
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
let quoteNum = Math.floor(Math.random()*31); 
let thisQuote = `quote${quoteNum}`;

console.table(` \n --------------- \n ${quotes[thisQuote]} \n --------------- \n `); 

// Sync File Read, JSON parsing,decoding and Assignment to Data Variable 
let data = JSON.parse(
    fs.readFileSync('./user.txt', { encoding: 'utf-8' })
);

let userName = data.name
let userStatus = data.status; 
let currentCity = data.current_city.toLowerCase();
let desiredMove = data.desiredMove.toLowerCase().split(",")[0]; 
    if (typeof desiredMove.split(" ")[1]) {
        desiredMove = (`${desiredMove.split(" ")[0]}-${desiredMove.split(" ")[1]}`); 
        console.log(desiredMove)
    }
// console.log(desiredMove);




// HTTP Get Requests via Axios Package to TeleportAPI (Qual of Life Ratings) 

axios.get(`https://api.teleport.org/api/urban_areas/slug:${desiredMove}/scores`).then(response => {


    // inquire.prompt({
    //     type: "checkbox", 
    //     message: 'What is the most imprtant quality of your retirement city?', 
    //     choices: []
    // })
    console.log(response.data.categories)
}).catch(err => console.log(err)); 


// HTTP Get Request for Local News

// axios.get('') 


// HTTP Get Req for Certain Jobs ***Use Inquirer?








