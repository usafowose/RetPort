// Dependencies
const axios = require('axios'); 
const inquirer = require("inquirer"); 
const quotes = require("./quotes"); 
require("dotenv").config(); 

// Key Config
var keys = require("./Config/keys");
const InputPrompt = require('inquirer/lib/prompts/input');
const { type } = require('os');
var jobsKey = keys.jobsKey
var newsKey = keys.newsKey; 

// Set up inquirer for console queries and to capture inputs. 

inquirer.prompt([ {
    type: "input", 
    message: "Welcome! What is your name", 
    name: "Username"
}
]).then(answers => {
    console.log(answers["Username"]);
})



// console.log(quotes); 





// 