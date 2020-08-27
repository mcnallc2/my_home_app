//  Weather API
//  Server

"use strict";
const express = require('express')
const cors = require('cors')
const app = express()

//this allows my client to communicate with this server with cors enabled
app.use(cors())

const port = 3002
app.get('/weather/:location', news)
app.listen(port, () => console.log(`Server listening on port ${port}!`))

function news(req, res) {

    let loc = req.params.location;

    console.log("Request for News Data")

    var request = require("request");

    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        qs: {q: loc},
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': '',
          useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.json(body)
    });
}
