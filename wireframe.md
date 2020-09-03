1. What is your name? (Inquirer for questions).
   Age? 
   Gender?
   Occupation?
   Do You Know Where You Want To Retire? 
    - If so, where? If not, move on. 
    * No DB, just stream responses through fs module to txt file. 

2. If a retiree doesn't have many retirement plans yet, this app would be hard to implement without suggestions. 

3. To make suggestions, I must aggregate the data and then organize it based on different properties. (OOP). 

-------------------------------------------------

## API Usage 
1. Inquirer API -- require package and configure prompts 
2. USAJobs.gov
    * API Key - ************
    * Base URL: https://data.usajobs.gov/api/search
    * Req Header Params: Host, User Agent, Auth Key
    * Query Params to Append to BaseURL: 
        -  Keyword (contains): https://data.usajobs.gov/api/search?Keyword=Software
        - PositionTitle: https://data.usajobs.gov/api/Search?PositionTitle=Electrical%20Engineer
        - RemunerationMinimumAmount (minimum salary): https://data.usajobs.gov/api/Search?RemunerationMinimumAmount=15000
        - LocationName (city, state): https://data.usajobs.gov/api/Search?LocationName=Atlanta,%20Georgia
3. News by Search (Guardian API) 
    * API Key : xxxxxx
    * BaseURL: https://content.guardianapis.com/search?q=debates
    * See Query Operators: "https://open-platform.theguardian.com/documentation/"
4. Teleport API: z
    * Base URL for Qual. of Life Scores: GET /urban_areas/{ua_id}/scores/ ... (slug:atlanta) --> only accepts lowercase city name query in ua id. --> ****city.toLowerCase(). ****
        - Ex. req.url for Atlanta : https://api.teleport.org/api/urban_areas/slug%3Aatlanta/scores/
    * No API Key Needed
5. Weather API: 
    *

-------------------------------------------------

## Implementation
1. Inquirer for original setup 
    - Create user object with name, age, current city of residence, and desired city of retirement. 
    - require responses
    - Export UserDataArr with UserObj. 

2. Axios for HTTP Requests to API
    - Import userData Object for calls 
    - Parse JSON object into async axios requests
    - Store Responses as Data Ojects

3. Scripts
    - Include scripts in package.json file to synchronously run all js files (inquirer, axios reqs, streams to file)