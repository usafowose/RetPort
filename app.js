// Requiring dependencies
const axios = require('axios');
const fs = require('fs');
const keys = require("./Config/keys");
const cTable = require('console.table');
const { encode } = require('punycode');
const quotes = require('./Model/quotes');

// Importing API Keys from env for axios calls
const jobsKey = keys.jobsKey
const newsKey = keys.newsKey;

// Randomly selecting quotes to display to user 
let quoteNum = Math.floor(Math.random()*31); 
let thisQuote = `quote${quoteNum}`;

console.table(` \n --------------- \n ${quotes[thisQuote]}`); 

// Sync File Read, JSON parsing,decoding and Assignment to Data Variable 
let data = JSON.parse(
    fs.readFileSync('./user.txt', { encoding: 'utf-8' })
);

var userName = data.name
var userStatus = data.status; 
var currentCity = data.current_city;
var desiredMove = data.dest_choices; 

// HTTP Get Requests via Axios Package to API's 

axios.get('https://api.teleport.org/api/urban_areas/slug%3Aatlanta/scores').then(response => {
    console.log(response.data)
}).catch(err => console.log(err)); 








