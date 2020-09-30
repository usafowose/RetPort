# RetPort (A Backend Retirement Portfolio) 

## Overview -
This application is a backend application that allows its users who have retired or are planning retirement to successfully plan out their life in retirement. Through calls to different API's, users can determine the best cities to retire in based on aggregate data and metadata.

Based on the users' preferences, a JSON Object Model will be tailored for them that will represent what city is best and/or what their city of choice has to offer them in retirement. 

----------------------------------------------------------------------------------
## App Usage -
In order to successfully use this application after cloning, you must first configure your API keys and incorporate them into the apPlication file structure. You will need Developer API Keys for: 

1. Request an API Token for The Guardian API [here](https://open-platform.theguardian.com/access/) 
2. Request an API Token for The USAJobs API [here](https://developer.usajobs.gov/APIRequest/Index)

* After you have received your API tokens, create a file in your root folder called .env. 
* In this file type in 'JOBS_KEY=' (without quotations) and then your USAJobs API Token that you have received right after the equals symbol. 
* Directly under that, type in 'NEWS_KEY=' (without quotations) and then your Guardian API Token that you have received right after the equals symbol.
- Ex: JOBS_KEY=jobskeyhere7654321
	  NEWS_KEY=newskeyhere7654321



### Key Implementations
  * Axios Calls
  * Readable and Writeable Streams 
  * Promises 
  * Process.Argv 
  * JSON Parsing
  * Request/Reponse Cycle 
  * fs module in Node
  * Inquirer (questions in console)
  * Dotenv Package and Environment Variables 
  * MomentJS 
  * Using API's 

 ### Web API's/ Sources
    1. Weather API (WeatherChannel)
	2. News by Search/Tags (The Guardian)
	3. Job Openings in the USA (USAjobs.gov)
	4. Teleport API: Quality of Life Scores (Out of 10) by City for: 
		* Housing 
		* Cost of Living 
		* Startups Ease of Entry 
		* Venture Capital 
		* Travel Connectivity 
		* Commute 
		* Business Freedom 
		* Safety
		* Healthcare 
		* Education
		* Leisure and Culture
		* Environmental Quality
		* Economy
		* Taxation
		* Outdoors
