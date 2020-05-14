const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


//serve static files, files under public folder.
app.use(express.static(__dirname + '/public'));

//Landing Page, redirects to index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//service to retrieve quote
app.get('/get-quote', function(req, res) {
  let dataJSON;
  /*
    - Read file contents from quotes.json
    - Store the retured data into dataJSON variable
    - return random element from dataJSON array using dataJSON.length as max position
  */
  fs.readFile('quotes.json','utf8', function(err,data) { 
    if (err) throw err; 
    const dataJSON = JSON.parse(data)
    res.json(dataJSON[Math.floor(Math.random() * (dataJSON.length - 1))])
  })
})

//Start app at 8000
app.listen(8080);