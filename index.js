const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/get-quote', function(req, res) {
  let dataJSON;
  fs.readFile('quotes.json','utf8', function(err,data) { 
    if (err) throw err; 
    dataJSON = JSON.parse(data)
    console.log(dataJSON.length)
    //res.status(200).send(Math.floor(Math.random() * (dataJSON.length - 1)) + 0);
    //res.sendStatus(200)
    res.json(dataJSON[Math.floor(Math.random() * (dataJSON.length - 1))])
  })
})

app.listen(8080);