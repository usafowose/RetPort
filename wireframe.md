1. What is your name? (Inquirer for questions).
   Age? 
   Gender?
   Occupation?
   Do You Know Where You Want To Retire? 
    - If so, where? If not, move on. 
    * No DB, just stream responses through fs module to json file. 

2. If a retiree doesn't have many retirement plans yet, this app would be hard to implement without suggestions. 

3. To make suggestions, I must aggregate the data and then organize it based on different properties. (OOP). 

-------------------------------------------------

## API Usage 
1. Inquirer API -- require package and configure prompts 
2. USA Jobs
    * Secure an API Key 
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
4. Teleport API: 
    * Base URL for Qual. of Life Scores: GET /urban_areas/{ua_id}/scores/ ... (slug:atlanta) --> ****city.toLowerCase(). ****
        - Ex. req.url for Atlanta : https://api.teleport.org/api/urban_areas/slug%3Aatlanta/scores/
    * No API Key Needed
5. Weather API: 
    *