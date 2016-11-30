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
    var website = 'https://www.eventbriteapi.com/v3/events/search/?token=';
    var filter = '&categories=102&location.latitude=45.5087&location.longitude=-73.554&location.within=20km';
    var token = 'TH7YBHKCSVXFCHI74NOV';
    return (
        requestPromise(website+token+filter)
        .then(function(events) {
        
            var event = JSON.parse(events.body);
            var listOfEvents = event.events;
            var arrayOfEvents = [];
        
            // returning a beautiful array of objects with events
            listOfEvents.forEach(function(techEvent){
                
                arrayOfEvents.push( {
                    name: techEvent.name.text,
                    description: techEvent.description.text,
                    url: techEvent.url,
                    startTime: techEvent.start.local,
                    endTime: techEvent.end.local
                } );
                
            });
            return arrayOfEvents;
            
        })
    
    );
}

//just testing what I have done
getEvents().then(function(event){

    console.log(event)
        
    
})


