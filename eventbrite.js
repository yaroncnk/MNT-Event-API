var request = require('request');

//requesting API data 
function requestPromise(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}

//getting events from Eventbrite parsed as JSON
function getEvents() {
    return (
        requestPromise('https://www.eventbrite.com/d/canada--montreal/science-and-tech--events/oauth/authorize?response_type=code&client_id=138316538378882428467')
        .then(function(events) {
            var latestEvent = JSON.parse(events.body);
            return latestEvent; 

        })
    );
}

getEvents().then(function(events){
    console.log(events) ;   
    
})

.catch(function(err){
    console.log(err);
});
