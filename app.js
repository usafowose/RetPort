// Dependencies
const axios = require('axios'); 
const inquirer = require("inquirer"); 
const quotes = require("./quotes"); 
require("dotenv").config(); 

// Key Config
var keys = require("./Config/keys");
const InputPrompt = require('inquirer/lib/prompts/input');
const { type } = require('os');
const { stat } = require('fs');
var jobsKey = keys.jobsKey
var newsKey = keys.newsKey; 

// Set up inquirer for console queries and to capture inputs. ucfc
class Person {
    constructor(name, status) {
        let person = {
            name: name,
            status: status
        }; 
        return person; 
    }

}; 



let userData = []; 

inquirer.prompt([ {
    type: "input", 
    message: "Welcome! What is your name", 
    name: "Username", 
    
}, {
    type: "checkbox", 
    message: "What do you classify yourself as?", 
    choices: ["Retired", "Working, soon to retire", "Just Planning for the Future"], 
    name: "retirement_status"
}
]).then(answers => {
   let userName = (answers["Username"]);
   let status = answers["retirement_status"][0]; 

   let persObj = new Person(userName, status); 
   userData.push(persObj); 
   console.log(userData); 
})




// console.log(userName); 


// console.log(quotes); 


module.exports = userData; 





// 