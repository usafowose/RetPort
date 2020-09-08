const fs = require('fs');   


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

module.exports = Person; 
