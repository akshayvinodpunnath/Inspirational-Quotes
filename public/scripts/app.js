const generateQuoteBtn = document.getElementById('Generate-Quote');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

//Generate Quote button event listener
generateQuoteBtn.addEventListener('click', function() {
    //Fetch data from get-quote route
    let myFetch = fetch('/get-quote');

    //callback.
    myFetch.then(function(response) {
        response.text().then(function(text) {
            const jsonText = JSON.parse(text);
            quoteText.textContent = `"${jsonText.quoteText}"`;
            quoteAuthor.textContent = `- "${jsonText.quoteAuthor}"`;
        });
    });

})