//  Covid19
//  Server

"use strict";
const express = require('express')
const cors = require('cors')
const app = express()

//this allows my client to communicate with this server with cors enabled
app.use(cors())

const port = 3001
app.get('/covid/:location', covid)
app.listen(port, () => console.log(`Server listening on port ${port}!`))

function covid(req, res) {
    let location = req.params.location;
    console.log("Request for Covid Data")

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    var request = require("request");

    var options = {
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/country',
    qs: {'date-format': 'YYYY-MM-DD', format: 'json', date: today, name: location},
    headers: {
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
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
