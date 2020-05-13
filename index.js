const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/get-quote', function(req, res) {
  fs.readFile('quotes.json', (err,data) => {
    if (err) throw err;
    console.log(data)
  })
})

app.listen(8080);