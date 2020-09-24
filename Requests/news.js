const axios = require('axios');
const keys = require("./../Config/keys");
const newsKey = keys.newsKey;
const moment = require('moment');
const getJobs = require('./jobs').getJobs; 
const data = require('./jobs').data; 


let userName = data.name;
let userStatus = data.status;
let currentCity = data.current_city.toLowerCase();
let desiredMoveCity = data.desiredMove.trim().toLowerCase().split(",")[0];
let desiredMoveState = data.desiredMove.trim().toUpperCase().split(",")[1];
let jobNeeded = data.jobNeeded;


var getNews = () => {
    let query = desiredMoveCity;
    let targetURL = `https://content.guardianapis.com/search?q=${query}&page-size=30&order-by=relevance&api-key=${newsKey}&show-fields=shortUrl`;

    // Get Request
    axios.get(encodeURI(targetURL)).then(response => {
        var responseData = response.data.response.results;
        // console.log(responseData); 
        let userDataView = [];

        // Filtering search results for News Articles as opposed to Sports, Music, etc. Also extracting only articleTitle and WebUrl for user to view and potentially read article. 
        for (x in responseData) {
            if (responseData[x].pillarName === 'News') {
                let obj = {};
                obj.articleName = responseData[x].webTitle;
                obj.webUrl = responseData[x].fields.shortUrl;
                obj.publicationDate = moment(responseData[x].webPublicationDate).format("MMM Do YYYY")
                userDataView.push(obj);
            }
        }
        console.table(userDataView);

        if (jobNeeded) { setTimeout(() => getJobs(), 3000) };
    }).catch(err => {
        console.log(err)
    })
};

module.exports = getNews; 