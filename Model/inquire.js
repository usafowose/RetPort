// Dependencies
const inquirer = require("inquirer");
const quotes = require("./quotes");
const fs = require('fs');
const Person = require('./person');
const InputPrompt = require('inquirer/lib/prompts/input');
const { type } = require('os');
const { stat } = require('fs');
const { start } = require("repl");

// Set up inquirer for console queries and to capture inputs. ucfc

var inquire = () => {
    inquirer.prompt([
        {
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
        },
        {
            type: 'confirm',
            message: 'Do you intend to find work in the city to which you retire?',
            name: 'job_search'
        }
    ]).then(answers => {
        let userName = (answers["Username"]);
        let status = answers["retirement_status"][0];
        let current_city = answers["current_city"];
        let dest_choices = answers["destination_choics"];
        let jobNeeded = answers["job_search"];

        let persObj = new Person(userName, status, current_city, dest_choices, jobNeeded);
        persObj.createObj();
    }).catch((err) => {
        console.log(err)
    });
};

inquire();
// module.exports = inquire;
// console.log(userName);









// 