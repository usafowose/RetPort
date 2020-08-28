const axios = require('axios');
const fs = require('fs'); 
const keys = require("./Config/keys");
const { encode } = require('punycode');


// const inquire = require('./Model/inquire'); 

// inquire(); 

var stream = fs.createReadStream('./user.txt');
var jobsKey = keys.jobsKey
var newsKey = keys.newsKey;

let userData =[]; 

stream.on('data', (err, data) => {
    if (err) {throw err}
    userData.push(JSON.parse(data));
})