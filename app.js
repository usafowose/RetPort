const axios = require('axios');
const fs = require('fs');
const keys = require("./Config/keys");
const { encode } = require('punycode');


// const inquire = require('./Model/inquire'); 

// inquire(); 


var jobsKey = keys.jobsKey
var newsKey = keys.newsKey;

var userData = [];

// var stream = fs.readFile('./user.txt', { encoding: 'utf-8' }, (err, data) => {
//     if (err) { console.log(err) }
//     data = JSON.parse(data);
//     userData.push(data)

// });

let data = fs.readFileSync('./user.txt', {encoding: 'utf-8'}); 
data = JSON.parse(data);

console.log(data); 


//  console.log(...userData); 





