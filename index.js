const express = require('express'); // import express
const app = express(); // initialize express
const cors = require('cors'); // import cors package

// import our fake weather data
const fakeWeatherData = require('./data.js');

// Enable all CORS requests
app.use(cors());

//GET route
app.get('/weather', function(req, res) {
    //store query string param in CityName var
    let cityName = req.query.city.toLowerCase();

    //loop through fake data array
    for (let i = 0; i < fakeWeatherData.length; i++) {
        //if no city parameter exists
        if (!cityName) {
            res.send({"status": "error", "message": "Please enter a city name"})
        } else if (cityName == fakeWeatherData[i].city.toLocaleLowerCase()){
            return res.send(fakeWeatherData[i])
        }
    }

    //if city param isn't in our fake data set
    res.send({"status": "error", "message": "This city isn't in our database"})
    
});

//Listen in on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000...');
})