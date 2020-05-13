const generateQouteBtn = document.getElementById("Generate-Quote");
const fs = require('fs');

// function readTextFile(file, callback) {
//     let rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

//usage:
// const generateQoute = () => {
//     // readTextFile("newQuotes.json", function(text){
//     //     let data = JSON.parse(text);
//     //     console.log(data);
//     // });
//     console.log(data)
// }

const generateQoute = () => {
    // fs.readFile('newQuotes.json', 'utf-8', (err, data) => { 
    //     if (err) throw err; 
      
    //     // Converting Raw Buffer to text 
    //     // data using tostring function. 
    //     console.log(data); 
    // }) 
    console.log('Test')
}

generateQouteBtn.addEventListener('click', generateQoute);