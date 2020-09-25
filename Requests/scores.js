const axios = require('axios');
const inquire = require('inquirer');
const getNews = require('./news');
const data = require('./jobs').data;

// Assigning data from txt file to Variables
let userName = data.name;
let userStatus = data.status;
let currentCity = data.current_city.toLowerCase();
let desiredMoveCity = data.desiredMove.trim().toLowerCase().split(",")[0];
let desiredMoveState = data.desiredMove.trim().toUpperCase().split(",")[1];
let jobNeeded = data.jobNeeded;

// Teleport Get Request 
// If city has two parts (i.e. Los Angeles, San Francisco, etc split and rejoin with hyphen "-")
var getCity = () => {
    if (desiredMoveCity.split(" ")[1]) {
        desiredMoveCity = `${desiredMoveCity.split(" ").join('-')}`;
    };
    console.log(`Searching...${desiredMoveCity} \n\n`);
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${desiredMoveCity}/scores`).then(response => {
        let rawData = response.data.categories;
        for (i = 0; i < rawData.length; i++) {
            delete (rawData[i].color);
        };
        console.table(rawData);

        // Using inquirer to see which of the scores is most important to user
        inquire.prompt({
            type: "checkbox",
            message: 'What is the most important quality of your retirement city?',
            choices: ['Housing', 'Cost of Living', 'Startups', 'Venture Capital', 'Travel Connectivity', 'Commute', 'Business Freedom', 'Safety', 'Healthcare', 'Education', 'Environmental Quality', 'Economy', 'Taxation', 'Internet Access', 'Leisure & Culture', 'Tolerance', 'Outdoors'],
            name: 'qualityOne'
        }).then(answers => {
            for (let x in rawData) {

                if (rawData[x].name === answers.qualityOne[0]) {

                    console.log(`\n In ${desiredMoveCity.toUpperCase()}, This Is The Score In The ${rawData[x].name} Category:\n-------------------\n`)
                    console.log(rawData[x]);

                    console.log(`Searching for news in ${desiredMoveCity} \n ---------------------- \n`)
                    break;

                };
            }
            // waiting 3 seconds to maxe axios call for news in selected city
            setTimeout(() => getNews(), 3000)

        });
    }).catch(err => console.log(err)
    )
};

module.exports = getCity; 