// Dependencies
const inquirer = require("inquirer");
const quotes = require("./quotes");

const InputPrompt = require('inquirer/lib/prompts/input');
const { type } = require('os');
const { stat } = require('fs');

require("dotenv").config();
const axios = require('axios');
var keys = require("./Config/keys");
var jobsKey = keys.jobsKey
var newsKey = keys.newsKey;

// Set up inquirer for console queries and to capture inputs. ucfc
class Person {

    constructor(name, status, currentCity, desiredMove) {
        this.name = name;
        this.status = status;
        this.currentCity = currentCity;
        this.desiredMove = desiredMove;
    }
    createObj() {
        let userObj = {
            name: this.name,
            status: this.status,
            current_city: this.currentCity,
            desiredMove: this.desiredMove
        }
        return userObj;
    }
};

let userData = [];

inquirer.prompt([{
    type: "input",
    message: "Welcome! What is your name",
    name: "Username"

}, {
    type: "checkbox",
    message: "What do you classify yourself as?",
    choices: ["Retired", "Working, Soon to Retire", "Just Planning for the Future"],
    name: "retirement_status"
},
{
    type: "input",
    message: "Where do you currently live? (city, ST)",
    name: "current_city"
},
{
    type: "input",
    message: "Where have you thought of retiring? (Up to 3, separated by semicolons i.e. Chicago, IL; Achorage, AL)",
    name: "destination_choics"
}
]).then(answers => {
    let userName = (answers["Username"]);
    let status = answers["retirement_status"][0];

    let current_city = answers["current_city"];
    let dest_choices = answers["destination_choics"];


    let persObj = new Person(userName, status, current_city, dest_choices);
    userData.push(persObj.createObj())
    console.log(userData);
})




// console.log(userName); 


// console.log(quotes); 


module.exports = userData;





// 