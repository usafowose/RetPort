// Configuring dotenv to read env vars and requiring dependencies
require('dotenv').config();

const quotes = require('./Model/quotes');
const getCity = require('./Requests/scores');

// Randomly selecting quotes to display to user 
let quoteNum = Math.floor(Math.random() * 31);
let thisQuote = `quote${quoteNum}`;
console.table(` \n --------------- \n ${quotes[thisQuote]} \n --------------- \n `);

getCity();








