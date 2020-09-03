// Dependencies
const inquirer = require("inquirer");
const quotes = require("./quotes");
const fs = require('fs');

const InputPrompt = require('inquirer/lib/prompts/input');
const { type } = require('os');
const { stat } = require('fs');
const { start } = require("repl");

require("dotenv").config();

// Set up inquirer for console queries and to capture inputs. ucfc
class Person {

    constructor(name, status, currentCity, desiredMove, jobNeeded) {
        this.name = name;
        this.status = status;
        this.currentCity = currentCity;
        this.desiredMove = desiredMove;
        this.jobNeeded = jobNeeded;
    }
    createObj() {
        let userObj = {
            name: this.name,
            status: this.status,
            current_city: this.currentCity,
            desiredMove: this.desiredMove,
            jobNeeded: this.jobNeeded
        }
        let stream = fs.createWriteStream('././user.txt');
        stream.write(JSON.stringify(userObj));
        // stream.end( () => {
        //     console.log('Stream completed'); 
        // }); 
    }
};
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