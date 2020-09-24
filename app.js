// Configuring dotenv to read env vars and requiring dependencies
require('dotenv').config();

const axios = require('axios');
const jobsKey = require("./Config/keys").jobsKey;
const quotes = require('./Model/quotes');
const data = require('./Requests/scores').data;
const getCity = require('./Requests/scores').getCity;

// Randomly selecting quotes to display to user 
let quoteNum = Math.floor(Math.random() * 31);
let thisQuote = `quote${quoteNum}`;
console.table(` \n --------------- \n ${quotes[thisQuote]} \n --------------- \n `);

getCity();








