require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
// Importing APi Keys from .env for axios calls
const jobsKey = require('./../Config/keys').jobsKey;

// Sync File Read, JSON parsing,decoding and Assignment to Data Variable 
const data = JSON.parse(
    fs.readFileSync('././user.txt', { encoding: 'utf-8' }));

// Assigning data from txt file to Variables
let userName = data.name;
let userStatus = data.status;
let currentCity = data.current_city.toLowerCase();
let desiredMoveCity = data.desiredMove.trim().toLowerCase().split(",")[0];
let desiredMoveState = data.desiredMove.trim().toUpperCase().split(",")[1];
let jobNeeded = data.jobNeeded;


var getJobs = () => {
    let jobsUrl = `https://data.usajobs.gov/api/search?LocationName=Baltimore, Maryland`
    axios.get(encodeURI(jobsUrl), {
        headers: {
            'Host':'data.usajobs.gov', 
            'User-Agent':'usafowose@gmail.com', 
            'Authorization-Key':jobsKey,
            'Page':1, 
            'ResultsPerPage':20
        }
    }).then(response => {
        console.log(`\nJobs Results in ${desiredMoveCity}:\n------------------------------\n`);
        let rawData = response.data.SearchResult.SearchResultItems[0].MatchedObjectDescriptor;
        // deleting obj properties that are unnecessary for response
        delete rawData.PositionID; 
        delete rawData.PositionLocation;
        delete rawData.PositionFormattedDescription; 
        delete rawData.UserArea;
        delete rawData.JobCategory;
        delete rawData.JobGrade; 
        delete rawData.PositionSchedule;
        delete rawData.PositionOfferingType; 

        console.log(rawData);
    }).catch(err => {
        console.log(err);
    });


}; 

module.exports = {data, getJobs};